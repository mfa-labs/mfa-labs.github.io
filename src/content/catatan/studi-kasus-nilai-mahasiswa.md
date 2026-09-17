---
title: 'Studi Kasus: Perhitungan Nilai Akhir'
description: 'Studi kasus menyeluruh yang menggabungkan dekomposisi, tipe data, operator, pseudocode, dan flowchart untuk menghitung nilai akhir mata kuliah.'
course: 'algoritma-dan-pemrograman-1'
pubDate: 2026-10-26
tags: ['Studi Kasus', 'Integrasi', 'Pseudocode']
draft: false
---

Pekan ini tidak ada materi baru. Yang kita lakukan adalah memakai seluruh materi pekan 1 sampai 6 pada satu masalah utuh — mulai dari merumuskan masalah sampai memeriksa hasilnya.

## Rumusan masalah

Sebuah mata kuliah menilai mahasiswa dari empat komponen dengan bobot yang berbeda:

| Komponen | Bobot |
| --- | --- |
| Tugas | 20% |
| Kuis | 20% |
| UTS | 25% |
| UAS | 35% |

Setiap komponen bernilai 0 sampai 100. Yang diminta: **hitung nilai akhir mahasiswa pada skala 0 sampai 100.**

Perhatikan bahwa masalahnya masih sederhana dan belum membutuhkan percabangan. Itu memang disengaja — kita selesaikan dulu dengan alat yang sudah kita punya.

## Materi mana yang dipakai di mana

| Pekan | Materi | Perannya di kasus ini |
| --- | --- | --- |
| 2 | Computational thinking | Memecah masalah menjadi langkah kecil |
| 3 | Pseudocode | Menuangkan langkah menjadi notasi yang presisi |
| 4 | Flowchart | Memeriksa alurnya secara visual |
| 5 | Konsep data | Menentukan tipe tiap variabel |
| 6 | Operator dan ekspresi | Menyusun perhitungannya |

## Langkah 1: Dekomposisi

Masalahnya kita pecah menjadi lima bagian:

1. Tentukan nilai apa saja yang menjadi masukan.
2. Hitung kontribusi setiap komponen.
3. Jumlahkan seluruh kontribusi.
4. Bagi hasil penjumlahan dengan total bobot.
5. Tampilkan hasilnya.

Perhatikan bahwa pemecahan ini hampir sama dengan contoh di catatan pekan 2. Itu bukan kebetulan — masalah yang berbeda sering punya kerangka penyelesaian yang sama. Kemampuan mengenali pola seperti inilah yang dilatih di pekan 2.

## Langkah 2: Tentukan masukan, keluaran, dan tipe

| Variabel | Tipe | Alasan |
| --- | --- | --- |
| `tugas`, `kuis`, `uts`, `uas` | `integer` | Nilai komponen berupa bilangan bulat 0–100 |
| `kontribusi` | `integer` | Hasil penjumlahan bilangan bulat dengan bilangan bulat |
| `nilai_akhir` | `real` | Hasil pembagian bisa mengandung pecahan |

Perhatikan pilihan tipe untuk `kontribusi`. Karena keempat nilai masukannya `integer` dan pengalinya juga bilangan bulat, hasil penjumlahannya pasti bilangan bulat. Tidak ada alasan membuatnya `real`.

Sebaliknya, `nilai_akhir` **harus** `real`. Seperti yang dibahas di pekan 5, pembagian hampir selalu menghasilkan pecahan, dan bagian pecahan itu justru bagian yang penting dalam penilaian.

## Langkah 3: Susun algoritmanya

```pseudocode
DEKLARASI
  tugas, kuis, uts, uas : integer
  kontribusi : integer
  nilai_akhir : real

BEGIN
  READ tugas, kuis, uts, uas
  kontribusi ← tugas × 20 + kuis × 20 + uts × 25 + uas × 35
  nilai_akhir ← kontribusi ÷ 100
  WRITE nilai_akhir
END
```

