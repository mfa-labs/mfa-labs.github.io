(function () {
  var DATA_URL = document.body.getAttribute('data-source') || 'ujian/uts.json';

  var gate = document.getElementById('gate');
  var form = document.getElementById('form');
  var pinInput = document.getElementById('pin');
  var submit = document.getElementById('submit');
  var err = document.getElementById('err');
  var content = document.getElementById('content');

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

  function render(data) {
    content.innerHTML = '';

    var toolbar = node('div', 'toolbar');
    var printButton = node('button', null, 'Cetak');
    printButton.type = 'button';
    printButton.addEventListener('click', function () { window.print(); });
    toolbar.appendChild(printButton);
    content.appendChild(toolbar);

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
    content.appendChild(head);

    if (data.petunjuk && data.petunjuk.length) {
      var box = node('section', 'petunjuk');
      box.appendChild(node('h2', null, 'Petunjuk'));
      var list = node('ol');
      data.petunjuk.forEach(function (item) { list.appendChild(node('li', null, item)); });
      box.appendChild(list);
      content.appendChild(box);
    }

    (data.bagian || []).forEach(function (bagian) {
      var section = node('section', 'bagian');
      section.appendChild(node('h2', null, bagian.judul));
      var list = node('ol', 'butir');
      (bagian.butir || []).forEach(function (butir) {
        var item = node('li');
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
        item.appendChild(body);
        list.appendChild(item);
      });
      section.appendChild(list);
      content.appendChild(section);
    });
  }

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
