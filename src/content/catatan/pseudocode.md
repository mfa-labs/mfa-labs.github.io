---
title: 'Pseudocode'
description: 'Menuliskan algoritma dengan pseudocode bergaya BEGIN … END: notasi dasar, peran urutan instruksi, contoh runtunan, dan cara menelusuri kebenarannya.'
course: 'algoritma-dan-pemrograman-1'
pubDate: 2026-09-28
tags: ['Pseudocode', 'Algoritma', 'Notasi']
draft: false
---

Dua pekan terakhir kita membahas cara berpikir sampai pada sebuah algoritma. Sekarang saatnya menuliskannya. Masalahnya, bahasa manusia terlalu kabur untuk dijalankan mesin, sedangkan bahasa pemrograman terlalu penuh detail sehingga perhatian kita mudah berpindah dari logika ke urusan titik dan koma. Pseudocode hadir di antara keduanya.

## Apa itu pseudocode

**Pseudocode adalah cara menuliskan algoritma memakai struktur yang menyerupai bahasa pemrograman, tetapi dengan kata-kata yang bisa dibaca manusia.**

Awalan *pseudo* berarti semu atau mirip. Karena itu pseudocode tidak bisa dijalankan komputer — ia hanya bentuk penulisan yang tertata. Fungsinya sama seperti sketsa bagi pelukis: belum hasil akhir, tetapi sudah cukup untuk memeriksa apakah gagasannya masuk akal.

Kenapa tidak langsung menulis kode saja? Ada tiga alasan.

**Fokusnya tetap pada logika.** Ketika menulis kode, kita mudah terganggu hal-hal yang tidak ada hubungannya dengan penyelesaian masalah: titik koma yang terlewat, tanda kurung yang tidak berpasangan, aturan penulisan nama. Pseudocode membuang semua itu sehingga perhatianmu tetap pada urutan langkahnya.

**Bebas bahasa.** Satu pseudocode bisa diterjemahkan ke bahasa pemrograman apa pun. Ini penting karena cara berpikir yang kamu latih di mata kuliah ini berlaku jauh lebih lama daripada bahasa pemrograman yang kebetulan sedang populer.

**Mudah diperiksa orang lain.** Pseudocode bisa dibaca oleh siapa pun yang memahami logika, bahkan tanpa menguasai bahasa pemrograman tertentu. Ini membuat diskusi dan peninjauan jauh lebih cepat.

Perlu ditegaskan satu hal: **pseudocode tidak punya aturan baku yang diakui semua orang.** Setiap buku ajar memakai gayanya sendiri. Karena itu di mata kuliah ini kita menyepakati satu gaya dan memakainya secara konsisten — supaya kamu dan saya membaca hal yang sama.

## Kerangka BEGIN … END

Seluruh pseudocode dalam mata kuliah ini ditulis dalam kerangka berikut.

```pseudocode
BEGIN
  instruksi pertama
  instruksi kedua
  instruksi ketiga
END
```

`BEGIN` menandai awal kumpulan instruksi, dan `END` menandai akhirnya. Tiga aturan penulisan yang akan kita pegang:

1. **Satu instruksi per baris.** Jangan menggabungkan beberapa pekerjaan dalam satu baris.
2. **Instruksi di antara BEGIN dan END ditulis menjorok ke dalam.** Indentasi bukan hiasan; ia menandai bagian mana yang termasuk di dalam program.
3. **Kata kunci ditulis huruf besar, nama variabel huruf kecil.** `BEGIN`, `END`, `READ`, dan `WRITE` selalu kapital. Nama seperti `panjang` dan `luas` selalu huruf kecil dan ditulis apa adanya.

## Notasi dasar

| Notasi | Arti | Contoh |
| --- | --- | --- |
| `←` | Penugasan: hitung sisi kanan, simpan ke variabel di kiri | `luas ← panjang × lebar` |
| `READ` | Membaca masukan | `READ panjang, lebar` |
| `WRITE` | Menampilkan keluaran | `WRITE luas` |
| `#` | Komentar, diabaikan saat dijalankan | `# menghitung luas` |
| `+` `-` `×` `÷` | Operasi aritmetika | `total ← harga × jumlah` |

Beberapa hal yang perlu diperhatikan dari tabel itu.

**Panah `←` berbeda artinya dengan sama dengan `=`.** Tanda `=` berarti "nilainya sama dengan", sedangkan `←` berarti "simpan hasil hitungan ini ke". Karena itu penulisan seperti `luas ← luas + 1` justru masuk akal: ambil nilai `luas` yang sekarang, tambah satu, lalu simpan kembali ke `luas`.

**Satu `READ` bisa mengambil beberapa nilai sekaligus.** `READ panjang, lebar` setara dengan membaca dua angka secara berurutan dari masukan.

