---
title: 'Rangkuman dan Persiapan UAS'
description: 'Rangkuman materi pekan 9 sampai 14, daftar istilah, kesalahan yang sering muncul, dan panduan belajar menghadapi Ujian Akhir Semester.'
course: 'algoritma-dan-pemrograman-1'
pubDate: 2026-12-28
tags: ['Rangkuman', 'UAS', 'Persiapan']
draft: false
---

Pekan ini tidak ada materi baru. Catatan ini merangkum pekan 9 sampai 14 dan memberi panduan belajar menghadapi Ujian Akhir Semester. Catatan ini **bukan** soal ujian dan tidak memuat kunci jawaban apa pun.

## Peta materi pekan 9 sampai 14

| Pekan | Topik | Yang perlu kamu kuasai |
| --- | --- | --- |
| 9 | Seleksi | Operator perbandingan dan logika, `IF`/`ELSE`/`ELSE IF`/`CASE` |
| 10 | Iterasi | `WHILE`, `FOR`, `REPEAT`, pola pencacah dan akumulator |
| 11 | Studi kasus transaksi | Menggabungkan seleksi dan iterasi pada satu masalah |
| 12 | Pemecahan masalah | Memecah soal cerita, memilih struktur kendali, kasus batas |
| 13 | Kasus data akademik | Akumulator, nilai tertinggi/terendah sementara, pencacah |
| 14 | Mini project | Merancang algoritma lengkap dan mendokumentasikannya |

Perhatikan bahwa pekan 11 sampai 14 bukan materi yang benar-benar baru. Ketiganya adalah **penerapan** dari seleksi dan iterasi pada masalah yang makin besar. Kalau pekan 9 dan 10 sudah dikuasai, sisanya lebih mudah.

## Tujuh kemampuan yang perlu kamu miliki

Materi UAS bukan hafalan. Yang diuji adalah kemampuan mengerjakan hal-hal berikut.

**1. Membentuk pertanyaan yang bernilai benar-salah.** Memakai operator perbandingan (`=`, `≠`, `<`, `>`, `≤`, `≥`) dan menggabungkannya dengan `AND`, `OR`, `NOT`.

**2. Menulis struktur seleksi yang benar.** `IF … THEN … ENDIF`, `IF … ENDIF` dengan `ELSE`, rangkaian `ELSE IF`, dan `CASE` untuk pilihan yang seragam.

**3. Menguasai urutan pemeriksaan cabang.** Tahu bahwa cabang pertama yang benar itulah yang dipakai, sehingga urutan bertingkat menentukan hasil.

**4. Menulis struktur iterasi yang tepat.** Memilih antara `WHILE`, `FOR`, dan `REPEAT` sesuai jumlah putaran yang diketahui.

**5. Memakai pola pencacah dan akumulator.** Menyiapkan nilai awal dengan benar, memperbarui di dalam pengulangan, dan memastikan pengulangan berhenti.

**6. Memecah soal cerita.** Memisahkan masukan, proses, dan keluaran; memilih struktur kendali; mengenali kasus batas.

**7. Menelusuri dan memeriksa hasil.** Menyusun tabel penelusuran dan melakukan pemeriksaan silang, misalnya jumlah pencacah harus sama dengan banyak data.

## Daftar istilah penting

| Istilah | Artinya |
| --- | --- |
| **Kondisi** | Pertanyaan yang hasilnya benar atau salah |
| **Operator perbandingan** | `=`, `≠`, `<`, `>`, `≤`, `≥` — menghasilkan `boolean` |
| **Operator logika** | `AND`, `OR`, `NOT` — menggabungkan pertanyaan |
| **Seleksi** | Struktur yang memilih di antara beberapa jalur |
| **`IF … ENDIF`** | Blok keputusan; `ELSE` untuk kemungkinan sebaliknya |
| **`CASE`** | Seleksi berdasarkan satu nilai terhadap daftar pilihan |
| **Iterasi** | Struktur yang mengerjakan satu blok berulang kali |
| **`WHILE`** | Pengulangan dengan kondisi diperiksa di awal |
| **`FOR`** | Pengulangan dengan jumlah putaran sudah pasti |
| **`REPEAT`** | Pengulangan dengan kondisi diperiksa di akhir |
| **Pencacah** | Variabel yang dinaikkan untuk menghitung putaran atau kejadian |
| **Akumulator** | Variabel yang terus ditambahi, misalnya total |
| **Sentinel** | Nilai penanda berhenti, bukan data |
| **Pengulangan tak berujung** | Pengulangan yang tidak pernah berhenti |
| **Kasus batas** | Masukan ekstrem: nol, negatif, satu, atau tepat di perambatan syarat |
| **Pemeriksaan silang** | Memeriksa hasil lewat hubungan antar-nilai |

## Kesalahan yang paling sering muncul

Kumpulan kesalahan dari pekan 9 sampai 14. Sebagian besar nilai yang hilang biasanya berasal dari daftar ini.

