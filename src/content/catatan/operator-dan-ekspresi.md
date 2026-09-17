---
title: 'Operator dan Ekspresi'
description: 'Operator aritmetika, operand, urutan pengerjaan, dan penulisan ekspresi dalam pseudocode — termasuk div, mod, dan pengaruh tipe data.'
course: 'algoritma-dan-pemrograman-1'
pubDate: 2026-10-19
tags: ['Operator', 'Ekspresi', 'Aritmetika']
draft: false
---

Pekan lalu kita menentukan tipe tiap variabel. Pekan ini kita mengolah nilai-nilai itu menjadi nilai baru. Semua contoh masih berbentuk runtunan lurus, sama seperti pekan-pekan sebelumnya.

## Operator, operand, dan ekspresi

Tiga istilah yang akan sering kita pakai:

- **Operator** adalah simbol yang mengerjakan suatu operasi terhadap nilai.
- **Operand** adalah nilai yang dikerjakan oleh operator tersebut.
- **Ekspresi** adalah gabungan operand, operator, dan tanda kurung yang menghasilkan sebuah nilai.

Perhatikan contoh berikut.

```pseudocode
luas ← panjang × lebar
```

Di situ `×` adalah operator, sedangkan `panjang` dan `lebar` adalah operand. Gabungan `panjang × lebar` disebut ekspresi, dan keseluruhan barisnya disebut **instruksi penugasan** — instruksi yang menyimpan hasil ekspresi ke dalam sebuah variabel.

Perbedaan ini penting: **tanda `←` bukan operator.** Ia penanda instruksi, bukan operasi yang menghasilkan nilai. Yang menghasilkan nilai adalah ekspresi di sebelah kanannya.

## Operator aritmetika

| Operator | Arti | Contoh | Hasil |
| --- | --- | --- | --- |
| `+` | Penjumlahan | `7 + 3` | `10` |
| `−` | Pengurangan | `7 − 3` | `4` |
| `×` | Perkalian | `7 × 3` | `21` |
| `÷` | Pembagian | `7 ÷ 2` | `3.5` |
| `div` | Hasil bagi bulat | `7 div 2` | `3` |
| `mod` | Sisa bagi | `7 mod 2` | `1` |
| `^` | Pemangkatan | `2 ^ 3` | `8` |

### Membedakan ÷, div, dan mod

Tiga operator pembagian ini sering tertukar, padahal perbedaannya sederhana.

Ambil contoh `7 ÷ 2`. Ada dua pertanyaan yang bisa diajukan:

- **Berapa hasilnya kalau boleh berpecahan?** Jawabannya `3.5` — inilah yang dikerjakan `÷`.
- **Berapa kali angka 2 muat penuh ke dalam 7?** Jawabannya `3` — inilah yang dikerjakan `div`.
- **Berapa sisanya?** Jawabannya `1` — inilah yang dikerjakan `mod`.

Ketiganya saling terkait. Perhatikan bahwa `3 × 2 + 1 = 7`: hasil `div` dikalikan pembagi, ditambah hasil `mod`, kembali menjadi bilangan asalnya. Hubungan ini berguna untuk memeriksa apakah perhitunganmu benar.

Operator `div` dan `mod` bukan pelengkap. Keduanya akan sangat terpakai ketika nanti kita perlu memecah sebuah bilangan menjadi bagian-bagiannya — misalnya mengubah total detik menjadi menit dan sisa detik, seperti pada contoh nanti.

### Operator minus yang berdiri sendiri

Simbol `−` punya dua peran yang berbeda:

- **Sebagai pengurangan**, ia butuh dua operand: `7 − 3`.
- **Sebagai penanda negatif**, ia hanya butuh satu operand: `−3`.

Peran kedua ini disebut operator unary, dan berguna ketika kamu perlu membalik tanda sebuah nilai. Perhatikan bahwa `−3` adalah sebuah nilai, sedangkan `7 − 3` adalah sebuah operasi.

## Urutan pengerjaan

Kalau sebuah ekspresi memuat beberapa operator, urutan pengerjaannya tidak sembarangan. Aturannya sama seperti di matematika, dengan tambahan `div` dan `mod` yang setingkat dengan perkalian dan pembagian.

1. **Tanda kurung** dikerjakan lebih dulu.
2. **Pemangkatan** (`^`).
3. **Perkalian, pembagian, `div`, dan `mod`** — dari kiri ke kanan.
4. **Penjumlahan dan pengurangan** — dari kiri ke kanan.

