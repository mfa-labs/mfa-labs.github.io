---
title: 'Computational Thinking'
description: 'Empat pilar computational thinking — dekomposisi, pengenalan pola, abstraksi, dan perancangan algoritma — beserta penerapannya pada masalah nyata.'
course: 'algoritma-dan-pemrograman-1'
pubDate: 2026-09-21
tags: ['Computational Thinking', 'Algoritma', 'Fondasi']
draft: false
---

Pekan lalu kita membahas apa itu algoritma dan ciri-cirinya. Sekarang kita mundur satu langkah lagi dan bertanya: bagaimana caranya sampai pada algoritma yang baik? Jawabannya adalah sebuah cara berpikir yang disebut *computational thinking*.

## Apa itu computational thinking

**Computational thinking adalah proses berpikir untuk merumuskan masalah dan solusinya, sehingga solusi itu dapat dijalankan secara efektif oleh pengolah informasi** — baik manusia maupun komputer.

Kalimat itu berasal dari Jeannette Wing, yang mempopulerkan istilah ini lewat artikelnya di *Communications of the ACM* pada 2006.

Ada dua hal yang perlu digarisbawahi dari definisi tersebut.

Pertama, computational thinking adalah **proses berpikir**, bukan kegiatan menulis program. Ia terjadi sebelum satu baris kode pun ditulis, dan sama sekali tidak memerlukan komputer.

Kedua, yang menjadi sasaran adalah **rumusan** masalah sekaligus solusinya. Banyak persoalan terasa sulit bukan karena solusinya belum ditemukan, melainkan karena masalahnya belum dirumuskan dengan cukup jelas. Begitu rumusannya rapi, solusinya sering kali menjadi lebih mudah dilihat.

### Bukan "berpikir seperti komputer"

Ada satu kesalahpahaman yang cukup umum: computational thinking dianggap berarti berpikir seperti komputer — kaku, mekanis, dan meniadakan kreativitas. Kenyataannya justru sebaliknya.

Komputer hanya bisa mengerjakan hal-hal yang sangat sederhana: membandingkan dua nilai, menambah, mengulang, dan memilih di antara dua kemungkinan. Kemampuan manusia yang kreatif justru dibutuhkan untuk menerjemahkan masalah dunia nyata yang berantakan menjadi rangkaian langkah sederhana yang bisa dieksekusi mesin.

Kalau kamu merasa sedang "berpikir seperti komputer", biasanya bukan itu yang terjadi. Yang lebih mungkin kamu lakukan adalah memaksakan cara penyelesaian yang sudah ada tanpa memeriksa apakah cara itu memang cocok dengan masalahnya.

### Hubungannya dengan algoritma

Algoritma adalah **hasil**, sedangkan computational thinking adalah **proses untuk sampai ke hasil itu**. Pekan lalu kita membahas bagaimana bentuk algoritma yang baik; pekan ini kita membahas cara berpikir yang melahirkannya.

## Empat pilar computational thinking

Cara berpikir ini biasanya dijabarkan menjadi empat kegiatan yang saling berkaitan. Urutannya jarang berjalan lurus — sering kali kita kembali ke pilar sebelumnya setelah menemukan hal baru.

### 1. Dekomposisi

**Memecah masalah besar menjadi bagian-bagian kecil yang lebih mudah diselesaikan.**

Ambil contoh "membuat aplikasi absensi perkuliahan". Dirumuskan begitu saja, masalahnya terasa berat. Setelah dipecah, pertanyaannya menjadi jauh lebih konkret:

- Bagaimana kehadiran dicatat?
- Bagaimana datanya disimpan?
- Bagaimana rekap per pertemuan ditampilkan?
- Bagaimana mencegah satu mahasiswa tercatat dua kali?

Masing-masing pertanyaan itu jauh lebih mudah dijawab daripada pertanyaan aslinya.