- **Memakai `=` untuk penugasan.** Di dalam seleksi `=` adalah pertanyaan; penugasan tetap `←`.
- **Lupa `ENDIF` atau `ENDFOR`**, sehingga batas blok menjadi kabur.
- **Membalik urutan cabang bertingkat**, sehingga nilai tinggi atau besar jatuh ke cabang yang salah.
- **Menulis `70 ≤ nilai ≤ 85`** alih-alih menyambung dengan `AND`.
- **Memakai `AND` padahal maksudnya `OR`** sehingga syaratnya tidak pernah terpenuhi.
- **Lupa mengubah pencacah di dalam `WHILE`**, sehingga pengulangan tak berujung.
- **Menaruh inisialisasi akumulator di dalam pengulangan**, sehingga nilainya ter-reset setiap putaran.
- **Memulai akumulator perkalian dari 0**, sehingga hasilnya selalu nol.
- **Salah padanan batas**, misalnya `i < n` dikira sama dengan `i ≤ n`.
- **Memberi nilai awal `tertinggi` atau `terendah` dengan angka karangan**, bukan dari data nyata.
- **Pembagian dengan nol** ketika data kosong atau kelas belum berisi.
- **Tidak menelusuri** sebelum menganggap rancangan selesai.

## Cara belajar yang disarankan

**Kerjakan ulang, jangan hanya dibaca.** Membaca contoh terasa lancar, tetapi kemampuan menyusun langkah baru terbentuk ketika kamu menulisnya sendiri dari nol. Tutup catatannya, lalu coba tulis ulang contoh dari soal.

**Telusuri setiap jawabanmu dengan angka.** Kebiasaan ini paling cepat menunjukkan apakah sebuah algoritma benar. Kalau hasil penelusuran tidak sesuai dugaan, biasanya ada langkah yang terlewat atau urutan yang keliru.

**Bedakan runtunan, seleksi, dan iterasi.** Untuk setiap soal, tanyakan lebih dulu: apakah semua langkah dikerjakan sekali, ada yang bergantung syarat, atau ada yang berulang? Jawaban atas pertanyaan ini menentukan seluruh rancangan.

**Periksa kasus batas.** Setiap rancangan diuji dengan nol, negatif, satu, dan nilai tepat di perambatan syarat. Ini bagian yang paling sering menemukan kekeliruan.

**Ubah satu soal menjadi beberapa bentuk.** Setelah menulis pseudocode, gambarkan flowchart-nya. Setelah keduanya selesai, ubah sedikit keadaannya — misalnya menambah satu komponen penilaian — lalu periksa bagian mana yang perlu berubah.

**Kerjakan soal refleksi di setiap catatan pekan.** Soal-soal itu dibuat untuk melatih cara berpikir, bukan untuk menguji hafalan.

## Latihan mandiri

Latihan berikut disusun sebagai bahan belajar, bukan sebagai gambaran soal ujian. Semuanya bisa dikerjakan dengan materi pekan 9 sampai 14.

1. Tulis pseudocode yang menentukan apakah sebuah tahun adalah tahun kabisat, lalu warnai bagian yang memakai operator logika.
2. Tulis pseudocode yang menentukan kategori sebuah nilai menjadi empat tingkat, memakai `IF … ELSE IF`.
3. Tulis pseudocode yang menjumlahkan seluruh bilangan ganjil dari 1 sampai N, lalu telusuri dengan N = 6.
4. Tulis pseudocode yang membalik susunan angka sebuah bilangan bulat (misalnya 12345 menjadi 54321), memakai `div` dan `mod`.
5. Tulis pseudocode yang membaca sejumlah nilai sampai penanda berhenti `0`, lalu menampilkan nilai terbesar dan banyaknya nilai yang dibaca.
6. Untuk sebuah kelas berisi n mahasiswa, tulis pseudocode yang menghitung rata-rata nilai mahasiswa yang di atas ambang tertentu saja.
7. Tulis pseudocode yang menentukan apakah sebuah bilangan termasuk bilangan sempurna (jumlah pembaginya, selain dirinya, sama dengan bilangan itu).
8. Ambil satu masalah di sekitarmu, lalu rancang algoritmanya mengikuti kerangka mini project: analisis, pseudocode, flowchart, dan penelusuran pada satu kasus batas.

## Yang tidak diujikan

Beberapa hal berikut tidak masuk UAS karena memang di luar cakupan:

- **Seminar kelas (pekan 15)** bukan materi baru, melainkan sesi presentasi dan penilaian antarkelompok.
- **Struktur data** seperti larik dan senarai belum dibahas pada mata kuliah ini, sehingga semua soal tetap dikerjakan dengan variabel tunggal dan akumulator.
- **Penulisan program bahasa sungguhan** menjadi cakupan mata kuliah lanjutan; di sini fokusnya adalah algoritma dan pseudocode.

## Selanjutnya

Setelah UAS, mata kuliah ini selesai. Kemampuan yang dibangun sepanjang satu semester — memecah masalah, memilih struktur kendali, menelusuri, dan menguji kasus batas — akan terpakai terus, jauh melampaui perkuliahan ini. Mata kuliah berikutnya mulai menerjemahkan pseudocode menjadi program yang benar-benar berjalan.
