---
title: 'Seleksi'
description: 'Operator perbandingan dan logika, lalu struktur keputusan IF-THEN-ELSE, ELSE IF bersarang, dan CASE — awal program bisa memilih jalannya sendiri.'
course: 'algoritma-dan-pemrograman-1'
pubDate: 2026-11-09
tags: ['Seleksi', 'Percabangan', 'Operator Logika']
draft: false
---

Tujuh pekan pertama, program kita selalu berjalan lurus: instruksi dikerjakan dari atas ke bawah, tanpa pernah menyimpang. Pekan ini garis lurus itu akhirnya bercabang. Untuk pertama kalinya program dapat **memilih** — mengerjakan satu bagian dan melewati bagian lain, bergantung pada keadaan.

## Dari runtunan ke keputusan

Perhatikan masalah sederhana: tentukan apakah sebuah bilangan ganjil atau genap. Dengan runtunan murni, kita tidak punya cara mengerjakannya. Apa pun yang kita tulis akan selalu dikerjakan, padahal yang kita butuhkan adalah *kadang ini, kadang itu*.

Kemampuan memilih inilah yang membedakan program yang berguna dari sekadar kalkulator. Di dapur pun kita sudah memakainya setiap hari: *kalau* air sudah mendidih, *maka* masukkan mie. Kalau belum, tunggu.

Setiap keputusan dibangun dari dua bahan. Pertama, **pertanyaan** yang jawabannya benar atau salah. Kedua, **tindakan** yang dikerjakan bergantung pada jawaban itu. Pekan ini kita menyiapkan bahan pertama, lalu merangkainya menjadi bahan kedua.

## Operator perbandingan

Pertanyaan dalam seleksi selalu menghasilkan **benar** atau **salah** — tipe `boolean` yang kita kenal di pekan 5. Pertanyaan semacam itu dibentuk dengan **operator perbandingan**.

| Operator | Arti | Contoh | Hasil |
| --- | --- | --- | --- |
| `=` | Sama dengan | `7 = 7` | `true` |
| `≠` | Tidak sama dengan | `7 ≠ 3` | `true` |
| `<` | Lebih kecil dari | `3 < 7` | `true` |
| `>` | Lebih besar dari | `3 > 7` | `false` |
| `≤` | Lebih kecil atau sama | `7 ≤ 7` | `true` |
| `≥` | Lebih besar atau sama | `7 ≥ 8` | `false` |

Perhatikan hasilnya bukan angka, melainkan `true` atau `false`. Inilah bedanya dengan operator aritmetika pekan lalu: `7 + 3` menghasilkan nilai baru yang bisa dihitung, sedangkan `7 > 3` menghasilkan **kebenaran** yang bisa diputuskan.

### Tanda `=` bukan penugasan

Ini kekeliruan yang paling sering terjadi, dan sekarang alasannya menjadi jelas. Di pekan 3 kita sudah sepakat bahwa penugasan ditulis dengan panah:

```pseudocode
luas ← panjang × lebar
```

Panah `←` berarti *"simpan nilai di kanan ke variabel di kiri"*. Sedangkan `=` berarti *"tanyakan apakah kedua sisi bernilai sama"*. Keduanya sangat berbeda:

- `x ← 5` memerintahkan: isi `x` dengan 5.
- `x = 5` menanyakan: apakah isi `x` sekarang sama dengan 5?

Yang pertama sebuah perintah, yang kedua sebuah pertanyaan yang menghasilkan `true` atau `false`. Karena itu, di dalam seleksi kita selalu memakai `=`, dan di luar seleksi kita selalu memakai `←`.

## Operator logika

Sering kali satu pertanyaan belum cukup. "Nilai ini lulus **dan** tidak melebihi batas kuota" adalah dua pertanyaan sekaligus. Untuk menggabungkannya dipakai **operator logika**.

| Operator | Arti | Bernilai benar bila |
| --- | --- | --- |
| `AND` | dan | Kedua sisi benar |
| `OR` | atau | Salah satu sisi benar |
| `NOT` | tidak | Sisi tunggalnya salah |

Tabel kebenaran berikut memperlihatkan setiap kemungkinan. Anggap `p` dan `q` adalah dua pertanyaan.