**Kenapa dekomposisi membantu.** Pertama, bagian kecil bisa dikerjakan satu per satu sehingga perhatian tidak terpecah. Kedua, pekerjaan bisa dibagi ke beberapa orang tanpa saling menunggu. Ketiga, ketika hasilnya salah, kita tahu bagian mana yang perlu diperiksa — jauh lebih cepat daripada menelusuri satu blok besar sekaligus.

**Bagaimana memilih batasnya.** Cara paling praktis: pecah sampai setiap bagian hanya menuntut satu tanggung jawab, lalu berhenti. Kalau satu bagian masih bercabang menjadi beberapa tanggung jawab sekaligus, pecah lagi. Yang perlu dijaga adalah ukurannya — memecah terlalu kasar membuat bagiannya tetap sulit, memecah terlalu halus membuat kita tenggelam dalam detail yang tidak berdampak. Sebagian besar keputusan berpikir ada di menentukan batas pemecahan ini.

### 2. Pengenalan pola

**Mencari kesamaan atau keteraturan yang berulang.**

Beberapa contoh pola yang sering muncul:

- Banyak pekerjaan administrasi sebenarnya berbentuk sama: cari sesuatu, saring yang relevan, urutkan, lalu tampilkan.
- Menghitung nilai akhir untuk setiap komponen penilaian selalu memakai pola yang sama: nilai dikalikan bobot.
- Proses pendaftaran akun di aplikasi apa pun mirip: isi data, verifikasi, simpan, kirim konfirmasi.
- Laporan bulanan dan laporan tahunan sering hanya berbeda pada rentang waktunya, bukan pada strukturnya.

Kalau polanya sudah terlihat, satu solusi bisa dipakai berulang kali. Sebaliknya, kalau polanya terlewat, kita akan menulis ulang solusi yang sama untuk kasus yang sebenarnya identik — pekerjaan bertambah, tetapi hasilnya tidak lebih baik.

**Hati-hati pola yang hanya tampak mirip.** Dua hal bisa terlihat serupa di permukaan, padahal berbeda pada bagian yang menentukan. Dua laporan bulanan yang bentuknya sama belum tentu bisa dihitung dengan rumus yang sama, kalau ternyata komponen di dalamnya berbeda. Sebelum memakai solusi yang sama untuk kasus berikutnya, periksa dulu apakah bagian yang paling menentukan memang benar-benar identik — bukan hanya tampilannya yang mirip.

### 3. Abstraksi

**Membuang detail yang tidak relevan dan menyisakan yang benar-benar penting.**

Beberapa contoh:

- **Peta** membuang hampir seluruh detail dunia nyata — tekstur aspal, warna cat rumah, jenis pohon — dan hanya menyisakan apa yang dibutuhkan untuk berpindah tempat.
- **Jadwal kuliah** tidak mencantumkan dosen pengampu setiap pertemuan; yang penting adalah mata kuliah, hari, jam, dan ruang.
- **Resep** tidak menyebut bahan wajan atau warna kompor; yang menentukan hasil adalah suhu, waktu, dan urutan langkah.
- Saat menghitung nilai akhir, nama mahasiswa dan tanggal pengumpulan tidak relevan. Yang relevan hanya daftar komponen beserta nilai dan bobotnya.

**Abstraksi bekerja berlapis-lapis.** Kemudi mobil menyembunyikan seluruh kerja mesin. Pengemudi cukup tahu bahwa memutar kemudi akan membelokkan roda, tanpa perlu memahami pembakaran bahan bakar. Lapisan seperti ini memungkinkan orang memakai sesuatu yang rumit tanpa harus memahami seluruh isinya sekaligus — dan cara yang sama dipakai ketika kita memakai fungsi bawaan bahasa pemrograman nanti tanpa membaca seluruh isi kodenya.

Konsekuensinya, abstraksi selalu menyembunyikan sesuatu. Bahayanya bukan pada penyembunyian itu, melainkan ketika kita lupa apa yang sedang disembunyikan dan menganggapnya tidak ada.