Ekspresi pada baris `kontribusi` memang cukup panjang. Ia masih bisa dibaca, tetapi perhatikan bahwa setiap komponen dikalikan dengan bobotnya lalu dijumlahkan — polanya berulang empat kali. Menulisnya dalam satu baris membuat pola itu terlihat sekaligus.

Kalau kamu merasa barisnya terlalu padat, memecahnya menjadi dua baris juga sah:

```pseudocode
  kontribusi ← tugas × 20 + kuis × 20
  kontribusi ← kontribusi + uts × 25 + uas × 35
```

Baris kedua memakai nilai `kontribusi` yang baru saja dihitung. Ini sah, karena penugasan bekerja dari kanan ke kiri: ambil nilai `kontribusi` yang sekarang, tambahkan sisanya, lalu simpan kembali.

## Langkah 4: Gambarkan alurnya

![Flowchart menghitung nilai akhir mata kuliah](/kuliah/algoritma-dan-pemrograman-1/2026-2027-ganjil/img/05-flowchart-nilai-akhir.svg)

Alurnya lurus dari atas ke bawah, dan jumlah simbolnya cocok: tiga baris instruksi di dalam `BEGIN … END` menjadi tiga simbol, ditambah dua terminator. Kalau jumlahnya tidak cocok, berarti ada langkah yang terlewat atau tergabung.

## Langkah 5: Telusuri dengan angka

Ambil satu mahasiswa dengan nilai: tugas 80, kuis 75, UTS 70, dan UAS 85.

| Baris | Instruksi | tugas | kuis | uts | uas | kontribusi | nilai_akhir |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `READ tugas, kuis, uts, uas` | 80 | 75 | 70 | 85 | — | — |
| 2 | `kontribusi ← tugas × 20 + kuis × 20 + uts × 25 + uas × 35` | 80 | 75 | 70 | 85 | 7825 | — |
| 3 | `nilai_akhir ← kontribusi ÷ 100` | 80 | 75 | 70 | 85 | 7825 | 78.25 |
| 4 | `WRITE nilai_akhir` | 80 | 75 | 70 | 85 | 7825 | 78.25 |

Mari kita periksa baris kedua secara terpisah, karena di situlah kesalahan paling sering terjadi:

| Komponen | Perhitungan | Kontribusi |
| --- | --- | --- |
| Tugas | 80 × 20 | 1600 |
| Kuis | 75 × 20 | 1500 |
| UTS | 70 × 25 | 1750 |
| UAS | 85 × 35 | 2975 |
| **Jumlah** | | **7825** |

Kemudian `7825 ÷ 100 = 78.25`. Nilai akhirnya **78,25**.

Angka ini sama dengan contoh di catatan pekan 2 — memang sengaja, supaya kamu bisa membandingkan cara berpikir di pekan 2 dengan hasil akhirnya di pekan ini.

## Kalau bobotnya tidak berjumlah 100

Algoritma di atas membagi dengan angka tetap `100`, karena kebetulan total bobotnya memang 100. Bagaimana kalau suatu saat bobotnya tidak berjumlah 100 — misalnya karena satu komponen dibatalkan?

Solusinya sederhana: **hitung total bobotnya lebih dulu, lalu bagi dengan nilai itu.**

```pseudocode
DEKLARASI
  tugas, kuis, uts : integer
  kontribusi : integer
  total_bobot : integer
  nilai_akhir : real

BEGIN
  READ tugas, kuis, uts
  kontribusi ← tugas × 20 + kuis × 20 + uts × 25
  total_bobot ← 20 + 20 + 25
  nilai_akhir ← kontribusi ÷ total_bobot
  WRITE nilai_akhir
END
```

Perbedaannya kecil, tetapi akibatnya besar: algoritmanya sekarang tetap benar meskipun komposisi bobotnya berubah. Kebiasaan memikirkan "bagaimana kalau keadaannya berbeda" inilah yang membedakan program yang hanya jalan untuk satu kasus dan program yang benar-benar bisa dipakai.

