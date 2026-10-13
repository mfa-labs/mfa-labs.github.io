---
title: 'Iterasi'
description: 'Mengerjakan rangkaian instruksi berulang kali dengan WHILE, FOR, dan REPEAT — termasuk pola pencacah, akumulator, dan bahaya pengulangan tak berujung.'
course: 'algoritma-dan-pemrograman-1'
pubDate: 2026-11-16
tags: ['Iterasi', 'Perulangan', 'Loop']
draft: false
---

Pekan lalu program belajar memilih. Pekan ini ia belajar **mengulang**. Dua kemampuan ini, bersama runtunan, melengkapi seluruh perkakas struktur kendali yang akan kita pakai sepanjang mata kuliah.

## Kenapa perlu pengulangan

Bayangkan menghitung jumlah bilangan 1 sampai 100. Dengan runtunan murni, kita harus menulis 99 baris penjumlahan. Kalau batasnya berubah menjadi 1000, pekerjaannya ikut membengkak sepuluh kali. Menulis hal yang sama berulang-ulang bukan hanya melelahkan — ia juga rawan salah ketik dan menyembunyikan polanya.

Yang sebenarnya kita butuhkan bukan seratus instruksi, melainkan **satu instruksi yang dikerjakan seratus kali**. Inilah yang disebut **iterasi** atau pengulangan: mengerjakan sebuah blok instruksi berkali-kali selama sebuah kondisi masih terpenuhi.

### Anatomi setiap pengulangan

Setiap pengulangan, apa pun bentuknya, selalu memuat empat bagian:

1. **Nilai awal** — keadaan sebelum pengulangan dimulai.
2. **Kondisi** — pertanyaan yang menentukan apakah pengulangan masih berlanjut.
3. **Badan pengulangan** — instruksi yang dikerjakan setiap putaran.
4. **Perubahan** — sesuatu yang berubah setiap putaran, sehingga pengulangan akhirnya berhenti.

Bagian keempat inilah yang paling sering terlupakan, dan akibatnya pengulangan tidak pernah berhenti.

## WHILE: selama kondisi terpenuhi

Bentuk paling dasar memeriksa kondisi **di awal**, sebelum badan pengulangan dijalankan.

```pseudocode
WHILE kondisi DO
  aksi
ENDWHILE
```

Alurnya sederhana: kondisi diperiksa. Kalau benar, `aksi` dikerjakan, lalu kembali memeriksa kondisi. Kalau salah, pengulangan berakhir dan alur berlanjut setelah `ENDWHILE`.

Ada satu sifat penting: karena kondisi diperiksa lebih dulu, **badan pengulangan bisa saja tidak pernah dijalankan sama sekali**. Kalau kondisi sudah salah sejak awal, `WHILE` langsung dilewati.

![Flowchart pengulangan WHILE: kondisi diuji di awal, badan dikerjakan, lalu alur kembali memeriksa kondisi](/kuliah/algoritma-dan-pemrograman-1/2026-2027-ganjil/img/07-flowchart-while.svg)

Perhatikan garis yang kembali ke atas. Inilah yang membuat `WHILE` berbeda dari runtunan: setelah badan selesai, alur **kembali** memeriksa kondisi, bukan melanjutkan ke bawah. Pengulangan berhenti hanya ketika kondisinya sudah tidak lagi terpenuhi.

### Pola pencacah

Bentuk pengulangan yang paling sering dipakai adalah **pencacah** (counter): sebuah variabel yang dinaikkan sedikit demi sedikit hingga mencapai batas.

```pseudocode
DEKLARASI
  i : integer

BEGIN
  i ← 1
  WHILE i ≤ 5 DO
    WRITE i
    i ← i + 1
  ENDWHILE
END
```

Perhatikan tiga hal yang saling terkait:

- **`i ← 1` sebelum `WHILE`** memberi nilai awal.
- **`i ≤ 5`** adalah kondisi yang menentukan kapan berhenti.
- **`i ← i + 1` di dalam** adalah perubahan yang membuat kondisi akhirnya salah.

Baris `i ← i + 1` terasa aneh pada awalnya: sebuah variabel diisi oleh nilainya sendiri yang ditambah satu. Bacalah sebagai *"ambil isi `i` sekarang, tambahkan satu, lalu simpan kembali ke `i`"*. Inilah cara paling umum menaikkan pencacah.

### Yang terjadi bila perubahan hilang