| `p` | `q` | `p AND q` | `p OR q` | `NOT p` |
| --- | --- | --- | --- | --- |
| benar | benar | benar | benar | salah |
| benar | salah | salah | benar | salah |
| salah | benar | salah | benar | benar |
| salah | salah | salah | salah | benar |

Ada satu hal yang perlu dipegang: `AND` hanya benar kalau **kedua** sisi benar, sedangkan `OR` sudah benar kalau **salah satu** sisi benar.

Contoh yang sering muncul: untuk menyatakan "nilai berada di antara 70 dan 85", penulisan yang benar adalah:

```pseudocode
nilai ≥ 70 AND nilai ≤ 85
```

Bukan `70 ≤ nilai ≤ 85` seperti di matematika. Pseudocode kita membandingkan **dua nilai** pada satu waktu, jadi kedua batas harus ditulis lengkap dan disambung dengan `AND`.

`NOT` berguna untuk membalik pertanyaan yang sudah ada, misalnya `NOT aktif` sebagai cara singkat mengatakan "tidak aktif".

## Struktur IF

Sekarang kita rangkai pertanyaan menjadi keputusan. Bentuk paling dasar punya satu cabang, artinya sesuatu hanya dikerjakan bila syaratnya terpenuhi.

```pseudocode
IF kondisi THEN
  aksi
ENDIF
```

Kalau `kondisi` bernilai benar, `aksi` dikerjakan. Kalau salah, `aksi` dilewati dan alur berlanjut ke `ENDIF`.

Bila ada tindakan untuk kedua kemungkinan, dipakai cabang `ELSE`.

```pseudocode
IF kondisi THEN
  aksi_benar
ELSE
  aksi_salah
ENDIF
```

Yang perlu ditegaskan: **hanya satu** di antara `aksi_benar` dan `aksi_salah` yang dikerjakan. Tidak keduanya, dan tidak pernah tidak ada.

### Urutan penulisan

Perhatikan tiga bagian tetapnya: `IF` membuka, `THEN` menutup pertanyaan, dan `ENDIF` mengakhiri seluruh blok. Aksinya menjorok ke dalam agar batas cabang terlihat jelas. `ENDIF` bersifat wajib — inilah penanda bahwa rangkaian keputusan sudah selesai.

![Flowchart percabangan IF-THEN-ELSE: kondisi diperiksa, lalu hanya salah satu cabang yang dikerjakan](/kuliah/algoritma-dan-pemrograman-1/2026-2027-ganjil/img/06-flowchart-if-else.svg)

Perhatikan bentuknya: keputusan digambar sebagai belah ketupat dengan dua cabang keluar, dan kedua cabang itu bertemu kembali sebelum alur berlanjut. Inilah yang membedakan percabangan dari sekadar dua runtunan yang berdiri sendiri.

## Memilih di antara banyak kemungkinan

Dua cabang saja tidak selalu cukup. Untuk menentukan nilai huruf, ada paling sedikit empat kemungkinan. Di sinilah `ELSE IF` dipakai, yaitu memeriksa syarat berikutnya bila syarat sebelumnya salah.

```pseudocode
IF nilai ≥ 85 THEN
  huruf ← 'A'
ELSE IF nilai ≥ 70 THEN
  huruf ← 'B'
ELSE IF nilai ≥ 60 THEN
  huruf ← 'C'
ELSE
  huruf ← 'D'
ENDIF
```

### Kenapa tidak perlu menulis batas atas

Sepintas cabang kedua terasa kurang lengkap: `nilai ≥ 70` tidak menyebutkan batas atasnya. Tetapi itu justru intinya. Cabang ini **hanya diperiksa kalau cabang pertama salah** — artinya kita sudah tahu `nilai < 85`. Jadi menulis `nilai ≥ 70 AND nilai < 85` sebenarnya berlebihan.

Konsekuensinya penting: **urutan cabang menentukan hasil.** Syarat diuji dari atas ke bawah, dan **cabang pertama yang terpenuhi** itulah yang dikerjakan, lalu seluruh blok selesai. Kalau urutannya dibalik — `nilai ≥ 60` diletakkan paling atas — nilai 90 akan mendapat `'C'`, karena syarat itulah yang benar lebih dulu. Untuk masalah bertingkat seperti ini, selalu letakkan syarat **yang paling ketat lebih dahulu**.