Dua contoh berikut memperlihatkan akibatnya.

| Ekspresi | Dikerjakan sebagai | Hasil |
| --- | --- | --- |
| `2 + 3 × 4` | `2 + 12` | `14` |
| `(2 + 3) × 4` | `5 × 4` | `20` |

Perhatikan juga contoh yang lebih halus, yaitu ketika prioritasnya sama:

| Ekspresi | Dikerjakan sebagai | Hasil |
| --- | --- | --- |
| `20 − 5 − 3` | `15 − 3` | `12` |
| `100 ÷ 10 ÷ 2` | `10 ÷ 2` | `5` |

Untuk operator yang setingkat, pengerjaan berjalan dari kiri ke kanan. Kalau kamu menghitung `20 − 5 − 3` sebagai `20 − 2`, hasilnya akan salah.

**Tanda kurung mengalahkan semua aturan di atas.** Kalau ragu, gunakan tanda kurung — bukan karena aturannya berubah, tetapi karena maksudmu menjadi terbaca oleh orang lain, termasuk dirimu sendiri di kemudian hari.

### Menelusuri sebuah ekspresi

Sama seperti pseudocode, ekspresi bisa ditelusuri langkah demi langkah. Ambil contoh perhitungan total belanja dengan potongan 10 persen:

```pseudocode
total ← (harga × jumlah) − (harga × jumlah × 10 ÷ 100)
```

Dengan `harga` bernilai 5000 dan `jumlah` bernilai 3:

| Langkah | Dikerjakan | Hasil |
| --- | --- | --- |
| 1 | `harga × jumlah` | 15000 |
| 2 | `harga × jumlah × 10` | 150000 |
| 3 | `150000 ÷ 100` | 1500 |
| 4 | `15000 − 1500` | 13500 |

Tabel seperti ini terasa berlebihan untuk ekspresi pendek, tetapi sangat menolong ketika ekspresinya panjang atau ketika hasilnya tidak sesuai dugaan. Kebiasaan yang sama akan kamu pakai lagi saat memeriksa program yang sesungguhnya.

## Ekspresi dan tipe data

Hasil sebuah ekspresi juga punya tipe, dan tipe itu tidak selalu sama dengan tipe operandnya.

**`÷` menghasilkan nilai yang bisa berpecahan.** Karena itu hasilnya sebaiknya disimpan di variabel bertipe `real`. Inilah alasan `rata_rata` di pekan lalu dideklarasikan `real`, sedangkan `nilai1`, `nilai2`, dan `nilai3` tetap `integer`.

**`div` dan `mod` menghasilkan bilangan bulat.** Keduanya memang mengambil bagian bulat dari pembagian, jadi hasilnya selalu `integer`.

**Kalau satu operand `integer` dan satu lagi `real`, hasilnya mengikuti yang lebih luas**, yaitu `real`. Ini masuk akal: menjumlahkan `3` dan `0.5` tidak mungkin menghasilkan bilangan bulat.

Karena tipe ini menentukan hasil, kebiasaan yang baik adalah **memastikan tipe hasil sesuai dengan tipe variabel tujuan**. Kalau `total` bertipe `integer` tetapi ekspresinya memakai `÷`, ada bagian hasil yang akan hilang.

## Ekspresi yang panjang

Ekspresi boleh panjang, tetapi panjang tidak selalu berarti lebih baik. Bandingkan dua penulisan berikut.

```pseudocode
# Satu ekspresi panjang
rata_rata ← (nilai1 + nilai2 + nilai3 + nilai4) ÷ 4
```

```pseudocode
# Dipecah dengan variabel antara
total ← nilai1 + nilai2 + nilai3 + nilai4
rata_rata ← total ÷ 4
```

Keduanya benar dan menghasilkan nilai yang sama. Yang kedua lebih mudah diperiksa, karena setiap baris hanya memuat satu gagasan. Sebagai patokan sederhana: **kalau sebuah ekspresi sudah sulit dibaca sekali lihat, pecah menjadi beberapa baris.** Variabel antara yang jelas namanya bukan pemborosan.

## Contoh

### 1. Luas dan keliling persegi panjang

```pseudocode
DEKLARASI
  panjang, lebar : integer
  luas : integer
  keliling : integer

BEGIN
  READ panjang, lebar
  luas ← panjang × lebar
  keliling ← 2 × (panjang + lebar)
  WRITE luas, keliling
END
```

Perhatikan tanda kurung pada `2 × (panjang + lebar)`. Tanpa tanda kurung, ekspresinya menjadi `2 × panjang + lebar` — hasilnya berbeda dan salah.

