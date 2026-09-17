---
title: 'Konsep Data'
description: 'Variabel, aturan penamaan, lima tipe data dasar, konstanta, dan cara mendeklarasikan variabel bertipe dalam pseudocode.'
course: 'algoritma-dan-pemrograman-1'
pubDate: 2026-10-12
tags: ['Tipe Data', 'Variabel', 'Pseudocode']
draft: false
---

Sampai pekan lalu, variabel kita muncul begitu saja: dipakai tanpa pernah diperkenalkan. Mulai pekan ini setiap variabel punya **jenis**, dan jenis itu menentukan apa yang boleh dilakukan terhadapnya. Inilah perubahan terbesar dalam gaya pseudocode kita sejak pekan 3.

## Dari nilai menjadi variabel

Data adalah bahan mentah yang diolah program: sebuah angka, sepotong teks, sebuah status benar atau salah.

Agar bisa dipakai berulang kali, data perlu disimpan. Tempat penyimpanannya bernama **variabel** — sebuah wadah bernama yang isinya bisa berubah selama program berjalan. Nama "variabel" berasal dari sifatnya itu: isinya bervariasi.

Cara paling mudah memahaminya adalah membayangkan sekotak wadah berlabel. Label pada kotak adalah **nama variabel**, dan isi kotaknya adalah **nilai**. Ketika kita menulis `luas ← panjang × lebar`, yang terjadi adalah: ambil isi kotak `panjang`, ambil isi kotak `lebar`, kalikan keduanya, lalu simpan hasilnya ke dalam kotak `luas`.

Satu hal yang perlu dipegang sejak awal: **variabel hanya bisa menyimpan satu nilai pada satu waktu.** Menyimpan nilai baru ke sebuah variabel berarti menimpa nilai lamanya. Inilah persis yang membuat contoh menukar dua nilai di pekan 3 memerlukan variabel bantu — begitu `a` ditimpa, nilai aslinya tidak bisa dipanggil kembali.

## Aturan penamaan variabel

Nama variabel yang baik membuat program bisa dibaca hampir seperti kalimat. Beberapa aturan dan kebiasaan yang kita pakai:

- **Tidak boleh mengandung spasi.** Gunakan garis bawah: `total_belanja`, bukan `total belanja`.
- **Tidak boleh diawali angka.** `nilai1` benar; `1nilai` salah.
- **Gunakan huruf kecil semua.** Kita sudah memakai aturan ini sejak pekan 3.
- **Pilih nama yang menjelaskan isinya.** `rata_rata` jauh lebih baik daripada `r`, dan `jumlah_barang` lebih baik daripada `j`.
- **Hindari nama yang terlalu mirip.** `total` dan `total1` mudah tertukar saat membaca cepat.
- **Hindari kata yang sudah dipakai sebagai perintah.** Jangan menamai variabel `READ` atau `WRITE`.

## Lima tipe data dasar

| Tipe | Isinya | Contoh nilai |
| --- | --- | --- |
| `integer` | Bilangan bulat | `17`, `-3`, `0`, `2026` |
| `real` | Bilangan pecahan | `3.14`, `0.5`, `78.25` |
| `char` | Satu karakter | `'A'`, `'7'`, `'#'` |
| `string` | Rangkaian karakter | `"Banda Aceh"`, `"Informatika"` |
| `boolean` | Benar atau salah | `true`, `false` |

**`integer`** dipakai untuk segala sesuatu yang dihitung dalam satuan utuh: jumlah barang, banyak pertemuan, tahun, banyak mahasiswa. Nilai seperti `3.5` orang tidak punya arti, jadi tipe inilah yang tepat.

**`real`** dipakai ketika hasilnya boleh mengandung pecahan: berat badan, suhu, nilai rata-rata, persentase. Perhatikan bahwa `80` dan `80.0` adalah dua nilai dengan tipe berbeda meskipun angkanya sama.

**`char`** menyimpan tepat satu karakter. Ia berguna ketika kita memang berurusan dengan karakter tunggal: jenis kelamin `'L'` atau `'P'`, nilai huruf mutu `'A'`, atau pilihan menu `'1'` sampai `'5'`.

**`string`** menyimpan rangkaian karakter, termasuk yang panjang. Nama orang, alamat, judul, dan nomor identitas semuanya string.

**`boolean`** hanya punya dua kemungkinan nilai. Tipe ini akan banyak dipakai saat kita membahas seleksi di pekan 9, karena setiap keputusan pada dasarnya adalah pertanyaan benar-salah.

