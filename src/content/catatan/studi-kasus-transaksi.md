---
title: 'Studi Kasus Transaksi'
description: 'Menggabungkan seleksi dan iterasi pada satu masalah nyata: menghitung total belanja, memberi diskon bertingkat, dan menghitung kembalian.'
course: 'algoritma-dan-pemrograman-1'
pubDate: 2026-11-23
tags: ['Studi Kasus', 'Seleksi', 'Iterasi']
draft: false
---

Pekan 9 dan 10 memberi kita dua perkakas baru: kemampuan memilih dan kemampuan mengulang. Pekan ini keduanya dipakai bersama untuk menyelesaikan satu masalah yang utuh — perhitungan transaksi di sebuah kasir.

## Kasusnya

Sebuah toko ingin program sederhana yang menerima daftar belanja, menjumlahkan harganya, memberi diskon bila totalnya cukup besar, lalu menghitung kembalian dari uang yang dibayarkan. Inilah masalah pertama kita yang benar-benar menyerupai pekerjaan nyata.

## Memecah masalah sebelum menulis

Kebiasaan yang paling menentukan di sini bukan menulis pseudocode, melainkan **memecah masalah** lebih dulu. Untuk kasus ini, tanyakan tiga hal: apa masukannya, apa yang dihitung, dan apa hasilnya.

**Masukan.** Banyaknya barang yang dibeli, lalu untuk setiap barang: harga satuan dan jumlahnya. Setelah semua barang, uang yang dibayarkan.

**Proses.** Menjumlahkan harga seluruh barang menjadi subtotal, menentukan besar diskon dari subtotal, mengurangi subtotal dengan diskon menjadi total, lalu mengurangi uang bayar dengan total menjadi kembalian.

**Keluaran.** Total yang harus dibayar dan kembaliannya.

Pemecahan ini penting karena ia langsung memberi tahu struktur kendali mana yang dipakai. Banyak barang yang **sudah diketahui** mengarah ke iterasi `FOR`. Penentuan diskon yang **bergantung pada keadaan** mengarah ke seleksi `IF`.

## Rancangan pseudocode

Menyusun kerangkanya lebih dulu membuat rinciannya lebih mudah diisi.

```text
1. Baca banyaknya barang
2. Untuk setiap barang: baca harga dan jumlah, tambahkan ke subtotal
3. Tentukan diskon dari subtotal
4. total ← subtotal − diskon
5. Baca uang bayar
6. kembalian ← bayar − total
7. Tampilkan total dan kembalian
```

Setelah kerangkanya jelas, tiap langkah baru diterjemahkan menjadi pseudocode lengkap.

## Pseudocode lengkap

```pseudocode
DEKLARASI
  jumlah_barang : integer
  i : integer
  harga : integer
  banyak : integer
  subtotal : integer
  diskon : real
  total : real
  bayar : integer
  kembali : real

BEGIN
  subtotal ← 0
  READ jumlah_barang

  FOR i ← 1 TO jumlah_barang DO
    READ harga, banyak
    subtotal ← subtotal + (harga × banyak)
  ENDFOR

  IF subtotal ≥ 500000 THEN
    diskon ← subtotal × 10 ÷ 100
  ELSE IF subtotal ≥ 250000 THEN
    diskon ← subtotal × 5 ÷ 100
  ELSE
    diskon ← 0
  ENDIF

  total ← subtotal − diskon
  WRITE total

  READ bayar
  kembali ← bayar − total
  WRITE kembali
END
```

### Yang perlu diperhatikan

**Akumulator disiapkan sebelum pengulangan.** `subtotal ← 0` berada di luar `FOR`. Kalau baris ini dipindahkan ke dalam, subtotal akan direset setiap putaran dan yang tersisa hanya harga barang terakhir.

**Perkalian di dalam tanda kurung.** `harga × banyak` adalah harga satu jenis barang. Karena subtotal adalah penjumlahan, tanda kurung sebenarnya tidak mengubah hasil di sini — tetapi ia membuat maksud barisnya lebih terbaca.

**Diskon memakai seleksi bertingkat.** Karena cabang diperiksa berurutan, cabang `subtotal ≥ 250000` hanya diperiksa bila subtotal di bawah 500000. Inilah sebabnya batas atasnya tidak perlu ditulis ulang.

**Tipe mengikuti hasil hitungan.** `subtotal` bilangan bulat, tetapi `diskon`, `total`, dan `kembali` bertipe `real` karena memuat hasil pembagian persen yang bisa berpecahan.

## Menelusuri dengan satu contoh

Anggap kasir memasukkan 3 barang: (harga 120000, 2 buah), (harga 90000, 3 buah), dan (harga 25000, 4 buah). Lalu uang bayar 500000.

| Tahap | Perhitungan | Nilai |
| --- | --- | --- |
| Barang 1 | `120000 × 2` | subtotal 240000 |
| Barang 2 | `+ 90000 × 3` | subtotal 510000 |
| Barang 3 | `+ 25000 × 4` | subtotal 610000 |
| Diskon | `610000 ≥ 500000` → `610000 × 10 ÷ 100` | diskon 61000 |
| Total | `610000 − 61000` | total 549000 |
| Kembalian | `500000 − 549000` | kembali −49000 |