### 2. Mengubah detik menjadi menit dan sisa detik

Inilah contoh yang paling jelas memperlihatkan gunanya `div` dan `mod`.

```pseudocode
DEKLARASI
  total_detik : integer
  menit : integer
  sisa_detik : integer

BEGIN
  READ total_detik
  menit ← total_detik div 60
  sisa_detik ← total_detik mod 60
  WRITE menit, sisa_detik
END
```

Kalau `total_detik` bernilai 145, hasilnya `menit` bernilai 2 dan `sisa_detik` bernilai 25. Periksa kembali dengan hubungan tadi: `2 × 60 + 25 = 145` — cocok dengan masukan aslinya.

### 3. Total belanja setelah diskon

```pseudocode
DEKLARASI
  harga : integer
  jumlah : integer
  subtotal : real
  diskon : real
  total : real

BEGIN
  READ harga, jumlah
  subtotal ← harga × jumlah
  diskon ← subtotal × 10 ÷ 100
  total ← subtotal − diskon
  WRITE total
END
```

Angka `10` di situ adalah persentase diskon. Nilai seperti ini sering dijadikan konstanta, karena maknanya lebih jelas ketika diberi nama, dan karena nilainya bisa berubah tanpa harus dicari di tengah ekspresi.

### 4. Menghitung rata-rata dengan tipe yang tepat

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

Contoh ini menggabungkan seluruh materi pekan ini: beberapa operand, tiga operator berbeda, dan pemilihan tipe yang menentukan apakah bagian pecahan dari hasilnya tetap tersimpan.

## Batas pekan ini

Ada dua kelompok operator lain yang **belum** kita bahas di sini:

- **Operator perbandingan** — membandingkan dua nilai, misalnya untuk menanyakan mana yang lebih besar.
- **Operator logika** — menggabungkan beberapa pertanyaan, misalnya "dan", "atau", "tidak".

Keduanya baru akan terpakai saat kita membahas seleksi pada pekan 9. Kita sengaja menahannya supaya contoh-contoh di pekan ini tetap berbentuk runtunan lurus, dan supaya kamu mengenal operator aritmetika dengan matang sebelum bertemu percabangan.

## Kesalahan umum

- **Pembagian dengan nol.** `÷`, `div`, dan `mod` tidak terdefinisi jika pembaginya nol. Ini kesalahan yang harus selalu diantisipasi, bukan diabaikan.
- **Lupa tanda kurung pada ekspresi yang seharusnya dikelompokkan.** Seperti contoh `2 × (panjang + lebar)`.
- **Menghitung dari kanan ke kiri pada operator setingkat.** `20 − 5 − 3` bukan `20 − 2`.
- **Memakai `=` padahal yang dimaksud penugasan `←`.** Keduanya berbeda arti, seperti yang dibahas di pekan 3.
- **Tipe hasil tidak sesuai tipe variabel tujuan**, sehingga bagian pecahan hilang tanpa pemberitahuan.
- **Memaksakan satu ekspresi panjang** padahal bisa dipecah menjadi dua baris yang lebih jelas.

## Selanjutnya

Pekan depan kita masuk ke **studi kasus perhitungan nilai mahasiswa**: sebuah program yang menggabungkan seluruh materi pekan 1 sampai 6 — variabel, tipe data, operator, dan ekspresi — tanpa satu pun percabangan. Setelah itu **UTS** pada pekan 8.

## Soal refleksi

1. Hitung sendiri nilai `17 div 5`, `17 mod 5`, dan `17 ÷ 5`. Lalu periksa apakah hubungan `(17 div 5) × 5 + (17 mod 5)` menghasilkan 17 kembali.
2. Tulis pseudocode yang mengubah total hari menjadi jumlah minggu dan sisa harinya.
3. Tulis pseudocode untuk menghitung luas lingkaran dari jari-jarinya. Tentukan tipe yang tepat untuk setiap variabelnya.
4. Kenapa `2 × (panjang + lebar)` dan `2 × panjang + lebar` menghasilkan nilai yang berbeda? Uraikan langkah perhitungannya masing-masing.
5. Ambil satu ekspresi panjang dari catatan ini, lalu pecah menjadi beberapa baris memakai variabel antara. Apakah hasilnya berubah? Apakah keterbacaannya bertambah?
6. Sebutkan satu perhitungan yang menurutmu mengandung risiko pembagian dengan nol, dan jelaskan kapan risiko itu muncul.