Kalau baris `i ← i + 1` dihapus, `i` akan selalu bernilai 1, kondisi `i ≤ 5` selalu benar, dan pengulangan tidak akan pernah berhenti. Inilah yang disebut **pengulangan tak berujung**. Program akan terus mencetak angka 1 tanpa henti, dan biasanya baru terasa ketika komputer menjadi lambat atau program dihentikan paksa.

## FOR: ketika jumlah putarannya sudah pasti

Bila kita sudah tahu berapa kali pengulangan harus berjalan, ada bentuk yang lebih ringkas. Semua bagian — nilai awal, kondisi, dan perubahan — sudah tersusun otomatis.

```pseudocode
FOR i ← 1 TO n DO
  aksi
ENDFOR
```

Bentuk ini sama artinya dengan pencacah `WHILE` di atas, tetapi penulisannya jauh lebih pendek. Variabel `i` naik dari `1` sampai `n`, dan pada setiap nilai badan pengulangan dikerjakan. Setelah `i` melewati `n`, pengulangan berhenti sendiri — kita tidak perlu menuliskan perubahan.

`FOR` dipakai ketika jumlahnya pasti: mengulang untuk 10 mahasiswa, untuk 12 bulan, atau untuk 7 hari dalam sepekan. `WHILE` dipakai ketika jumlahnya bergantung pada keadaan yang belum diketahui — misalnya *selama pengguna belum mengirim kata "selesai"*.

| | `WHILE` | `FOR` |
| --- | --- | --- |
| Jumlah putaran | belum tentu diketahui | sudah pasti |
| Perubahan pencacah | ditulis sendiri | otomatis |
| Kondisi | ditulis sendiri | tersirat dari batas |
| Bisa nol kali? | ya | bisa, bila batasnya lebih kecil dari awal |

## REPEAT: kondisi diperiksa di akhir

Ada bentuk ketiga yang memeriksa kondisi **setelah** badan pengulangan dijalankan.

```pseudocode
REPEAT
  aksi
UNTIL kondisi
```

Bedanya dengan `WHILE` hanya pada saat pemeriksaan. Karena kondisi diperiksa paling akhir, **badan `REPEAT` pasti dijalankan minimal satu kali**. Bentuk ini cocok untuk hal seperti meminta masukan berulang sampai pengguna memasukkan nilai yang benar — di mana permintaan pertama harus tetap terjadi.

Kita tidak akan banyak memakai `REPEAT` di mata kuliah ini, tetapi penting untuk mengenalinya ketika membacanya di contoh algoritma lain.

## Pola akumulator

Pengulangan sering dipakai untuk **menjumlahkan** atau **menghitung** banyak nilai sekaligus — sesuatu yang tidak mungkin dilakukan dengan satu instruksi. Nilai yang terus bertambah itu disebut **akumulator**.

Pola dasarnya selalu sama: siapkan wadah kosong sebelum pengulangan, lalu tambahkan sesuatu ke dalamnya pada setiap putaran.

```pseudocode
total ← 0
WHILE belum_selesai DO
  tambahkan sesuatu ke total
ENDWHILE
```

Dua hal yang perlu diperhatikan:

- **Nilai awal akumulator harus tepat.** Untuk penjumlahan, mulai dari `0`; untuk perkalian, mulai dari `1`. Memulai perkalian dari `0` akan membuat seluruh hasilnya nol.
- **Akumulator diperbarui di dalam pengulangan**, bukan di luar. Kalau diletakkan di luar, ia hanya menampung satu nilai.

Pola yang sama juga bekerja untuk **pencacah kejadian**: mulai dari `0`, lalu tambah satu setiap kali sebuah syarat terpenuhi. Ini akan menjadi sangat berguna saat seleksi dan iterasi digabung.

## Contoh

### 1. Menjumlahkan bilangan 1 sampai N

```pseudocode
DEKLARASI
  n : integer
  i : integer
  total : integer

BEGIN
  READ n
  total ← 0
  i ← 1
  WHILE i ≤ n DO
    total ← total + i
    i ← i + 1
  ENDWHILE
  WRITE total
END
```

Masukan `n` bernilai 5 menghasilkan `total` bernilai 15. Perhatikan bahwa `total` dimulai dari `0` di luar pengulangan, sedangkan `i` naik di dalam.

### 2. Mencetak 1 sampai N dengan FOR

```pseudocode
DEKLARASI
  n : integer
  i : integer

BEGIN
  READ n
  FOR i ← 1 TO n DO
    WRITE i
  ENDFOR
END
```