Hasil terakhir menyadarkan kita akan satu hal: **kembalian bernilai negatif**. Uang yang dibayarkan ternyata kurang. Program yang baik tidak boleh diam saja menghadapi keadaan ini — ia harus mengatakannya.

## Menangani keadaan yang tidak sah

Inilah nilai tambah seleksi di dalam alur yang sudah berjalan: memeriksa apakah hasilnya masuk akal.

```pseudocode
IF bayar ≥ total THEN
  kembali ← bayar − total
  WRITE "kembalian", kembali
ELSE
  WRITE "uang kurang", total − bayar
ENDIF
```

Sekarang program membedakan dua keadaan dengan jelas: pembayaran cukup atau kurang. Perhatikan bahwa keduanya tetap menghasilkan keluaran yang berguna, bukan pesan gagal yang menggantung.

Pemeriksaan serupa bisa ditambahkan pada masukan, misalnya menolak harga atau banyak yang bernilai negatif. Kebiasaannya sama: **pikirkan keadaan yang tidak diinginkan, lalu putuskan apa yang harus dilakukan.**

## Memecah kembalian menjadi pecahan uang

Satu penggunaan `div` dan `mod` yang sangat sering muncul di dunia nyata adalah memecah sejumlah uang menjadi lembaran dan koin. Ini contoh ringkas dengan kembalian yang sudah pasti bilangan bulat.

```pseudocode
DEKLARASI
  kembali : integer
  sisa : integer
  lembar_100rb : integer
  lembar_50rb : integer
  lembar_20rb : integer

BEGIN
  READ kembali

  lembar_100rb ← kembali div 100000
  sisa ← kembali mod 100000

  lembar_50rb ← sisa div 50000
  sisa ← sisa mod 50000

  lembar_20rb ← sisa div 20000
  sisa ← sisa mod 20000

  WRITE lembar_100rb, lembar_50rb, lembar_20rb, sisa
END
```

Polanya selalu sama: `div` mengambil berapa lembar yang muat penuh, `mod` menyisakan yang belum terpecah untuk pecahan berikutnya. Dengan kembalian 175000, hasilnya adalah 1 lembar 100 ribu, 1 lembar 50 ribu, 1 lembar 20 ribu, dan sisa 5000.

## Menggabungkan dalam satu pengulangan

Menariknya, pemecahan pecahan uang itu bisa diulang untuk daftar pecahan yang panjang. Kita belum mengenal cara menyimpan daftar, tetapi pola yang sama tetap bisa ditulis berurutan seperti di atas. Inilah batas wajar mata kuliah ini: tanpa struktur data, pengulangan hanya berguna untuk mengulang **satu** alur, bukan untuk menjelajahi kumpulan nilai.

## Kesalahan umum

- **Menaruh `subtotal ← 0` di dalam pengulangan**, sehingga nilainya direset setiap putaran.
- **Menaruh `READ` harga di luar pengulangan**, sehingga barang yang sama dihitung berulang.
- **Lupa tanda kurung** pada `(harga × banyak)` sehingga tertukar dengan `subtotal + harga`.
- **Membalik urutan cabang diskon**, sehingga belanja besar mendapat diskon kecil.
- **Tidak memeriksa keadaan uang kurang**, sehingga kembalian negatif ditampilkan seolah-olah sah.
- **Memakai `integer` untuk nilai yang memuat hasil persen**, sehingga pecahannya hilang.
- **Menjumlahkan sesuatu yang belum dihitung** karena langkahnya tertukar.

## Selanjutnya

Pekan depan kita naik satu tingkat lagi: bukan lagi menyelesaikan satu kasus tertentu, melainkan **memecahkan masalah secara umum** — bagaimana membaca sebuah soal, mengenali struktur kendali yang tepat, dan membuktikan kebenaran rancangan lewat penelusuran sebelum dianggap selesai.

## Soal refleksi

1. Untuk kasus transaksi di atas, kenapa bagian daftar barang lebih tepat memakai `FOR` dan bukan `WHILE`?
2. Apa yang terjadi bila `subtotal ← 0` dipindahkan ke dalam `FOR`? Telusuri dengan dua barang.
3. Tambahkan pemeriksaan agar program menolak harga atau banyak yang bernilai negatif. Di mana tempat pemeriksaan itu paling tepat?
4. Hitung pemecahan pecahan uang untuk kembalian 287000 dengan algoritma di atas, lalu tunjukkan tiap langkahnya.
5. Kalau toko ingin memberi diskon 15 persen untuk belanja di atas 1 juta, di mana perubahan perlu dilakukan?
6. Pikirkan satu keadaan tidak sah lain yang mungkin muncul pada kasus ini, dan jelaskan bagaimana seharusnya program menanganinya.