### Batas yang saling menempel

Karena cabang diperiksa berurutan, perhatikan bahwa nilai 85 jatuh ke `'A'`, bukan `'B'`:

| Nilai | Cabang yang terpenuhi | Huruf |
| --- | --- | --- |
| 90 | `≥ 85` | `'A'` |
| 84 | `≥ 70` | `'B'` |
| 60 | `≥ 60` | `'C'` |
| 45 | tidak ada, jatuh ke `ELSE` | `'D'` |

Perhatikan juga bahwa `≥` dan bukan `>` membuat nilai tepat 85 tetap masuk `'A'`. Pilihan `>` atau `≥` bukan soal selera — ia menentukan ke mana nilai yang pas di perbatasan akan jatuh.

## CASE: ketika pilihannya seragam

Kalau semua kemungkinan dibandingkan terhadap **satu nilai yang sama**, dan setiap kemungkinan punya tindakan sendiri, ada bentuk yang lebih rapi daripada rangkaian `ELSE IF` panjang. Bentuk itu bernama `CASE`.

```pseudocode
CASE hari OF
  1 : nama ← "Senin"
  2 : nama ← "Selasa"
  3 : nama ← "Rabu"
  ...
  OTHERWISE : nama ← "Hari tidak dikenal"
ENDCASE
```

`CASE` hanya menuliskan **satu ekspresi** di atas sekali, lalu membandingkannya dengan daftar nilai. Bagian `OTHERWISE` berperan seperti `ELSE`: menampung semua kemungkinan yang tidak terdaftar.

`CASE` bukan pengganti `IF`. Ia cocok untuk menu pilihan, pemetaan kode ke nama, atau daftar kategori. Untuk perbandingan yang bertingkat — seperti nilai huruf yang memakai `≥` dan `<` — `IF … ELSE IF` tetap lebih tepat.

## Contoh

### 1. Ganjil atau genap

Contoh pembuka tadi akhirnya bisa dikerjakan. Kuncinya adalah `mod` dari pekan 6: bilangan genap habis dibagi 2, sehingga sisanya nol.

```pseudocode
DEKLARASI
  bilangan : integer

BEGIN
  READ bilangan
  IF bilangan mod 2 = 0 THEN
    WRITE "genap"
  ELSE
    WRITE "ganjil"
  ENDIF
END
```

Perhatikan `bilangan mod 2 = 0`. Ekspresinya dihitung lebih dulu — `mod` menghasilkan sebuah angka — lalu hasilnya dibandingkan `= 0` dan menghasilkan `true` atau `false` untuk diuji `IF`. Ekspresi dalam kondisi boleh sesingkat atau sepanjang apa pun, selama hasil akhirnya `boolean`.

### 2. Menentukan kelulusan

```pseudocode
DEKLARASI
  nilai : integer
  kehadiran : integer
  lulus : boolean

BEGIN
  READ nilai, kehadiran
  lulus ← nilai ≥ 60 AND kehadiran ≥ 75
  IF lulus THEN
    WRITE "lulus"
  ELSE
    WRITE "tidak lulus"
  ENDIF
END
```

Di sini `lulus` diberi nilai berupa **hasil sebuah pertanyaan**, bukan hasil hitungan. Menyimpannya ke variabel `boolean` lebih dahulu membuat `IF` di bawahnya ringkas: cukup `IF lulus THEN`, tanpa mengulang dua syarat. Ini kebiasaan yang baik ketika kondisinya mulai panjang.

### 3. Nilai huruf

Versi lengkap dari contoh `ELSE IF` di atas.

```pseudocode
DEKLARASI
  nilai : integer
  huruf : char

BEGIN
  READ nilai
  IF nilai ≥ 85 THEN
    huruf ← 'A'
  ELSE IF nilai ≥ 70 THEN
    huruf ← 'B'
  ELSE IF nilai ≥ 60 THEN
    huruf ← 'C'
  ELSE
    huruf ← 'D'
  ENDIF
  WRITE huruf
END
```

### 4. Harga tiket berdasarkan umur