**Nama variabel sebaiknya menjelaskan isinya.** `luas` jauh lebih baik daripada `l`, dan `total_belanja` lebih baik daripada `x`. Variabel yang diberi nama sembarangan akan menyulitkanmu sendiri saat programnya mulai panjang.

### Urutan pengerjaan operasi

Pseudocode memakai aturan yang sama seperti matematika: **perkalian dan pembagian dikerjakan lebih dulu daripada penjumlahan dan pengurangan.** Ekspresi `celsius × 9 ÷ 5 + 32` dihitung sebagai `(celsius × 9 ÷ 5) + 32`, bukan `celsius × 9 ÷ (5 + 32)`.

Kalau urutan yang kamu maksud berbeda, gunakan tanda kurung seperti pada contoh konversi suhu nanti. Tanda kurung bukan hiasan — ia satu-satunya cara menyampaikan maksudmu secara pasti, karena komputer mengerjakan urutan bakunya tanpa bertanya lebih dulu.

## Urutan instruksi bukan hal sepele

Instruksi dikerjakan **berurutan dari atas ke bawah**, satu per satu. Karena itu urutannya menentukan hasil.

Perhatikan dua pseudocode berikut. Keduanya hampir sama, tetapi hanya satu yang masuk akal.

```pseudocode
BEGIN
  luas ← panjang × lebar
  READ panjang, lebar
  WRITE luas
END
```

```pseudocode
BEGIN
  READ panjang, lebar
  luas ← panjang × lebar
  WRITE luas
END
```

Yang pertama menghitung luas sebelum nilainya dibaca. Saat baris `luas ← panjang × lebar` dijalankan, `panjang` dan `lebar` belum berisi apa-apa. Komputer tidak bisa menebak; hasilnya kacau. Yang kedua benar karena datanya sudah tersedia sebelum dipakai.

Aturan sederhananya: **sebuah nilai harus sudah terisi sebelum dipakai.** Ini berlaku bukan hanya pada `READ`, tetapi juga pada hasil hitungan yang dipakai di baris berikutnya.

## Menyusun pseudocode dari rumusan masalah

Sampai di sini kita sudah punya kerangka dan notasinya. Pertanyaannya: bagaimana berpindah dari soal berbahasa manusia menjadi pseudocode?

Ada tiga langkah yang bisa kamu biasakan, dan urutannya tidak boleh ditukar.

1. **Tentukan masukannya.** Apa yang sudah diketahui, dan dari mana nilainya diperoleh? Ini menentukan berapa banyak `READ` yang dibutuhkan.
2. **Tentukan keluarannya.** Apa yang diminta soal, dan dalam bentuk apa? Ini menentukan isi `WRITE`.
3. **Susun langkah dari masukan menuju keluaran.** Baru di tahap ini kita memikirkan urutan pengolahannya.

Menentukan masukan dan keluaran lebih dulu terasa sepele, tetapi justru inilah yang paling sering dilewati. Tanpa keduanya, kita menulis langkah berdasarkan dugaan, lalu berakhir dengan variabel yang tidak pernah dipakai atau hasil yang tidak pernah ditampilkan.

Mari kita turunkan satu contoh dari awal. Soalnya: *"Hitung total harga yang harus dibayar jika diketahui harga satuan dan jumlah barang yang dibeli."*

- **Masukan** — harga satuan dan jumlah barang → `READ harga, jumlah`
- **Keluaran** — total harga → `WRITE total`
- **Langkah** — total adalah harga dikali jumlah → `total ← harga × jumlah`

```pseudocode
BEGIN
  READ harga, jumlah
  total ← harga × jumlah
  WRITE total
END
```

Baris terakhir baru bisa disusun setelah dua langkah sebelumnya jelas. Kebiasaan yang sering terjadi pada mahasiswa adalah langsung menulis baris perhitungannya, lalu lupa menambahkan `READ` di awal atau `WRITE` di akhir — dan kelupaan itu tidak akan terlihat sampai programnya dijalankan.

## Contoh runtunan

Runtunan berarti instruksi dikerjakan lurus dari atas ke bawah, tanpa percabangan dan tanpa pengulangan. Empat contoh berikut semuanya berbentuk runtunan.

### 1. Luas persegi panjang

```pseudocode
BEGIN
  READ panjang, lebar
  luas ← panjang × lebar
  WRITE luas
END
```

### 2. Konversi suhu Celsius ke Fahrenheit

```pseudocode
BEGIN
  READ celsius
  fahrenheit ← (celsius × 9 ÷ 5) + 32
  WRITE fahrenheit
END
```

### 3. Rata-rata tiga nilai

```pseudocode
BEGIN
  READ nilai1, nilai2, nilai3
  total ← nilai1 + nilai2 + nilai3
  rata_rata ← total ÷ 3
  WRITE rata_rata
END
```