Abstraksi juga menentukan **representasi**, yaitu bagaimana sesuatu kita wakili. Pilihan representasi sering kali lebih menentukan daripada kelihaian menulis kode: daftar nilai yang tersimpan sebagai tabel akan jauh lebih mudah diolah daripada daftar nilai yang difoto dari papan tulis. Dua orang dengan kemampuan pemrograman setara bisa mendapat tingkat kesulitan yang sangat berbeda hanya karena memilih representasi yang berbeda.

### 4. Perancangan algoritma

**Menyusun langkah penyelesaian berdasarkan hasil tiga kegiatan sebelumnya.** Inilah tahap yang benar-benar menghasilkan algoritma — objek yang kita bahas pekan lalu.

## Satu masalah, empat pilar

Agar keempatnya tidak terasa abstrak, kita jalankan satu contoh utuh: **menghitung nilai akhir sebuah mata kuliah**.

### Dekomposisi

Masalahnya dipecah menjadi empat bagian:

1. Menentukan daftar komponen penilaian.
2. Menghitung kontribusi tiap komponen.
3. Menggabungkan seluruh kontribusi.
4. Menentukan huruf mutu.

### Pengenalan pola

Setiap komponen ternyata dihitung dengan pola yang sama: nilai dikalikan bobotnya. Karena itu kita tidak perlu aturan berbeda untuk setiap komponen — cukup satu aturan yang diulang.

### Abstraksi

Kita tidak peduli pada nama mahasiswa, tanggal pengumpulan, atau jenis tugasnya. Yang relevan hanya dua hal: **nilai** dan **bobot**. Representasi yang cukup adalah daftar pasangan nilai dan bobot.

### Perancangan algoritma

1. Kumpulkan nilai dan bobot setiap komponen.
2. Untuk setiap komponen, kalikan nilai dengan bobotnya.
3. Jumlahkan seluruh hasil perkalian.
4. Bagi hasil penjumlahan dengan total bobot.
5. Bulatkan ke dua angka di belakang koma.
6. Bandingkan hasilnya dengan ambang batas huruf mutu.

Perhatikan langkah 2 sampai 4. Ketiganya memakai pola yang sama berapa pun jumlah komponennya — inilah yang membuat solusinya berlaku untuk tiga komponen maupun tiga puluh komponen.

### Uji dengan angka

Misalkan komponen penilaiannya: tugas berbobot 20%, kuis 20%, UTS 25%, dan UAS 35%. Nilai yang diperoleh: tugas 80, kuis 75, UTS 70, dan UAS 85.

| Komponen | Nilai | Bobot | Kontribusi |
| --- | --- | --- | --- |
| Tugas | 80 | 20% | 16,00 |
| Kuis | 75 | 20% | 15,00 |
| UTS | 70 | 25% | 17,50 |
| UAS | 85 | 35% | 29,75 |
| **Total** | | **100%** | **78,25** |

Nilai akhirnya 78,25. Kalau jumlah komponennya berubah, algoritmanya tidak perlu diubah — hanya daftarnya yang berbeda. Itulah tanda bahwa hasil berpikir kita sudah cukup umum, bukan hanya cocok untuk satu kasus.

### Catatan tentang bobot

Contoh di atas memakai bobot yang jumlahnya tepat 100%. Bagaimana kalau suatu saat bobotnya tidak berjumlah 100% — misalnya karena satu komponen dibatalkan?

Langkah keempat tadi berbunyi "bagi dengan total bobot", bukan "bagi dengan seratus". Perbedaan itu terlihat sepele, tetapi justru itulah yang membuat algoritmanya tetap menghasilkan nilai benar ketika keadaan berubah. Contoh kecil ini memperlihatkan satu hal yang akan sering muncul sepanjang semester: **cara menuliskan sebuah langkah menentukan seberapa luas ia bisa dipakai.**