## Kasus kedua: persentase kehadiran

Kemampuan yang sama bisa dipakai untuk masalah lain. Misalnya menghitung persentase kehadiran mahasiswa dari jumlah pertemuan yang dihadiri.

```pseudocode
DEKLARASI
  hadir : integer
  total_pertemuan : integer
  persentase : real

BEGIN
  READ hadir, total_pertemuan
  persentase ← hadir × 100 ÷ total_pertemuan
  WRITE persentase
END
```

Perhatikan bahwa bentuknya sama dengan perhitungan nilai akhir: kalikan dengan pembanding, lalu bagi dengan totalnya. Mengenali kesamaan bentuk seperti ini membuat kamu tidak perlu memulai dari nol setiap kali menghadapi masalah baru.

## Yang belum bisa kita kerjakan

Ada satu langkah yang biasanya menyertai perhitungan nilai: **mengubah nilai angka menjadi huruf mutu** — 80 ke atas mendapat A, 70 sampai 79 mendapat B, dan seterusnya.

Langkah itu belum bisa kita kerjakan sekarang, karena memerlukan **percabangan**: program harus memeriksa apakah nilainya melewati suatu batas, lalu memilih hasil yang berbeda. Alat untuk itu baru kita pelajari pada pekan 9, saat membahas seleksi. Setelah itu, kasus ini akan kita lengkapi.

## Kesalahan umum

- **Lupa mengalikan dengan bobot.** Nilai akhir dihitung sebagai rata-rata biasa, padahal bobot tiap komponen berbeda.
- **Membagi dengan jumlah komponen, bukan total bobot.** Empat komponen tidak berarti dibagi empat, karena bobotnya tidak sama.
- **Memilih tipe yang salah.** `nilai_akhir` yang bertipe `integer` akan membuang bagian pecahannya.
- **Lupa menuliskan `READ` atau `WRITE`.** Program berjalan tanpa keluhan, tetapi tidak menghasilkan apa pun yang bisa dilihat.
- **Menumpuk seluruh perhitungan dalam satu ekspresi yang sulit diperiksa.** Pecah bila perlu.
- **Tidak menelusuri dengan angka.** Kesalahan urutan dan kesalahan tipe paling cepat ketahuan lewat penelusuran.

## Menuju UTS

Pekan depan adalah **Ujian Tengah Semester**. Materi yang diujikan mencakup seluruh pekan 1 sampai 7:

- Konsep algoritma dan computational thinking
- Pseudocode bergaya `BEGIN … END`
- Flowchart dan simbol standarnya
- Variabel, tipe data, konstanta, dan deklarasi
- Operator aritmetika dan urutan pengerjaan

Seluruhnya masih terbatas pada runtunan — belum ada percabangan dan pengulangan, karena keduanya memang belum kita pelajari.

## Soal refleksi

1. Hitung nilai akhir untuk mahasiswa dengan nilai: tugas 65, kuis 70, UTS 60, dan UAS 75. Tunjukkan tabel penelusurannya.
2. Kalau bobot komponennya diubah menjadi tugas 25%, kuis 15%, UTS 25%, dan UAS 35%, apakah algoritmanya perlu diubah? Bagian mana yang berubah?
3. Tulis pseudocode yang menghitung persentase kehadiran, lalu jelaskan mengapa hasilnya harus bertipe `real`.
4. Tambahkan satu komponen baru — misalnya praktikum dengan bobot 10% — ke dalam algoritma. Bobot komponen lain perlu disesuaikan agar totalnya tetap 100. Tulis ulang deklarasinya.
5. Bandingkan kasus nilai akhir dan kasus persentase kehadiran. Sebutkan persamaan bentuk keduanya.
6. Menurutmu, mengapa mengubah nilai angka menjadi huruf mutu memerlukan percabangan, sedangkan menghitung nilai akhirnya tidak?