Bandingkan dengan versi `WHILE` yang setara: di sini kita tidak menuliskan `i ← 1` sebelum pengulangan maupun `i ← i + 1` di dalamnya. Keduanya sudah menjadi bagian dari `FOR`.

### 3. Rata-rata N nilai

```pseudocode
DEKLARASI
  n, i : integer
  nilai : integer
  total : integer
  rata_rata : real

BEGIN
  READ n
  total ← 0
  FOR i ← 1 TO n DO
    READ nilai
    total ← total + nilai
  ENDFOR
  rata_rata ← total ÷ n
  WRITE rata_rata
END
```

Contoh ini memakai `FOR` karena jumlah nilainya sudah diketahui dari `n`. Akumulator `total` mengumpulkan setiap nilai, dan pembagian baru dilakukan setelah pengulangan selesai. Perhatikan pula bahwa `READ nilai` berada **di dalam** pengulangan — kita memang ingin membaca nilai baru setiap putaran.

### 4. Faktorial

```pseudocode
DEKLARASI
  n, i : integer
  hasil : integer

BEGIN
  READ n
  hasil ← 1
  FOR i ← 1 TO n DO
    hasil ← hasil × i
  ENDFOR
  WRITE hasil
END
```

Faktorial adalah akumulator **perkalian**, karena itu `hasil` dimulai dari `1` dan bukan `0`. Dengan `n` bernilai 5, hasilnya 120.

## Menelusuri pengulangan

Pengulangan ditelusuri dengan mencatat keadaan setiap variabel pada **setiap putaran**. Tabel seperti ini memperlihatkan dengan cepat apakah sebuah pengulangan benar atau tidak.

Ambil contoh menjumlahkan 1 sampai 5:

| Putaran | `i` sebelum cek | `i ≤ 5` | `total` sesudah | `i` sesudah |
| --- | --- | --- | --- | --- |
| 1 | 1 | benar | 1 | 2 |
| 2 | 2 | benar | 3 | 3 |
| 3 | 3 | benar | 6 | 4 |
| 4 | 4 | benar | 10 | 5 |
| 5 | 5 | benar | 15 | 6 |
| — | 6 | salah | berhenti | — |

Perhatikan baris terakhir: ketika `i` mencapai 6, kondisinya salah dan pengulangan berhenti. `total` berhenti di 15.

Tabel ini juga memperlihatkan jebakan yang paling halus dalam pengulangan: **salah menghitung satu putaran** — yang sering disebut *off-by-one*. Apakah pengulangan berjalan 5 kali atau 6 kali, apakah nilai akhirnya 15 atau 21 — semuanya hanya terlihat jelas pada tabel penelusuran.

## Kesalahan umum

- **Lupa mengubah pencacah di dalam `WHILE`.** Akibatnya pengulangan tak berujung.
- **Menaruh inisialisasi di dalam pengulangan.** Variabel yang seharusnya menumpuk malah direset setiap putaran.
- **Menaruh `READ` di luar pengulangan**, sehingga nilai yang sama dibaca berulang kali.
- **Memulai akumulator perkalian dari `0`.** Hasilnya selalu nol.
- **Salah batas (`<` berpadanan dengan `≤`).** `i < n` mengulang `n − 1` kali; `i ≤ n` mengulang `n` kali.
- **Menumpuk kondisi yang tidak pernah salah**, sehingga pengulangan tidak punya jalan keluar.
- **Memakai `FOR` padahal jumlah putarannya bergantung pada masukan di tengah program.**

## Selanjutnya

Pekan depan kita menyatukan keduanya dalam **studi kasus transaksi**: sebuah program yang membaca masukan berulang kali, mengakumulasinya, lalu mengambil keputusan — misalnya menentukan diskon dan menghitung kembalian. Di situ seleksi pekan 9 dan iterasi pekan ini akhirnya bertemu.

## Soal refleksi

1. Jelaskan dengan kalimatmu sendiri bedanya `WHILE` dan `FOR`. Kapan masing-masing lebih tepat dipakai?
2. Apa yang terjadi kalau baris `i ← i + 1` pada contoh pencacah dihapus? Uraikan.
3. Tulis pseudocode yang menjumlahkan seluruh bilangan genap dari 1 sampai N.
4. Tulis pseudocode yang menghitung berapa banyak bilangan di antara 1 sampai N yang habis dibagi 3.
5. Kenapa akumulator untuk perkalian dimulai dari 1, sedangkan untuk penjumlahan dimulai dari 0?
6. Telusuri contoh faktorial dengan `n` bernilai 4, lalu tunjukkan tabel penelusurannya.
