---
title: 'Pengenalan Algoritma dan Pemrograman'
description: 'Pengertian algoritma dan pemrograman, ciri-ciri algoritma yang baik, contohnya di kehidupan sehari-hari, dan bekal yang perlu disiapkan sebelum mempelajarinya.'
course: 'algoritma-dan-pemrograman-1'
pubDate: 2026-09-14
tags: ['Algoritma', 'Pemrograman', 'Fondasi']
draft: false
---

Mata kuliah ini bukan tentang menghafal bahasa pemrograman. Yang kita latih adalah kemampuan menyusun langkah penyelesaian masalah secara runtut dan presisi — kemampuan yang akan kamu pakai di hampir semua mata kuliah berikutnya, dan jauh setelah lulus.

Untuk pertemuan pertama, kita mundur selangkah dulu: memahami apa sebenarnya dua kata yang ada di judul mata kuliah ini, dan mengapa keduanya diperlakukan sebagai fondasi, bukan pelengkap.

## Apa itu algoritma

**Algoritma adalah urutan langkah yang jelas dan terbatas untuk menyelesaikan sebuah masalah.**

Kata "algoritma" berasal dari nama Al-Khwarizmi, matematikawan abad ke-9 yang karyanya memperkenalkan prosedur sistematis untuk berhitung. Gagasannya jauh lebih tua daripada komputer — komputer hanya membuat algoritma menjadi jauh lebih cepat dan jauh lebih presisi.

Perhatikan bahwa definisi di atas tidak menyebut komputer sama sekali. Algoritma tidak lahir dari mesin; ia lahir dari kebutuhan manusia untuk menjelaskan cara menyelesaikan sesuatu kepada orang lain. Komputer hanyalah pelaksana yang paling patuh — dan justru karena kepatuhannya itu, komputer juga pelaksana yang paling tidak bisa menoleransi langkah yang kabur.

### Ciri-ciri algoritma

Tidak semua urutan langkah bisa disebut algoritma. Sebuah algoritma harus memenuhi lima ciri berikut.

**1. Jelas dan tidak ambigu.** Setiap langkah hanya punya satu tafsir. Kalau dua orang membaca langkah yang sama lalu mengerjakannya dengan cara berbeda, berarti langkah itu belum cukup jelas.

**2. Punya masukan dan keluaran.** Ada data yang diproses, dan ada hasil yang diperoleh. Resep menerima bahan dan menghasilkan hidangan; prosedur ATM menerima kartu dan nominal, lalu menghasilkan uang tunai.

**3. Terbatas.** Jumlah langkahnya berhingga dan pasti berhenti. Prosedur yang meminta kita mengulang sesuatu "terus-menerus sampai dirasa sudah cukup" bukan algoritma, karena tidak ada titik henti yang bisa dipastikan.

**4. Efektif.** Setiap langkah harus benar-benar bisa dikerjakan. Langkah "bayangkan solusinya lalu tuliskan" tidak bisa dieksekusi, sekalipun terdengar masuk akal.

**5. Umum.** Berlaku untuk semua kasus sejenis, bukan hanya untuk satu kasus tertentu. Algoritma menghitung rata-rata nilai harus bekerja untuk tiga nilai maupun tiga ratus nilai; kalau hanya bekerja untuk tiga nilai, itu bukan algoritma melainkan contoh perhitungan.

### Contoh di kehidupan sehari-hari

Algoritma ada di sekitar kita sejak lama, dan sebagian besar begitu melekat sehingga kita tidak lagi menyadarinya.

