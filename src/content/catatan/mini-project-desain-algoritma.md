---
title: 'Mini Project Desain Algoritma'
description: 'Panduan merancang satu algoritma lengkap dari nol: dari narasi masalah menjadi analisis, pseudocode, flowchart, penelusuran, dan dokumentasi yang bisa diperiksa.'
course: 'algoritma-dan-pemrograman-1'
pubDate: 2026-12-14
tags: ['Mini Project', 'Perancangan', 'Dokumentasi']
draft: false
---

Sepanjang satu semester kita mengerjakan banyak soal, tetapi selalu dengan batas yang jelas: satu topik, satu contoh. Pekan ini kita mengerjakan yang sebaliknya — **merancang satu algoritma lengkap dari nol**, memakai seluruh materi pekan 1 sampai 13.

## Tujuan

Mini project ini bukan ujian, melainkan kesempatan menyatukan seluruh cara berpikir yang sudah dipelajari: memecah masalah, memilih struktur kendali, menulis pseudocode, menggambar flowchart, dan membuktikan rancangan lewat penelusuran.

Hasilnya adalah satu **dokumen rancangan** yang bisa dibaca dan diperiksa orang lain. Yang dinilai bukan panjangnya, melainkan kejelasan dan ketepatan proses berpikirnya.

## Yang perlu dihasilkan

Sebuah dokumen rancangan memuat enam bagian. Urutannya mengikuti urutan berpikir yang sebenarnya — bukan sekadar daftar untuk dilengkapi.

1. **Judul dan rumusan masalah.** Satu paragraf yang menjelaskan masalah apa yang diselesaikan dan untuk siapa.
2. **Analisis kebutuhan.** Pemisahan masukan, proses, dan keluaran.
3. **Rancangan langkah.** Kerangka penyelesaian dalam bahasa sehari-hari — belum pseudocode.
4. **Pseudocode.** Lengkap dengan blok `DEKLARASI` dan penomoran bagian.
5. **Flowchart.** Diagram alur yang setara dengan pseudocode, memakai simbol standar.
6. **Penelusuran.** Tabel yang membuktikan rancangan bekerja pada minimal dua contoh masukan, termasuk satu kasus batas.

## Langkah pengerjaan

### 1. Pilih masalah

Pilih masalah yang **kecil dan jelas**, bukan yang ambisius. Masalah kecil yang selesai jauh lebih bernilai daripada masalah besar yang setengah jadi. Beberapa contoh yang biasa diangkat:

- Perhitungan nilai akhir mahasiswa dari beberapa komponen penilaian.
- Perhitungan gaji bersih dari gaji pokok, tunjangan, dan potongan.
- Mesin kasir sederhana dengan diskon dan kembalian.
- Konversi satuan atau penentuan kategori dari sebuah nilai.
- Penghitungan tagihan air atau listrik dengan tarif bertingkat.

### 2. Pahami sebelum menulis

Ceritakan ulang masalahnya dengan kata-katamu sendiri. Kalau ada bagian yang belum jelas — misalnya bagaimana diskon ditentukan atau apa yang terjadi bila datanya kosong — tetapkan sendiri aturannya dan tuliskan. Asumsi yang ditulis adalah bagian dari rancangan.

### 3. Rancang struktur kendalinya

Pakai pertanyaan penentu dari pekan 12 untuk memilih antara runtunan, seleksi, dan iterasi pada setiap bagian masalah. Tuliskan alasan pilihanmu — bagian ini sering menjadi nilai tambah.

### 4. Tulis pseudocode

Ikuti konvensi yang sudah dipakai sepanjang semester:

- Penugasan memakai panah `←`.
- Masukan dan keluaran memakai `READ` dan `WRITE`.
- Kata kunci ditulis kapital, nama variabel huruf kecil.
- Setiap variabel dideklarasikan beserta tipenya di blok `DEKLARASI`.

### 5. Gambarkan flowchart

Flowchart yangbaik adalah cerminan langsung pseudocodemu: satu isi per simbol, dan alur ceritanya sama. Kalau ada bagian yang sulit digambar, biasanya bagian itu memang belum jelas rancangannya.

### 6. Telusuri

Susun tabel penelusuran untuk minimal dua masukan, dan pastikan salah satunya adalah **kasus batas** — nilai nol, nilai satu, atau nilai yang tepat di perambatan sebuah syarat. Tunjukkan keadaan setiap variabel pada tiap langkah.