```pseudocode
DEKLARASI
  umur : integer
  harga : integer

BEGIN
  READ umur
  IF umur < 5 THEN
    harga ← 0
  ELSE IF umur ≤ 12 THEN
    harga ← 25000
  ELSE IF umur ≥ 60 THEN
    harga ← 30000
  ELSE
    harga ← 50000
  ENDIF
  WRITE harga
END
```

Perhatikan tiga jenis pemeriksaan yang bercampur di sini: `<` untuk anak kecil, `≤` untuk batas atas anak, dan `≥` untuk lansia. Karena cabang diperiksa berurutan, seorang berumur 65 melewati dua cabang pertama dan berhenti di `umur ≥ 60` — persis seperti yang kita inginkan.

## Menelusuri seleksi

Seleksi ditelusuri dengan cara yang sama seperti runtunan, dengan satu langkah tambahan: pada setiap `IF`, kita menuliskan **apakah kondisinya benar atau salah**. Perhatikan guru yang mencatat "masuk cabang mana" akan jauh lebih mudah menemukan kekeliruan urutan cabang.

Ambil contoh nilai huruf, dengan `nilai` bernilai 72:

| Langkah | Diperiksa | Hasil | Keterangan |
| --- | --- | --- | --- |
| 1 | `nilai ≥ 85` | salah | lanjut ke cabang berikutnya |
| 2 | `nilai ≥ 70` | benar | kerjakan `huruf ← 'B'`, lalu keluar dari blok |
| 3 | `WRITE huruf` | — | menampilkan `B` |

Perhatikan bahwa cabang ketiga (`nilai ≥ 60`) **tidak diperiksa**. Begitu satu cabang benar, sisanya dilewati. Inilah alasan penelusuran seleksi terasa berbeda: urutan pemeriksaan ikut menentukan hasil.

## Kesalahan umum

- **Memakai `=` untuk penugasan.** Di dalam seleksi `=` adalah pertanyaan, bukan perintah. Penugasan tetap memakai `←`.
- **Lupa menuliskan `ENDIF`.** Tanpa penanda akhir, batas blok menjadi kabur.
- **Menuliskan syarat yang seharusnya bertingkat dalam urutan terbalik.** Akibatnya nilai tinggi jatuh ke cabang yang salah.
- **Menulis `70 ≤ nilai ≤ 85`.** Pseudocode membandingkan dua nilai sekaligus, jadi harus `nilai ≥ 70 AND nilai ≤ 85`.
- **Memakai `AND` padahal maksudnya `OR`.** Perhatikan kembali tabel kebenarannya.
- **Lupa tanda kutip pada `char` dan `string`.** `WRITE genap` menuliskan isi variabel; `WRITE "genap"` menuliskan kata genap.
- **Memberi nilai `boolean` ke variabel yang bukan `boolean`**, atau sebaliknya.
- **Meskipun kondisi sudah jelas salah, tidak memeriksa cabang `ELSE`.** Pastikan setiap kemungkinan punya penanganannya.

## Selanjutnya

Pekan depan kita membahas **iterasi**: cara mengerjakan satu rangkaian instruksi berulang kali. Di sana seleksi akan bertemu pengulangan, dan pola "periksa, lalu ulangi" akan muncul di mana-mana.

## Soal refleksi

1. Jelaskan bedanya `x ← 5` dan `x = 5` dengan kalimatmu sendiri. Kapan masing-masing dipakai?
2. Nilai `x` bernilai 8. Tentukan hasil dari: `x > 5`, `x ≤ 8`, `x ≠ 10`, `x ≥ 8 AND x < 8`, dan `x > 10 OR x = 8`.
3. Tulis pseudocode untuk menentukan apakah sebuah bilangan positif, negatif, atau nol.
4. Pada contoh nilai huruf, kenapa cabang `nilai ≥ 70` tidak perlu menuliskan batas atas `nilai < 85`? Jelaskan dengan merujuk pada urutan pemeriksaan.
5. Suatu cabang menulis `umur ≥ 60` sebelum `umur ≤ 12`. Apa yang salah, dan nilai mana yang akan salah diklasifikasikan?
6. Sebutkan satu masalah di sekitarmu yang paling tepat diselesaikan dengan `CASE` dan bukan `IF … ELSE IF`. Jelaskan alasannya.