### Perhatikan tanda kutipnya

Perbedaan penulisan ini bukan hiasan, melainkan penanda tipe:

- `80` adalah bilangan, bisa dijumlahkan dan dikalikan.
- `"80"` adalah teks berisi dua karakter, tidak bisa dijumlahkan sebagai angka.

Menuliskan `"80"` padahal yang dimaksud angka `80` adalah kekeliruan yang sangat sering terjadi, dan akibatnya baru terasa jauh di belakang ketika hasil hitungannya tidak masuk akal.

## Kenapa tipe perlu ditentukan

Tipe bukan sekadar keterangan tambahan. Ia menentukan empat hal.

**Operasi yang sah.** Angka bisa dijumlahkan; teks tidak. Teks bisa disambung dengan teks lain; angka yang disambung dengan angka akan menghasilkan hal yang berbeda dari penjumlahan.

**Hasil yang benar.** Rata-rata tiga bilangan bulat sebaiknya disimpan sebagai `real`. Kalau disimpan sebagai `integer`, bagian pecahannya bisa hilang dan hasilnya tidak lagi mewakili keadaan sebenarnya.

**Kesalahan yang lebih cepat terlihat.** Ketika tipe dituliskan sejak awal, menaruh teks ke dalam variabel angka menjadi kekeliruan yang tampak di mata, bukan kesalahan yang baru ketahuan saat program dijalankan.

**Representasi yang tepat.** Ini contoh yang paling sering menjebak: **nomor telepon dan nomor induk mahasiswa sebaiknya disimpan sebagai `string`, bukan `integer`.** Alasannya dua. Pertama, angka nol di depan bisa hilang. Kedua, tidak ada satu pun perhitungan aritmetika yang masuk akal dilakukan terhadap nomor telepon — kita tidak pernah menjumlahkan dua nomor telepon. Memilih tipe berdasarkan "isinya berupa angka" saja belum cukup; yang menentukan adalah **bagaimana nilai itu akan diperlakukan.**

## Konstanta

Selain variabel, ada juga **konstanta**: wadah bernama yang nilainya tidak berubah selama program berjalan. Contohnya nilai `PI`, tarif pajak, atau batas nilai minimum kelulusan.

Konstanta dipakai karena dua alasan. Pertama, namanya menjelaskan makna sebuah angka — `PI` lebih bermakna daripada `3.14` yang muncul begitu saja di tengah perhitungan. Kedua, kalau nilainya suatu saat berubah, kita hanya perlu mengubahnya di satu tempat.

Sebagai konvensi penulisan, nama konstanta ditulis dengan huruf besar semua, misalnya `PAJAK` atau `NILAI_MINIMUM`. Dengan begitu ia mudah dibedakan dari variabel biasa.

## Deklarasi

Setiap variabel yang akan dipakai harus **dideklarasikan** lebih dulu: disebutkan namanya beserta tipenya. Deklarasi ditulis dalam blok tersendiri sebelum `BEGIN`.

```pseudocode
DEKLARASI
  panjang, lebar : integer
  luas : integer

BEGIN
  READ panjang, lebar
  luas ← panjang × lebar
  WRITE luas
END
```

Beberapa hal tentang penulisannya:

- **Satu baris bisa memuat beberapa variabel bertipe sama**, dipisahkan koma: `panjang, lebar : integer`.
- **Nama dan tipe dipisahkan tanda titik dua.**
- **Deklarasi tidak dijalankan.** Ia hanya keterangan untuk pembaca — memberi tahu tipe apa yang dipakai, bukan memerintahkan apa pun.
- **Semua variabel yang dipakai di dalam `BEGIN … END` harus muncul di deklarasi.** Kalau ada yang terlewat, berarti ada yang tidak direncanakan.

## Contoh lengkap

### 1. Luas persegi panjang

```pseudocode
DEKLARASI
  panjang, lebar : integer
  luas : integer

BEGIN
  READ panjang, lebar
  luas ← panjang × lebar
  WRITE luas
END
```

Tipe `integer` tepat di sini karena panjang, lebar, dan luas diukur dalam satuan utuh. Kalaupun panjangnya bisa saja 2.5 meter, untuk contoh ini kita anggap satuannya utuh.

### 2. Rata-rata tiga nilai

```pseudocode
DEKLARASI
  nilai1, nilai2, nilai3 : integer
  total : integer
  rata_rata : real

BEGIN
  READ nilai1, nilai2, nilai3
  total ← nilai1 + nilai2 + nilai3
  rata_rata ← total ÷ 3
  WRITE rata_rata
END
```