- **Resep masakan.** Bahan adalah masukan, hidangan adalah keluaran, dan setiap langkah menentukan hasil. Mengganti urutan menumis dan merebus bawang akan menghasilkan rasa yang berbeda — urutan itu bagian dari algoritmanya, bukan sekadar daftar.
- **Prosedur menarik uang di ATM.** Masukkan kartu, masukkan PIN, pilih nominal, ambil uang, ambil kartu. Menukar urutan mengambil uang dan mengambil kartu adalah kesalahan yang mahal.
- **Mencari buku di perpustakaan.** Pergi ke rak sesuai kategori, telusuri berdasarkan abjad penulis, ambil buku. Membandingkan cara ini dengan menyisir seluruh rak dari ujung ke ujung memperlihatkan hal yang penting: dua algoritma bisa menghasilkan keluaran yang sama, tetapi biaya usahanya sangat berbeda.
- **Rute perjalanan ke kampus.** Pilih jalur, perhatikan rambu, antisipasi jam ramai. Contoh ini juga memperlihatkan bahwa algoritma seringkali perlu mengambil keputusan di tengah jalan — "jika jalur utama macet, maka belok kiri" — bukan sekadar mengikuti daftar tetap.
- **Mengurutkan kartu remi di tangan.** Ambil kartu baru, bandingkan dengan kartu yang sudah tergenggam, sisipkan pada posisi yang tepat, ulangi sampai semua kartu habis. Ini adalah algoritma pengurutan; versi formalnya akan kamu temui saat membahas struktur data.
- **Mencuci tangan sesuai anjuran kesehatan.** Basahi, sabun, gosok punggung tangan dan sela jari, bilas, keringkan. Cukup sederhana, tetapi urutannya jelas dan hasilnya terukur.

Dari contoh-contoh itu, coba perhatikan dua hal. Pertama, sebuah algoritma biasanya menerima sesuatu, mengolahnya, lalu mengembalikan sesuatu. Kedua, **nama-nama langkahnya tidak penting; yang penting adalah isi langkahnya cukup spesifik untuk dijalankan tanpa menebak.**

### Ketika bahasa manusia tidak cukup

Bandingkan dua instruksi berikut:

> "Goreng telur sampai matang."

> "Panaskan minyak pada wajan dengan api sedang selama 2 menit. Pecahkan telur ke wajan. Masak selama 3 menit. Angkat."

Instruksi pertama terasa jelas bagi manusia, tetapi kata "matang" tidak bisa diperiksa secara pasti. Bagi satu orang matang berarti dua menit, bagi yang lain lima menit, bagi yang ketiga menunggu bagian putihnya padat. Selama ukurannya bisa berbeda antar pelaksana, langkah itu belum bisa disebut sebagai langkah algoritmik.

Kesulitan yang sama muncul di banyak instruksi sehari-hari: "aduk hingga rata", "tambahkan garam secukupnya", "potong kecil-kecil", "tunggu sampai selesai". Semuanya masuk akal bagi manusia karena kita menebak berdasarkan pengalaman. Komputer tidak punya pengalaman untuk ditebak.

**Inilah alasan utama algoritma penting dalam informatika: komputer mengerjakan persis apa yang kamu tuliskan, bukan apa yang kamu maksudkan.**

## Apa itu pemrograman

**Pemrograman adalah kegiatan menuliskan algoritma dalam bahasa yang dapat dijalankan oleh komputer, lalu memastikan hasilnya benar.**

Algoritma adalah idenya, program adalah wujudnya. Bahasa pemrograman berperan sebagai alat komunikasi antara manusia dan mesin. Satu algoritma yang sama bisa dituliskan dalam bahasa yang berbeda — sama seperti satu resep bisa dimasak di dapur mana pun, dengan hasil yang setara selama langkahnya diikuti.

Perlu ditegaskan bahwa kata "memastikan hasilnya benar" bukan pelengkap. Menulis kode hanyalah sebagian dari pekerjaan; sebagian besar waktunya justru dihabiskan untuk menguji, menemukan yang salah, lalu memperbaiki.

### Contoh penerapan

Banyak hal yang kita pakai setiap hari pada dasarnya adalah algoritma yang telah dituliskan menjadi program.

