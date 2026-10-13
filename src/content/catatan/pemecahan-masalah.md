---
title: 'Pemecahan Masalah'
description: 'Cara umum menghadapi soal cerita: memahami masukan-proses-keluaran, memilih struktur kendali, menelusuri, dan menguji kasus batas sebelum rancangan dianggap selesai.'
course: 'algoritma-dan-pemrograman-1'
pubDate: 2026-11-30
tags: ['Pemecahan Masalah', 'Metodologi', 'Penelusuran']
draft: false
---

Sampai pekan lalu, setiap soal datang dengan topiknya sendiri: ada pekan tentang seleksi, ada pekan tentang iterasi. Mulai pekan ini soalnya datang sebagai **cerita** — tanpa memberi tahu struktur kendali apa yang harus dipakai. Tugas kita justru mengenalinya sendiri.

## Keadaan yang sebenarnya

Di dunia nyata, tidak ada yang memberi tahu "ini soal iterasi". Yang ada hanyalah masalah, dan kita yang harus menentukan bagaimana menyelesaikannya. Kemampuan inilah yang membedakan orang yang hafal sintaks dari orang yang bisa **memecahkan masalah**.

Kabar baiknya, cara menghadapinya tidak perlu dikarang setiap kali. Ada langkah-langkah yang bisa diulang untuk masalah apa pun.

## Langkah-langkah pemecahan masalah

### 1. Pahami masalahnya

Baca soal sampai bisa menceritakannya ulang dengan kata-katamu sendiri. Kalau belum bisa, berarti ada bagian yang belum dipahami. Menulis pseudocode sebelum paham masalahnya adalah cara tercepat menghasilkan rancangan yang salah.

### 2. Pisahkan masukan, proses, dan keluaran

Tanyakan tiga hal: apa yang **diberikan**, apa yang harus **dihitung**, dan apa yang harus **dihasilkan**. Pemisahan ini sering langsung memperlihatkan langkah-langkah yang dibutuhkan.

### 3. Pecah menjadi bagian yang lebih kecil

Masalah besar hampir selalu bisa dipecah. "Hitung gaji bersih" menjadi: hitung gaji pokok, hitung tunjangan, hitung potongan, lalu kurangi. Setiap bagian yang masih besar dipecah lagi sampai cukup kecil untuk ditulis sebagai satu instruksi. Kemampuan memecah inilah inti dari *computational thinking* yang kita pelajari di pekan 2.

### 4. Pilih struktur kendali

Setiap bagian masalah punya struktur kendali yang paling cocok. Kesalahan memilih struktur di sini akan mengacaukan seluruh bagian di bawahnya.

### 5. Tulis pseudocodenya

Baru pada tahap ini pseudocode ditulis. Dengan empat langkah sebelumnya selesai, menulisnya terasa jauh lebih ringan.

### 6. Telusuri dan uji kasus batas

Rancangan belum dianggap selesai sebelum ditelusuri dengan angka. Uji juga **kasus batas**: masukan terkecil, terbesar, nol, negatif, dan nilai yang tepat di perbatasan.

## Memilih struktur kendali

Inilah inti pekan ini. Tiga pertanyaan berikut cukup untuk menentukan struktur kendali yang tepat.

| Pertanyaan | Kalau ya | Kalau tidak |
| --- | --- | --- |
| Semua langkah dikerjakan sekali, lurus? | **Runtunan** | lanjut |
| Ada langkah yang hanya dikerjakan bila syarat tertentu? | **Seleksi** | lanjut |
| Ada langkah yang harus dikerjakan berulang kali? | **Iterasi** | runtunan biasa |

Untuk iterasi, satu pertanyaan lagi menentukan bentuknya:

| Pertanyaan | Struktur |
| --- | --- |
| Jumlah putaran sudah diketahui di awal? | `FOR` |
| Jumlah putaran bergantung keadaan? | `WHILE` |
| Harus berjalan minimal sekali? | `REPEAT` |