## Computational thinking tanpa komputer

Karena ia sebuah cara berpikir, manfaatnya jauh melampaui ruang komputer.

- **Merencanakan acara** — dekomposisi menjadi konsumsi, undangan, susunan acara, dan dokumentasi; lalu abstraksi dengan mengabaikan hal yang tidak berdampak pada kelancaran acara.
- **Merapikan arsip kantor** — mengenali pola penamaan berkas yang berulang, lalu menuangkannya menjadi satu aturan penamaan.
- **Menelusuri kesalahan proses kerja** — dekomposisi alur menjadi beberapa tahap, lalu memeriksa satu per satu untuk menemukan di mana masalahnya muncul.
- **Menyusun rencana belajar** — mengubah daftar tugas menjadi urutan pengerjaan dengan mempertimbangkan tenggat dan bobot nilai.

Yang menentukan bukan alat yang dipakai, melainkan kebiasaan merumuskan ulang masalah sebelum mengerjakannya.

## Melatih cara berpikir ini

Empat pilar di atas bukan bakat bawaan, melainkan kebiasaan yang bisa dilatih. Beberapa hal sederhana yang bisa kamu biasakan mulai sekarang:

- **Sebelum mengerjakan sesuatu yang besar, tuliskan dulu bagian-bagiannya.** Lima sampai tujuh poin sudah cukup; tidak perlu rapi.
- **Ketika menemukan cara yang berhasil, tanyakan: masalah seperti apa lagi yang bentuknya sama?** Di situ letak polanya.
- **Ketika menjelaskan sesuatu kepada orang lain, tanyakan: bagian mana yang sebenarnya tidak perlu saya sebutkan?** Itu latihan abstraksi.
- **Ubah satu penjelasan menjadi langkah bernomor.** Kalau ada langkah yang isinya dua pekerjaan sekaligus, pecah menjadi dua langkah.

## Tiga kesalahpahaman umum

**"Computational thinking sama dengan pemrograman."** Tidak. Pemrograman adalah salah satu cara mewujudkan hasilnya. Berpikirnya terjadi lebih dulu, dan bisa dilakukan tanpa komputer sama sekali.

**"Hanya berguna untuk anak informatika."** Kerangka berpikirnya dipakai di banyak bidang, termasuk yang jauh dari komputer.

**"Kalau belum bisa coding, tidak akan bisa."** Kemampuan menyusun langkah justru lebih mendasar daripada kemampuan menulis sintaks. Karena itu kita membahas yang pertama lebih dulu.

## Selanjutnya

Pekan depan kita mulai memakai hasil berpikir ini. Kita akan membahas **pseudocode**: cara menuliskan algoritma dengan bahasa yang mirip bahasa manusia tetapi jauh lebih presisi. Setelah itu **flowchart**, yang menuangkan alur yang sama ke dalam bentuk gambar.

## Soal refleksi

Soal-soal berikut tidak punya jawaban benar atau salah. Tujuannya melatih kebiasaan merumuskan masalah sebelum mengerjakannya.

1. Ambil satu kegiatan kompleks yang pernah kamu ikuti — acara keluarga, lomba, atau tugas kelompok — lalu uraikan menjadi beberapa bagian kecil.
2. Sebutkan dua kegiatan berbeda yang menurutmu sebenarnya punya pola pengerjaan yang sama.
3. Pilih satu benda yang biasa kamu pakai (peta, formulir, kartu), lalu sebutkan detail apa yang sengaja dibuang darinya dan mengapa.
4. Dari empat pilar di atas, mana yang menurutmu paling jarang kamu lakukan selama ini?
5. Kenapa memilih representasi data yang tepat bisa lebih menentukan hasil akhir daripada kelihaian menulis kode?
6. Adakah masalah yang menurutmu terlalu sederhana untuk perlu dipecah? Jelaskan alasannya.