- **Aplikasi kasir** menghitung total belanja, menerapkan diskon bila syaratnya terpenuhi, menghitung pajak, lalu mencetak struk. Di baliknya ada urutan keputusan yang jelas: jika total melewati ambang tertentu, maka diskon berlaku.
- **Aplikasi pengingat jadwal** membandingkan waktu sekarang dengan daftar agenda, lalu memunculkan notifikasi bila selisihnya sudah mencapai batas tertentu.
- **Aplikasi peta** mencari rute dengan total jarak atau waktu terkecil dari posisimu ke tujuan, dengan mempertimbangkan kondisi lalu lintas. Ini contoh algoritma yang hasilnya terus diperbarui, bukan dihitung sekali lalu selesai.
- **Mesin pencari** mengurutkan halaman berdasarkan tingkat relevansi terhadap kata kuncimu, dan mengurutkannya dari yang paling relevan.
- **Papan ketik ponsel** memperkirakan kata berikutnya dari pola kalimat yang biasa kamu tulis.

Kalau kamu perhatikan, semuanya memiliki bentuk yang sama: menerima masukan, mengolahnya melalui sejumlah langkah dan keputusan, lalu menghasilkan keluaran yang bisa diperiksa.

### Tiga hal yang sering disalahpahami

**Pemrograman bukan sekadar coding.** Menulis kode hanyalah tahap akhir dari rangkaian yang lebih panjang. Sebelum ada satu baris kode, ada pekerjaan memahami masalah, menentukan masukan dan keluaran, memilih langkah, dan menguji idenya di atas kertas. Kode yang ditulis tanpa tahap itu biasanya harus ditulis ulang dari awal.

**Pemrograman bukan menghafal sintaks.** Sintaks adalah aturan penulisan bahasa, dan aturan itu bisa dicari di dokumentasi kapan saja. Yang tidak bisa dicari adalah kemampuan menyusun solusi. Karena itu di mata kuliah ini kita akan lebih banyak membahas cara berpikirnya daripada aturan penulisannya.

**Pemrograman bukan pekerjaan menyendiri.** Program yang baik lahir dari pembacaan ulang, diskusi, dan perbaikan berulang. Kemampuan menjelaskan idemu kepada orang lain adalah bagian dari keterampilan ini, bukan hal di luar itu.

## Pentingnya bagi mahasiswa Informatika

Algoritma dan pemrograman bukan mata kuliah "pemanasan" yang bisa dilewati begitu saja. Ia berfungsi sebagai fondasi untuk tiga hal sekaligus.

### Menjadi dasar mata kuliah lanjutan

Struktur data, basis data, pemrograman web dan mobile, jaringan, hingga kecerdasan buatan semuanya berangkat dari asumsi bahwa kamu sudah bisa menyusun langkah penyelesaian masalah dengan rapi. Ketika nanti kamu belajar mengurutkan data dalam jumlah besar, pertanyaan yang dibahas bukan lagi "bagaimana menulis kodenya", melainkan "langkah mana yang paling masuk akal untuk kasus ini". Pertanyaan seperti itu hanya bisa dijawab kalau fondasinya sudah kuat.

### Melatih cara berpikir yang bisa dipindahkan

Kemampuan memecah masalah besar menjadi bagian kecil, mengenali pola yang berulang, membuang detail yang tidak perlu, dan menuliskan langkah secara presisi tidak hanya berguna untuk menulis program. Kemampuan yang sama dipakai saat merancang alur kerja sistem, menguji perangkat lunak, menelusuri sumber kesalahan, mengelola data, maupun memimpin proyek. Inilah yang membuat mata kuliah ini berguna bahkan bagi yang tidak berniat menjadi programmer.

### Menjadi pembeda dalam bekerja

Banyak orang bisa memakai perangkat lunak. Yang jauh lebih sedikit jumlahnya adalah orang yang bisa menjelaskan **mengapa** sebuah proses berjalan salah, dan langkah apa yang perlu diubah untuk memperbaikinya. Kemampuan itu lahir dari kebiasaan membaca proses secara runtut — kebiasaan yang dilatih di mata kuliah ini.