`FOR` dan `WHILE` adalah yang paling sering dipakai; `REPEAT` hanya ketika kita yakin badan pengulangan harus terjadi setidaknya sekali.

## Menguji kasus batas

Algoritma bisa benar untuk contoh yang umum, tetapi salah pada nilai ekstrem. Beberapa kasus batas yang selalu layak diuji:

| Kasus | Pertanyaan yang diajukan |
| --- | --- |
| Nilai nol | Apakah program menangani masukan kosong atau nol? |
| Nilai negatif | Apakah tanda negatif masuk akal di sini? |
| Nilai satu | Apakah pengulangan yang seharusnya sekali tetap berjalan? |
| Tepat di batas | Nilai yang persis sama dengan syarat masuk ke cabang yang mana? |
| Nilai paling besar | Apakah hasilnya masih masuk akal? |

Kasus "tepat di batas" adalah yang paling sering luput. Nilai 85 pada contoh nilai huruf, atau baris pertama dan terakhir pada pengulangan, keduanya menuntut pemeriksaan khusus.

## Contoh soal cerita

### 1. Kategori indeks massa tubuh

Soal: terima berat badan dalam kilogram dan tinggi badan dalam meter, hitung indeks massa tubuh, lalu tentukan kategorinya.

Pemecahan: masukan berupa dua bilangan; prosesnya satu perhitungan lalu satu keputusan bertingkat; keluarannya sebuah kategori.

```pseudocode
DEKLARASI
  berat, tinggi : real
  bmi : real

BEGIN
  READ berat, tinggi
  bmi ← berat ÷ (tinggi × tinggi)

  IF bmi < 18.5 THEN
    WRITE "kurang"
  ELSE IF bmi < 25 THEN
    WRITE "normal"
  ELSE IF bmi < 30 THEN
    WRITE "berlebih"
  ELSE
    WRITE "obesitas"
  ENDIF
END
```

Kasus batas yang perlu diuji: `tinggi` bernilai nol. Pembagian dengan nol tidak terdefinisi, jadi nilai ini harus ditolak lebih dulu. Perhatikan juga urutan cabang: karena diperiksa berurutan, `bmi < 25` berarti mencakup semua nilai dari 18.5 sampai 24.999.

### 2. Rata-rata sampai data habis

Soal: baca nilai-nilai sampai pengguna memasukkan angka `−1` sebagai penanda berhenti, lalu tampilkan rata-ratanya.

Pemecahan: jumlah nilainya **belum diketahui**, jadi ini pekerjaan `WHILE`, bukan `FOR`. Nilai `−1` berperan sebagai penanda berhenti (*sentinel*), bukan data.

```pseudocode
DEKLARASI
  nilai : integer
  total : integer
  cacah : integer
  rata_rata : real

BEGIN
  total ← 0
  cacah ← 0
  READ nilai

  WHILE nilai ≠ −1 DO
    total ← total + nilai
    cacah ← cacah + 1
    READ nilai
  ENDWHILE

  IF cacah > 0 THEN
    rata_rata ← total ÷ cacah
    WRITE rata_rata
  ELSE
    WRITE "belum ada data"
  ENDIF
END
```

Ada dua hal penting di sini. Pertama, `READ nilai` muncul **dua kali**: sekali sebelum pengulangan, sekali di akhir badan. Kenapa? Karena `WHILE` memeriksa kondisi **sebelum** badan berjalan, jadi nilai pertama harus sudah ada sebelum kondisi diperiksa. Kedua, pemeriksaan `cacah > 0` mencegah pembagian dengan nol ketika pengguna langsung mengetik `−1`. Inilah kasus batas yang tadi disebutkan.

### 3. Bilangan prima

Soal: tentukan apakah sebuah bilangan bulat `n` adalah bilangan prima.

Pemecahan: bilangan prima lebih besar dari satu dan tidak punya pembagi selain 1 dan dirinya sendiri. Jadi kita perlu memeriksa semua pembagi yang mungkin — sebuah pengulangan dengan seleksi di dalamnya.