Contoh ini paling jelas memperlihatkan gunanya tipe. Ketiga nilai dan `total` bertipe `integer` karena semuanya bilangan bulat. Tetapi `rata_rata` bertipe `real`, karena hasil pembagian hampir selalu mengandung pecahan — nilai 80, 80, dan 81 menghasilkan rata-rata 80.33, bukan 80.

### 3. Konversi suhu

```pseudocode
DEKLARASI
  celsius : real
  fahrenheit : real

BEGIN
  READ celsius
  fahrenheit ← (celsius × 9 ÷ 5) + 32
  WRITE fahrenheit
END
```

Suhu bisa bernilai pecahan, jadi keduanya `real`. Perhatikan juga konstanta yang bisa ditambahkan di sini: angka `32` dan `9 ÷ 5` sebenarnya adalah bagian dari rumus yang tidak berubah, dan sebagian buku menuliskannya sebagai konstanta agar lebih terbaca.

### 4. Menampilkan data mahasiswa

```pseudocode
DEKLARASI
  nim : string
  nama : string
  ipk : real
  aktif : boolean

BEGIN
  READ nim, nama, ipk
  aktif ← true
  WRITE nim, nama, ipk, aktif
END
```

Contoh ini memakai empat tipe sekaligus. `nim` sengaja `string` dan bukan `integer`, karena nol di depan harus dipertahankan dan tidak ada perhitungan yang dilakukan terhadapnya.

## Mengubah pola pikir: dari "apa isinya" ke "bagaimana dipakai"

Cara paling mudah memilih tipe adalah berhenti bertanya *"isinya angka atau teks?"* lalu mulai bertanya *"nilai ini akan diapakan?"*

- Kalau akan dihitung dan tidak boleh berpecahan → `integer`.
- Kalau akan dihitung dan boleh berpecahan → `real`.
- Kalau hanya akan ditampilkan, disimpan, atau dibandingkan sebagai urutan karakter → `string`.
- Kalau hanya satu karakter dan tidak akan diolah sebagai teks panjang → `char`.
- Kalau jawabannya hanya benar atau salah → `boolean`.

Cara berpikir ini akan terpakai terus, jauh melampaui mata kuliah ini.

## Kesalahan umum

- **Memakai `string` untuk sesuatu yang akan dihitung.** Akibatnya operasi aritmetika tidak bisa dilakukan.
- **Memakai `integer` untuk nilai yang punya pecahan.** Bagian pecahannya hilang tanpa peringatan.
- **Memakai `integer` untuk nomor telepon atau NIM.** Nol di depannya hilang.
- **Lupa menuliskan tanda kutip pada `char` dan `string`**, sehingga nilainya terbaca sebagai nama variabel.
- **Mendeklarasikan variabel yang tidak pernah dipakai**, atau memakai variabel yang tidak pernah dideklarasikan.
- **Memberi nama yang tidak menjelaskan isinya.** Ini kekeliruan yang paling murah dihindari, tetapi paling mahal akibatnya saat programnya panjang.

## Selanjutnya

Pekan depan kita membahas **operator dan ekspresi**: bagaimana nilai-nilai yang sudah bertipe ini diolah menjadi nilai baru. Di situ kamu akan melihat bahwa tipe yang dipilih pekan ini menentukan operasi mana yang boleh dipakai.

## Soal refleksi

1. Tentukan tipe yang tepat untuk: jumlah mahasiswa, berat badan, jenis kelamin, alamat rumah, dan status pembayaran. Jelaskan alasan tiap pilihan.
2. Kenapa nomor telepon lebih tepat disimpan sebagai `string` daripada `integer`? Sebutkan dua alasan.
3. Tulis deklarasi lengkap untuk pseudocode yang menghitung keliling dan luas lingkaran dari jari-jari.
4. Menurutmu, apa yang terjadi kalau `rata_rata` pada contoh kedua dideklarasikan sebagai `integer`? Uraikan dengan satu contoh angka.
5. Sebutkan satu konstanta yang masuk akal dipakai di program perhitungan nilai mahasiswa, dan jelaskan kenapa lebih baik dijadikan konstanta daripada ditulis langsung sebagai angka.
6. Adakah nilai yang menurutmu sulit ditentukan tipenya? Sebutkan, lalu jelaskan bagian mana yang membuatnya sulit.