Di dunia nyata, kesalahan yang paling mahal sering bukan berasal dari kode yang rumit, melainkan dari urutan langkah yang tidak dipikirkan matang-matang. Perbedaan antara memeriksa jumlah barang sebelum atau sesudah pembayaran terdengar sepele, tetapi pada sistem yang melayani ribuan transaksi, kesalahan urutan sekecil itu bisa berdampak besar.

## Bekal sebelum mempelajari algoritma dan pemrograman

Kabar baiknya: kamu **tidak perlu** sudah bisa coding untuk memulai mata kuliah ini. Yang benar-benar membantu adalah hal-hal berikut.

- **Logika dasar.** Memahami hubungan "dan", "atau", "tidak", serta pola "jika … maka … selain itu …". Ini akan langsung terpakai saat kita membahas seleksi beberapa pekan lagi.
- **Aritmetika dan sedikit aljabar.** Operasi bilangan, perbandingan, serta kenyamanan bekerja dengan variabel dan persamaan sederhana.
- **Ketelitian membaca.** Karena komputer mengerjakan apa yang tertulis, satu langkah yang terlewat akan mengubah hasil. Membaca ulang pekerjaan sendiri adalah keterampilan inti, bukan pemborosan waktu.
- **Kebiasaan memecah masalah.** Coba biasakan memandang persoalan besar sebagai gabungan persoalan kecil yang lebih mudah diselesaikan satu per satu.
- **Kemampuan mencari dan membaca dokumentasi.** Sebagian besar dokumentasi teknis berbahasa Inggris, jadi kemampuan membaca bahasa Inggris teknis akan sangat membantu meski tidak wajib di awal.

Yang paling menentukan justru bukan kemampuan awal, melainkan **kesediaan untuk salah lalu memperbaiki**. Hampir semua program tidak langsung berjalan benar pada percobaan pertama. Kemampuan menelusuri penyebab kesalahan tanpa panik — dan tanpa langsung menyalahkan komputer — adalah kebiasaan yang akan kamu latih sepanjang semester.

Perlu juga diluruskan satu kekhawatiran yang sering muncul di pertemuan pertama: merasa "tidak berbakat" karena belum paham di awal bukan pertanda apa pun. Yang membedakan mahasiswa yang berkembang pesat dan yang tertinggal biasanya bukan bakat, melainkan kemauan mencoba ulang.

## Selanjutnya

Pada pertemuan berikutnya kita akan membahas **computational thinking**, yaitu kerangka berpikir yang menjadi dasar seluruh mata kuliah ini. Setelah itu kita masuk ke **pseudocode** dan **flowchart** sebagai dua cara menuangkan algoritma sebelum diterjemahkan menjadi program. Cuplikan kode baru akan muncul setelah fondasi berpikirnya terbentuk.

## Soal refleksi

Soal-soal berikut tidak punya jawaban benar atau salah. Tujuannya melatih kebiasaan mengamati proses, bukan menguji hafalan.

1. Sebutkan tiga aktivitas rutinmu hari ini, lalu uraikan langkah-langkahnya secara berurutan.
2. Ambil satu instruksi sehari-hari yang menurutmu ambigu, kemudian tulis ulang agar setiap langkahnya bisa diperiksa secara pasti.
3. Menurutmu, apa bedanya "tahu cara memakai aplikasi" dengan "tahu cara aplikasi itu bekerja"?
4. Kalau kamu harus mengajari seorang anak menyikat gigi, langkah mana yang paling mungkin terlewat, dan mengapa?
5. Dari lima ciri algoritma yang dibahas, ciri mana yang menurutmu paling sulit dipenuhi saat menjelaskan sesuatu kepada orang lain?
6. Sebutkan satu kebiasaan belajarmu yang menurutmu perlu diubah untuk mengikuti mata kuliah ini.