Perhatikan baris kedua dan ketiga. Kita memakai `total` sebagai nilai antara supaya baris berikutnya lebih pendek dan lebih mudah dibaca. Penulisan seperti ini bukan keharusan — `rata_rata ← (nilai1 + nilai2 + nilai3) ÷ 3` juga sah. Yang penting adalah hasilnya sama dan mudah diperiksa.

### 4. Menukar isi dua variabel

Contoh ini kelihatan sepele, tetapi sangat berguna untuk melatih kepekaan terhadap urutan.

```pseudocode
BEGIN
  READ a, b
  sementara ← a
  a ← b
  b ← sementara
  WRITE a, b
END
```

Kenapa perlu `sementara`? Coba bayangkan menukarnya tanpa variabel bantu:

```pseudocode
BEGIN
  READ a, b
  a ← b
  b ← a
  WRITE a, b
END
```

Setelah baris `a ← b`, nilai `a` yang asli sudah hilang — tertimpa. Baris berikutnya lalu menyalin nilai yang sama ke `b`, sehingga kedua variabel berisi nilai yang sama. Data aslinya lenyap tanpa jejak.

Kalau kamu hanya membaca sekilas, kedua versi itu terlihat serupa. Justru itu pelajarannya: **pseudocode membantu kita melihat masalah sebelum masalahnya muncul di program yang sungguhan.**

## Menelusuri pseudocode

Cara paling andal untuk memeriksa pseudocode adalah **menelusurinya**: jalankan sendiri instruksinya satu per satu, sambil mencatat isi setiap variabel di atas kertas.

Ambil contoh luas persegi panjang, dengan masukan `panjang = 8` dan `lebar = 5`.

| Baris | Instruksi | panjang | lebar | luas |
| --- | --- | --- | --- | --- |
| 1 | `READ panjang, lebar` | 8 | 5 | — |
| 2 | `luas ← panjang × lebar` | 8 | 5 | 40 |
| 3 | `WRITE luas` | 8 | 5 | 40 |

Tabel seperti ini disebut tabel penelusuran. Kegunaannya bukan untuk contoh sederhana seperti di atas, melainkan untuk contoh yang lebih panjang — di saat kita sudah tidak bisa lagi menebak hasilnya hanya dengan membaca.

Kebiasaan menelusuri akan menolongmu nanti ketika algoritmanya bercabang dan berulang. Mulailah membiasakannya sekarang, selagi contohnya masih pendek.

## Kesalahan yang sering muncul

- **Memakai nilai sebelum diisi.** Terutama lupa menuliskan `READ` di awal.
- **Menuliskan proses berpikir, bukan instruksi.** Kalimat seperti "siapkan data yang dibutuhkan" bukan instruksi karena tidak bisa dikerjakan secara pasti.
- **Memberi nama variabel yang tidak menjelaskan apa pun.** `a`, `b`, `c` akan membingungkan begitu programnya lebih dari sepuluh baris.
- **Membuat variabel perantara yang tidak dipakai lagi.** Variabel bantu berguna bila membuat langkah lebih jelas, tetapi tidak perlu diadakan hanya karena terbiasa.
- **Mencampur pseudocode dengan sintaks bahasa tertentu.** Munculnya tanda kurung kurawal atau titik koma berarti kamu sudah menulis kode, bukan pseudocode.

## Selanjutnya

Pekan depan kita akan menggambarkan alur yang sama ke dalam bentuk gambar, yaitu **flowchart**. Isinya identik dengan pseudocode, hanya bentuk penyampaiannya yang berbeda — dan kamu akan melihat bahwa kemampuan menelusuri yang dilatih pekan ini tetap terpakai.

Seleksi dan pengulangan baru akan muncul di pertengahan semester. Untuk sekarang, seluruh program kita masih berbentuk runtunan lurus, dan itu memang cukup untuk melatih fondasinya.

## Soal refleksi

1. Tulis pseudocode untuk menghitung keliling dan luas sebuah lingkaran dari masukan jari-jari.
2. Tulis pseudocode yang membaca tiga nilai lalu menampilkan selisih antara nilai terbesar dan terkecil.
3. Pada contoh menukar isi dua variabel, apa yang terjadi bila baris `sementara ← a` dipindahkan ke bawah `b ← sementara`? Uraikan langkahnya satu per satu.
4. Ambil satu contoh di atas, lalu buat tabel penelusuran dengan angka pilihanmu sendiri.
5. Menurutmu, kenapa pseudocode sengaja tidak dibuat bisa dijalankan komputer?
6. Tulis satu pseudocode yang panjangnya lima baris, lalu tukar urutan dua baris di dalamnya dan jelaskan mengapa hasilnya menjadi salah.
