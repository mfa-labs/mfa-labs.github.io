(function () {
  'use strict';

  var DATA_URL = document.body.getAttribute('data-source') || 'ujian/uts.json';
  var STORAGE_KEY = 'ujian:' + DATA_URL;
  var DEFAULT_SECONDS = 60;

  var gate = document.getElementById('gate');
  var form = document.getElementById('form');
  var pinInput = document.getElementById('pin');
  var submit = document.getElementById('submit');
  var err = document.getElementById('err');
  var content = document.getElementById('content');

  var timerId = null;
  var nextButton = null;
  var wizardRoot = null;
  var liveRegion = null;
  var state = null;
  var currentData = null;
  var plainSections = [];

  function showError(message) {
    err.textContent = message;
    err.hidden = false;
  }

  function bytesFromBase64(value) {
    var binary = atob(value);
    var bytes = new Uint8Array(binary.length);
    for (var i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return bytes;
  }

  async function decrypt(payload, pin) {
    var encoder = new TextEncoder();
    var baseKey = await crypto.subtle.importKey('raw', encoder.encode(pin), 'PBKDF2', false, ['deriveKey']);
    var key = await crypto.subtle.deriveKey(
      { name: 'PBKDF2', salt: bytesFromBase64(payload.salt), iterations: payload.iterations, hash: 'SHA-256' },
      baseKey,
      { name: 'AES-GCM', length: 256 },
      false,
      ['decrypt']
    );
    var plain = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: bytesFromBase64(payload.iv) },
      key,
      bytesFromBase64(payload.ct)
    );
    return new TextDecoder().decode(plain);
  }

  var payloadPromise = null;
  function loadPayload() {
    if (!payloadPromise) {
      payloadPromise = fetch(DATA_URL, { cache: 'no-store' }).then(function (res) {
        if (!res.ok) throw new Error('fetch');
        return res.json();
      });
    }
    return payloadPromise;
  }

  function node(tag, className, text) {
    var element = document.createElement(tag);
    if (className) element.className = className;
    if (text != null) element.textContent = text;
    return element;
  }

  function isPositiveInt(value) {
    return typeof value === 'number' && isFinite(value) && value > 0 && Math.floor(value) === value;
  }

  function secondsFor(butir, section) {
    if (isPositiveInt(butir.detik)) return butir.detik;
    if (isPositiveInt(section.detikPerSoal)) return section.detikPerSoal;
    return DEFAULT_SECONDS;
  }

  function formatTime(total) {
    var safe = Math.max(0, total);
    var minutes = Math.floor(safe / 60);
    var seconds = safe % 60;
    return (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }

  function renderHeader(data) {
    var head = node('div', 'exam-head');
    head.appendChild(node('p', 'kicker', data.mataKuliah + ' \u00b7 ' + data.kode + ' \u00b7 ' + data.sks + ' SKS'));
    head.appendChild(node('h1', null, data.judul));
    var meta = node('dl', 'meta');
    [['Semester', data.semester], ['Tanggal', data.tanggal], ['Waktu', data.waktu], ['Sifat', data.sifat]].forEach(function (row) {
      if (!row[1]) return;
      meta.appendChild(node('dt', null, row[0]));
      meta.appendChild(node('dd', null, row[1]));
    });
    head.appendChild(meta);
    return head;
  }

  function renderPetunjuk(data) {
    if (!data.petunjuk || !data.petunjuk.length) return null;
    var box = node('section', 'petunjuk');
    box.appendChild(node('h2', null, 'Petunjuk'));
    var list = node('ol');
    data.petunjuk.forEach(function (item) { list.appendChild(node('li', null, item)); });
    box.appendChild(list);
    return box;
  }

  function renderQuestionBody(butir) {
    var body = node('div', 'butir-body');
    body.appendChild(node('p', 'soal', butir.teks));
    if (butir.pilihan && butir.pilihan.length) {
      var options = node('ol', 'pilihan');
      butir.pilihan.forEach(function (option, index) {
        var optionItem = node('li');
        optionItem.appendChild(node('span', 'abjad', String.fromCharCode(97 + index) + '.'));
        optionItem.appendChild(node('span', 'pilihan-teks', option));
        options.appendChild(optionItem);
      });
      body.appendChild(options);
    }
    return body;
  }

  function renderSection(section) {
    var element = node('section', 'bagian');
    element.appendChild(node('h2', null, section.judul));
    var list = node('ol', 'butir');
    (section.butir || []).forEach(function (butir) {
      var item = node('li');
      item.appendChild(renderQuestionBody(butir));
      list.appendChild(item);
    });
    element.appendChild(list);
    return element;
  }

  function printToolbar() {
    var toolbar = node('div', 'toolbar');
    var printButton = node('button', null, 'Cetak');
    printButton.type = 'button';
    printButton.addEventListener('click', function () { window.print(); });
    toolbar.appendChild(printButton);
    return toolbar;
  }

  function collectTimedQuestions(data) {
    var questions = [];
    (data.bagian || []).forEach(function (section) {
      if (!isPositiveInt(section.detikPerSoal)) return;
      (section.butir || []).forEach(function (butir) {
        questions.push({ section: section, butir: butir, seconds: secondsFor(butir, section) });
      });
    });
    return questions;
  }

  function summarize(timed) {
    var groups = [];
    timed.forEach(function (question) {
      var last = groups[groups.length - 1];
      if (!last || last.judul !== question.section.judul) {
        groups.push({
          judul: question.section.judul,
          count: 0,
          min: question.seconds,
          max: question.seconds,
        });
        last = groups[groups.length - 1];
      }
      last.count += 1;
      if (question.seconds < last.min) last.min = question.seconds;
      if (question.seconds > last.max) last.max = question.seconds;
    });
    return groups;
  }

  function loadSaved() {
    try {
      var raw = window.sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var saved = JSON.parse(raw);
      if (!saved || saved.v !== 1 || !isFinite(saved.i)) return null;
      return saved;
    } catch (error) {
      return null;
    }
  }

  function saveState() {
    if (!state) return;
    try {
      window.sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          v: 1,
          i: state.i,
          answers: state.answers,
          deadline: state.deadline,
        })
      );
    } catch (error) {
      /* sessionStorage bisa diblokir; ujian tetap berjalan tanpa persistensi. */
    }
  }

  function clearSaved() {
    try {
      window.sessionStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      /* abaikan */
    }
  }

  function stopTimer() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  }

  function renderIntro(timed) {
    var intro = node('section', 'intro');
    var card = node('div', 'intro-card');
    card.appendChild(node('p', 'kicker', 'Mode ujian'));
    card.appendChild(node('h2', null, 'Bagian pilihan ganda'));

    var list = node('ul', 'intro-list');
    summarize(timed).forEach(function (group) {
      var duration = group.min === group.max
        ? group.min + ' detik per soal'
        : group.min + '\u2013' + group.max + ' detik per soal';
      list.appendChild(node('li', null, group.judul + ' \u00b7 ' + group.count + ' soal \u00b7 ' + duration));
    });
    card.appendChild(list);

    card.appendChild(
      node(
        'p',
        'hint',
        'Timer mulai setelah kamu menekan Mulai. Setelah lanjut, soal tidak bisa dibuka lagi; waktu habis otomatis pindah ke soal berikutnya.'
      )
    );

    var actions = node('div', 'intro-actions');
    var startButton = node('button', null, loadSaved() ? 'Lanjutkan' : 'Mulai');
    startButton.type = 'button';
    startButton.addEventListener('click', startWizard);
    actions.appendChild(startButton);

    var printButton = node('button', 'secondary', 'Cetak semua soal');
    printButton.type = 'button';
    printButton.addEventListener('click', function () { window.print(); });
    actions.appendChild(printButton);

    card.appendChild(actions);

    if (plainSections.length) {
      card.appendChild(node('p', 'hint', 'Bagian uraian akan ditampilkan setelah bagian bertimer selesai.'));
    }

    intro.appendChild(card);
    content.appendChild(intro);
  }

  function startWizard() {
    var questions = collectTimedQuestions(currentData);
    if (!questions.length) return;

    state = { questions: questions, i: 0, answers: {}, deadline: 0 };
    var saved = loadSaved();
    if (saved) {
      state.i = Math.max(0, Math.min(Math.floor(saved.i), questions.length - 1));
      if (saved.answers && typeof saved.answers === 'object') state.answers = saved.answers;
      if (typeof saved.deadline === 'number') state.deadline = saved.deadline;
      if (state.deadline && state.deadline <= Date.now()) {
        state.i += 1;
        state.deadline = 0;
      }
    }

    var intro = content.querySelector('.intro');
    if (intro) intro.remove();

    if (state.i >= questions.length) {
      finishWizard();
      return;
    }

    content.classList.add('wizard-active');
    wizardRoot = node('div', 'wizard-root');
    content.appendChild(wizardRoot);
    renderQuestion();
  }

  function select(index) {
    if (!state) return;
    var question = state.questions[state.i];
    if (!question.butir.pilihan || index < 0 || index >= question.butir.pilihan.length) return;

    state.answers[state.i] = index;
    if (wizardRoot) {
      var options = wizardRoot.querySelectorAll('.option');
      for (var i = 0; i < options.length; i++) {
        var selected = i === index;
        options[i].classList.toggle('is-selected', selected);
        options[i].setAttribute('aria-pressed', selected ? 'true' : 'false');
      }
    }
    if (nextButton) nextButton.disabled = false;
    saveState();
  }

  function advance() {
    if (!state) return;
    stopTimer();
    state.i += 1;
    state.deadline = 0;
    if (state.i >= state.questions.length) {
      finishWizard();
      return;
    }
    saveState();
    renderQuestion();
  }

  function renderQuestion() {
    stopTimer();
    if (!state || !wizardRoot) return;

    var question = state.questions[state.i];
    var total = state.questions.length;
    if (!state.deadline || state.deadline <= Date.now()) {
      state.deadline = Date.now() + question.seconds * 1000;
    }

    wizardRoot.innerHTML = '';
    var card = node('div', 'wizard');

    var head = node('div', 'wizard-head');
    var meta = node('div', 'wizard-meta');
    meta.appendChild(node('p', 'wizard-section', question.section.judul));
    meta.appendChild(node('p', 'wizard-count', 'Soal ' + (state.i + 1) + ' dari ' + total));
    head.appendChild(meta);

    var timer = node('div', 'timer');
    timer.setAttribute('role', 'timer');
    timer.setAttribute('aria-label', 'Sisa waktu untuk soal ini');
    var timerValue = node('span', 'timer-value', formatTime(question.seconds));
    timer.appendChild(timerValue);
    head.appendChild(timer);
    card.appendChild(head);

    var progress = node('div', 'progress');
    progress.setAttribute('role', 'progressbar');
    progress.setAttribute('aria-valuemin', '1');
    progress.setAttribute('aria-valuemax', String(total));
    progress.setAttribute('aria-valuenow', String(state.i + 1));
    progress.setAttribute('aria-label', 'Kemajuan soal');
    var bar = node('span', 'progress-bar');
    bar.style.width = ((state.i + 1) / total) * 100 + '%';
    progress.appendChild(bar);
    card.appendChild(progress);

    var body = node('div', 'wizard-question');
    var heading = node('h2', 'soal-heading', question.butir.teks);
    heading.tabIndex = -1;
    body.appendChild(heading);

    var hasOptions = question.butir.pilihan && question.butir.pilihan.length > 0;
    if (hasOptions) {
      var options = node('div', 'options');
      question.butir.pilihan.forEach(function (option, index) {
        var selected = state.answers[state.i] === index;
        var button = node('button', 'option' + (selected ? ' is-selected' : ''));
        button.type = 'button';
        button.setAttribute('aria-pressed', selected ? 'true' : 'false');
        button.appendChild(node('span', 'abjad', String.fromCharCode(97 + index) + '.'));
        button.appendChild(node('span', 'pilihan-teks', option));
        button.addEventListener('click', function () { select(index); });
        options.appendChild(button);
      });
      body.appendChild(options);
    }
    card.appendChild(body);

    liveRegion = node('p', 'sr-only');
    liveRegion.setAttribute('aria-live', 'polite');
    card.appendChild(liveRegion);

    var actions = node('div', 'wizard-actions');
    actions.appendChild(
      node('p', 'hint', hasOptions ? 'Pilih satu jawaban. Waktu habis otomatis lanjut.' : 'Waktu habis otomatis lanjut.')
    );

    nextButton = node('button', null, state.i === total - 1 ? 'Selesai' : 'Lanjut');
    nextButton.type = 'button';
    if (hasOptions && state.answers[state.i] == null) nextButton.disabled = true;
    nextButton.addEventListener('click', advance);
    actions.appendChild(nextButton);
    card.appendChild(actions);

    wizardRoot.appendChild(card);
    window.scrollTo(0, 0);
    heading.focus({ preventScroll: true });

    saveState();
    startTimer(timer, timerValue);
  }

  function startTimer(timer, timerValue) {
    var questionIndex = state ? state.i : -1;
    var lastAnnouncement = 0;

    function update() {
      if (!state || state.i !== questionIndex) return;
      var remaining = Math.ceil((state.deadline - Date.now()) / 1000);
      if (remaining < 0) remaining = 0;
      timerValue.textContent = formatTime(remaining);
      timer.classList.toggle('is-urgent', remaining <= 10);
      if ((remaining === 30 || remaining === 10) && lastAnnouncement !== remaining) {
        lastAnnouncement = remaining;
        if (liveRegion) liveRegion.textContent = remaining + ' detik tersisa.';
      }
      if (remaining <= 0) {
        stopTimer();
        advance();
      }
    }

    update();
    if (state && state.i === questionIndex) timerId = setInterval(update, 250);
  }

  function finishWizard() {
    stopTimer();
    var answered = 0;
    var total = 0;
    if (state) {
      total = state.questions.length;
      state.questions.forEach(function (question, index) {
        if (state.answers[index] != null) answered += 1;
      });
    }

    clearSaved();
    state = null;
    nextButton = null;
    liveRegion = null;
    content.classList.remove('wizard-active');
    if (wizardRoot) {
      wizardRoot.remove();
      wizardRoot = null;
    }

    var done = node('section', 'done');
    done.appendChild(node('h2', null, 'Bagian bertimer selesai'));
    if (total) {
      done.appendChild(node('p', null, answered + ' dari ' + total + ' soal terjawab.'));
    }
    done.appendChild(node('p', 'hint', 'Bagian uraian ditampilkan di bawah. Kamu masih bisa mencetak seluruh soal.'));
    content.appendChild(done);

    plainSections.forEach(function (section) {
      content.appendChild(renderSection(section));
    });
    content.appendChild(printToolbar());
    done.scrollIntoView({ block: 'start' });
  }

  function render(data) {
    stopTimer();
    state = null;
    nextButton = null;
    wizardRoot = null;
    liveRegion = null;
    currentData = data;
    content.innerHTML = '';

    content.appendChild(renderHeader(data));
    var petunjuk = renderPetunjuk(data);
    if (petunjuk) content.appendChild(petunjuk);

    var timed = collectTimedQuestions(data);
    plainSections = (data.bagian || []).filter(function (section) {
      return !isPositiveInt(section.detikPerSoal);
    });

    var printView = node('div', 'print-only');
    printView.appendChild(renderHeader(data));
    var printPetunjuk = renderPetunjuk(data);
    if (printPetunjuk) printView.appendChild(printPetunjuk);
    (data.bagian || []).forEach(function (section) {
      printView.appendChild(renderSection(section));
    });
    content.appendChild(printView);

    if (!timed.length) {
      content.appendChild(printToolbar());
      plainSections.forEach(function (section) {
        content.appendChild(renderSection(section));
      });
      return;
    }

    renderIntro(timed);
  }

  document.addEventListener('keydown', function (event) {
    if (!state) return;
    if (event.target && (event.target.tagName === 'INPUT' || event.target.tagName === 'BUTTON')) return;

    if (event.key >= '1' && event.key <= '9') {
      var question = state.questions[state.i];
      var index = Number(event.key) - 1;
      if (question.butir.pilihan && index < question.butir.pilihan.length) {
        select(index);
        event.preventDefault();
      }
      return;
    }

    if (event.key === 'Enter' && nextButton && !nextButton.disabled) {
      advance();
      event.preventDefault();
    }
  });

  window.addEventListener('beforeunload', function (event) {
    if (!state) return;
    event.preventDefault();
    event.returnValue = '';
  });

  if (!window.crypto || !window.crypto.subtle) {
    submit.disabled = true;
    showError('Halaman ini harus dibuka melalui alamat https:// atau http://localhost, bukan langsung dari berkas.');
    return;
  }

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    err.hidden = true;
    submit.disabled = true;
    try {
      var payload = await loadPayload();
      var text = await decrypt(payload, pinInput.value);
      render(JSON.parse(text));
      var staticHeader = document.querySelector('.wrap > header');
      if (staticHeader) staticHeader.hidden = true;
      gate.hidden = true;
      content.hidden = false;
      window.scrollTo(0, 0);
    } catch (error) {
      showError('PIN salah, atau berkas soal tidak dapat dibaca. Coba lagi.');
      pinInput.select();
    } finally {
      submit.disabled = false;
    }
  });
})();