## Kerangka dokumen yang disarankan

```text
1. Judul
2. Rumusan masalah
3. Analisis kebutuhan
   3.1 Masukan
   3.2 Proses
   3.3 Keluaran
4. Rancangan langkah (bahasa sehari-hari)
5. Pseudocode
6. Flowchart
7. Penelusuran
   7.1 Contoh 1 (masukan biasa)
   7.2 Contoh 2 (kasus batas)
8. Kesimpulan dan keterbatasan
```

## Kriteria penilaian

Penilaian menekankan **proses berpikir**, bukan kebenaran semata. Rambu-rambu umum berikut bisa menjadi acuan.

| Aspek | Yang diperhatikan |
| --- | --- |
| Ketepatan masalah | Masalah jelas, batasnya tegas, dan asumsinya dituliskan |
| Analisis kebutuhan | Masukan, proses, dan keluaran terpisah dengan rapi |
| Pemilihan struktur kendali | Pilihan runtunan, seleksi, iterasi beralasan |
| Pseudocode | Sesuai konvensi, lengkap, mudah dibaca |
| Flowchart | Setara pseudocode, simbol dipakai dengan tepat |
| Penelusuran | Ada, benar, dan menyertakan kasus batas |
| Kejelasan | Nama memadai, satu gagasan per instruksi |
| Keterbatasan | Menyebut apa yang belum ditangani dan mengapa |

## Cara memeriksa pekerjaan sendiri

Sebelum dikumpulkan, periksa rancanganmu dengan daftar berikut:

- Apakah setiap variabel yang dipakai muncul di blok `DEKLARASI`?
- Apakah tipenya sesuai dengan nilai yang akan disimpan?
- Apakah setiap struktur `IF` punya `ENDIF`, dan setiap pengulangan punya penanda akhir?
- Apakah pengulangan pasti berhenti?
- Apakah pembagian sudah terhindar dari pembagi bernilai nol?
- Apakah flowchart dan pseudocode menceritakan hal yang sama?
- Apakah kasus batas sudah diuji, bukan hanya contoh yang mudah?

## Kesalahan umum

- **Memilih masalah yang terlalu besar**, sehingga tidak selesai.
- **Menulis pseudocode sebelum masalahnya dipahami**, lalu harus dirombak berkali-kali.
- **Menggambar flowchart yang tidak sesuai pseudocode**, sehingga keduanya saling bertentangan.
- **Tidak menyertakan penelusuran**, sehingga rancangan tidak terbukti bekerja.
- **Hanya menguji contoh yang mudah**, tanpa kasus batas.
- **Asumsi yang dipakai tidak dituliskan**, sehingga pembaca menebak sendiri.
- **Konvensi yang tidak konsisten**, misalnya berganti-ganti antara `←` dan `=`.

## Yang tidak termasuk penilaian

- **Bukan ujian.** Mini project ini tidak menggantikan UAS, dan tidak ada soal ujian yang bocor di dalamnya.
- **Tidak ada kunci jawaban.** Setiap kelompok merancang masalahnya masing-masing, sehingga tidak ada satu jawaban benar untuk semua.
- **Bukan penilaian kecepatan.** Yang penting selesai dan jelas, bukan selesai lebih dulu.

## Selanjutnya

Pekan depan adalah **seminar kelas**: setiap kelompok mempresentasikan rancangannya dan saling memberi umpan balik. Rancangan yang rapi dan penelusurannya lengkap akan lebih mudah dipertahankan dalam diskusi.

## Soal refleksi

1. Menurutmu, mengapa memilih masalah yang kecil lebih baik daripada masalah yang besar untuk latihan ini?
2. Kenapa asumsi yang diambil perlu dituliskan, walaupun terasa jelas?
3. Bagian mana dalam dokumen yang paling sering terlewat, dan mengapa berbahaya?
4. Kalau kamu menemukan bahwa flowchart-mu berbeda dari pseudocode-mu, bagian mana yang biasanya keliru?
5. Sebutkan satu kasus batas yang paling mungkin luput pada masalah yang kamu pilih, dan jelaskan cara mengujinya.
6. Setelah mengerjakan mini project ini, bagian mana dari proses perancangan yang paling menantang bagimu? Kenapa?