```pseudocode
DEKLARASI
  n, i : integer
  prima : boolean

BEGIN
  READ n

  IF n ≤ 1 THEN
    prima ← false
  ELSE
    prima ← true
    FOR i ← 2 TO n − 1 DO
      IF n mod i = 0 THEN
        prima ← false
      ENDIF
    ENDFOR
  ENDIF

  IF prima THEN
    WRITE "prima"
  ELSE
    WRITE "bukan prima"
  ENDIF
END
```

Perhatikan bahwa `FOR i ← 2 TO n − 1` untuk `n` bernilai 2 menjadi `2 TO 1` — batasnya lebih kecil daripada awalnya, sehingga pengulangan **tidak berjalan sama sekali** dan `prima` tetap `true`. Inilah kekuatan keputusan awal `n ≤ 1`: kasus-kasus kecilnya ditangani sebelum pengulangan dimulai.

## Merapikan rancangan

Rancangan yang benar belum tentu rancangan yang baik. Bandingkan dua versi berikut.

```pseudocode
# Berantakan: banyak dalam satu baris, nama tidak jelas
BEGIN
  READ a
  IF a > 100 THEN WRITE "besar" ELSE WRITE "kecil" ENDIF
END
```

```pseudocode
# Lebih baik: tujuan jelas, bahasa konsisten
BEGIN
  READ nilai
  IF nilai > 100 THEN
    WRITE "di atas batas"
  ELSE
    WRITE "dalam batas"
  ENDIF
END
```

Bedanya bukan pada hasil, melainkan pada **kemudahan diperiksa**. Nama yang menjelaskan, satu gagasan per baris, dan kata yang bermakna semuanya menurunkan kemungkinan salah tafsir — terutama saat rancangannya panjang.

## Kesalahan umum

- **Menulis pseudocode sebelum masalahnya dipahami.** Kesalahan termahal, karena seluruh pekerjaan di bawahnya ikut salah.
- **Langsung mencari struktur kendali** tanpa memisahkan masukan, proses, dan keluaran lebih dulu.
- **Tidak menguji kasus batas.** Algoritma tampak benar pada contoh umum, tetapi gagal pada nol atau pada nilai di perbatasan.
- **Lupa bahwa pengulangan bisa berjalan nol kali.** `FOR` dengan batas lebih kecil dari awal tidak berjalan sama sekali.
- **Pembagian dengan nol** ketika akumulatornya masih kosong.
- **Menganggap rancangan selesai tanpa penelusuran.** Membaca ulang bukan menelusuri.
- **Menumpuk terlalu banyak pekerjaan dalam satu instruksi** sehingga sulit diperiksa.

## Selanjutnya

Pekan depan kita memakai cara berpikir ini pada **kasus data akademik**: merekap nilai satu kelas — menghitung rata-rata, nilai tertinggi dan terendah, banyak yang lulus, serta sebaran nilai hurufnya. Semuanya masih tanpa struktur data, memakai akumulator seperti yang sudah kita kenal.

## Soal refleksi

1. Jelaskan langkah-langkah pemecahan masalah dengan kata-katamu sendiri. Langkah mana yang paling sering dilewati orang, dan mengapa berbahaya?
2. Sebuah soal berbunyi "hitung gaji bersih karyawan". Pecah masalah itu menjadi bagian-bagian yang lebih kecil.
3. Untuk masing-masing keadaan, tentukan struktur kendali yang tepat: mencetak sapaan sekali, menentukan diskon, menjumlahkan belanja sampai keranjang kosong.
4. Pada contoh rata-rata sampai data habis, kenapa `READ nilai` ditulis dua kali? Apa yang terjadi kalau hanya ditulis sekali?
5. Sebutkan tiga kasus batas untuk soal menentukan bilangan prima, lalu jelaskan hasilnya di tiap kasus.
6. Ambil satu soal latihan dari pekan-pekan sebelumnya, lalu tulis ulang rancangannya memakai langkah-langkah di catatan ini. Apakah hasilnya berbeda?
