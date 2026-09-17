---
title: 'Flowchart'
description: 'Menggambarkan algoritma sebagai diagram: simbol standar flowchart, aturan menggambar, penerjemahan dari pseudocode, dan tiga contoh runtunan.'
course: 'algoritma-dan-pemrograman-1'
pubDate: 2026-10-05
tags: ['Flowchart', 'Algoritma', 'Diagram']
draft: false
---

Pekan lalu kita menuangkan algoritma ke dalam bentuk teks. Sekarang kita menuangkan algoritma yang sama ke dalam bentuk gambar. Isinya tidak berubah sama sekali — yang berubah hanya cara menyampaikannya.

## Apa itu flowchart

**Flowchart adalah diagram yang menggambarkan urutan langkah penyelesaian masalah memakai simbol-simbol standar yang dihubungkan oleh garis alir.**

Setiap simbol mewakili satu jenis pekerjaan, dan garis alir menunjukkan urutan pengerjaannya. Karena bentuknya gambar, alur keseluruhan bisa ditangkap sekaligus dengan mata — sesuatu yang sulit dilakukan ketika membaca pseudocode sepanjang dua puluh baris.

Ada beberapa alasan flowchart dipakai berdampingan dengan pseudocode.

**Kesalahan alur lebih cepat terlihat.** Ketika langkah-langkah hanya berupa teks, urutan yang keliru mudah terlewat. Dalam bentuk diagram, garis alir yang menunjuk ke arah yang salah langsung menarik perhatian.

**Bisa dibaca orang yang tidak menguasai notasi teks.** Flowchart dapat dipahami oleh rekan kerja dari bidang lain yang tidak terbiasa membaca pseudocode.

**Memaksa kita menyederhanakan.** Karena menggambar memerlukan ruang, kita terdorong membuang langkah yang tidak perlu dan menyusun alur yang lebih rapi.

## Simbol standar

Flowchart memakai satu set simbol yang sudah disepakati, sehingga diagrammu bisa dibaca orang lain tanpa penjelasan tambahan.

![Lima simbol standar flowchart beserta artinya](/kuliah/algoritma-dan-pemrograman-1/2026-2027-ganjil/img/01-simbol-standar.svg)

- **Terminator** (bentuk kapsul) — menandai awal dan akhir alur. Isinya biasanya "Mulai" dan "Selesai".
- **Proses** (persegi panjang) — satu perhitungan atau pengolahan. Di sinilah penugasan seperti `luas ← panjang × lebar` diletakkan.
- **Masukan/Keluaran** (jajar genjang) — membaca data atau menampilkan hasil. `READ` dan `WRITE` memakai simbol ini.
- **Keputusan** (belah ketupat) — titik percabangan dengan dua kemungkinan hasil. Simbol ini baru kita pakai mulai pekan 9, saat membahas seleksi.
- **Garis alir** (tanda panah) — menghubungkan satu simbol ke simbol berikutnya dan menunjukkan arah urutannya.

Selain lima simbol di atas, notasi standar juga mengenal **penghubung** (lingkaran kecil) yang dipakai ketika alurnya harus dipotong karena berpindah halaman, atau untuk menghindari garis yang bersilangan. Semester ini kita tidak akan memakainya karena alur kita masih pendek, tetapi kamu perlu tahu bahwa simbol itu ada agar tidak bingung ketika suatu saat membaca diagram orang lain.

Satu catatan penting: **warna tidak memiliki makna apa pun dalam notasi standar.** Yang menentukan arti sebuah simbol adalah bentuknya, bukan warnanya. Warna pada gambar di atas hanya membantu mata membedakan, dan diagram hitam-putih tetap sah sepenuhnya.

## Aturan menggambar

- **Arah alur mengikuti kebiasaan membaca**: dari atas ke bawah, lalu dari kiri ke kanan. Konsistensi arah membuat diagram jauh lebih mudah diikuti.
- **Satu awal, satu akhir.** Setiap flowchart dimulai dari satu terminator "Mulai" dan berakhir di terminator "Selesai".
- **Setiap simbol harus berisi label.** Simbol kosong tidak memberi informasi apa pun dan hanya membuat pembaca menebak.
- **Garis alir harus punya arah yang jelas.** Tanda panah tidak boleh dihilangkan, terutama ketika alurnya berbelok.
- **Hindari garis yang bersilangan.** Kalau alurnya mulai rumit, susun ulang tata letaknya.
- **Satu simbol mewakili satu pekerjaan.** Menumpuk dua pekerjaan dalam satu kotak adalah kesalahan yang paling sering muncul.

Aturan-aturan itu terdengar kaku, tetapi alasannya praktis. Diagram dibuat untuk dibaca orang lain — sering kali orang yang tidak sempat bertanya langsung kepadamu. Diagram yang mengikuti kebiasaan umum bisa dipahami dalam hitungan detik; diagram yang tidak, menuntut penjelasan lisan. Dan begitu penjelasan lisan dibutuhkan, gunanya membuat diagram sudah hilang.

## Menerjemahkan pseudocode menjadi flowchart

Kalau kamu sudah punya pseudocode yang benar, mengubahnya menjadi flowchart adalah pekerjaan mekanis — tidak ada keputusan baru yang perlu diambil.

| Pseudocode | Simbol flowchart |
| --- | --- |
| `BEGIN` dan `END` | Terminator **Mulai** dan **Selesai** |
| `READ panjang, lebar` | Jajar genjang **masukan** |
| `WRITE luas` | Jajar genjang **keluaran** |
| `luas ← panjang × lebar` | Persegi panjang **proses** |

Karena satu baris pseudocode berubah menjadi tepat satu simbol, jumlah simbolnya akan sama dengan jumlah baris di dalam `BEGIN … END`, ditambah dua terminator. Kalau jumlahnya tidak cocok, biasanya ada langkah yang terlewat atau tergabung.

## Contoh

### 1. Luas persegi panjang

```pseudocode
BEGIN
  READ panjang, lebar
  luas ← panjang × lebar
  WRITE luas
END
```

![Flowchart menghitung luas persegi panjang](/kuliah/algoritma-dan-pemrograman-1/2026-2027-ganjil/img/02-luas-persegi-panjang.svg)

Perhatikan bahwa alurnya lurus dari atas ke bawah. Inilah bentuk yang paling sederhana: setiap simbol hanya punya satu jalan masuk dan satu jalan keluar.

### 2. Rata-rata tiga nilai

```pseudocode
BEGIN
  READ nilai1, nilai2, nilai3
  total ← nilai1 + nilai2 + nilai3
  rata_rata ← total ÷ 3
  WRITE rata_rata
END
```

![Flowchart menghitung rata-rata tiga nilai](/kuliah/algoritma-dan-pemrograman-1/2026-2027-ganjil/img/03-rata-rata-tiga-nilai.svg)

Di sini muncul dua persegi panjang berurutan, karena ada dua perhitungan yang dikerjakan secara berurutan. Diagramnya memperlihatkan dengan jelas bahwa `total` harus dihitung lebih dulu sebelum `rata_rata` — sesuatu yang kadang terlewat ketika hanya membaca teks.

### 3. Menukar isi dua variabel

```pseudocode
BEGIN
  READ a, b
  sementara ← a
  a ← b
  b ← sementara
  WRITE a, b
END
```

![Flowchart menukar isi dua variabel](/kuliah/algoritma-dan-pemrograman-1/2026-2027-ganjil/img/04-menukar-dua-nilai.svg)

Contoh ini paling menampakkan keunggulan flowchart. Tiga persegi panjang yang berurutan itu memperlihatkan bahwa urutannya tidak bisa ditukar: `sementara ← a` harus terjadi sebelum `a ← b`, karena setelah baris kedua nilai asli `a` sudah hilang. Alur yang runtut membuat ketergantungan itu terlihat sekaligus.

## Membaca dan menelusuri flowchart

Membaca flowchart hampir sama dengan menelusuri pseudocode pekan lalu: mulai dari terminator **Mulai**, ikuti garis alirnya satu per satu, dan catat isi variabel setiap kali berubah.

Ambil contoh rata-rata tiga nilai dengan masukan 80, 90, dan 70.

| Simbol | Isi variabel | total | rata_rata |
| --- | --- | --- | --- |
| Baca nilai1, nilai2, nilai3 | 80, 90, 70 | — | — |
| total ← nilai1 + nilai2 + nilai3 | | 240 | — |
| rata_rata ← total ÷ 3 | | 240 | 80 |
| Tulis rata_rata | 80 | 240 | 80 |

Karena alurnya masih lurus, tabel seperti ini terasa berlebihan — dan memang begitu untuk contoh sederhana. Gunanya baru terasa ketika alurnya mulai bercabang, karena saat itu kita perlu memastikan cabang mana yang benar-benar dilewati. Membiasakannya sekarang membuat pekerjaan itu tidak terasa berat nanti.

## Flowchart atau pseudocode?

Keduanya menggambarkan algoritma yang sama, jadi pertanyaannya bukan mana yang lebih baik, melainkan kapan masing-masing lebih tepat.

| | Pseudocode | Flowchart |
| --- | --- | --- |
| Menulis | Lebih cepat | Lebih lambat |
| Merevisi | Mudah | Perlu menata ulang tata letak |
| Melihat alur keseluruhan | Perlu membaca baris demi baris | Terlihat sekaligus |
| Dibaca orang non-teknis | Sulit | Mudah |
| Alur bercabang dan berulang | Mulai sulit dibayangkan | Jauh lebih jelas |

Aturan praktis yang bisa kamu pakai: **pseudocode untuk merinci langkah, flowchart untuk memeriksa alur.** Kalau algoritmanya masih lurus seperti pekan ini, keduanya sama mudahnya. Nanti ketika alurnya mulai bercabang dan berulang, keunggulan flowchart akan terasa jauh lebih besar — itulah sebabnya kita mempelajarinya sekarang, sebelum keduanya muncul.

## Kesalahan umum

- **Memakai bentuk yang salah.** Perhitungan diletakkan di jajar genjang, atau masukan diletakkan di persegi panjang. Bentuk adalah satu-satunya penanda arti, jadi kekeliruan di sini mengubah makna diagramnya.
- **Simbol tanpa label.** Pembaca tidak punya cara menebak isinya.
- **Tanpa tanda panah.** Diagram menjadi ambigu ketika alurnya berbelok.
- **Dua pekerjaan dalam satu simbol.** Pisahkan menjadi dua simbol berurutan.
- **Tata letak terlalu rapat.** Sukar dibaca, terutama ketika diproyeksikan di kelas.
- **Mencampur pseudocode ke dalam gambar.** Menuliskan `END` atau kurung kurawal di dalam kotak berarti diagramnya sudah bercampur dengan notasi lain.

## Selanjutnya

Pekan depan kita masuk ke **konsep data**: apa saja jenis nilai yang bisa disimpan dalam sebuah variabel, dan bagaimana jenis itu memengaruhi cara pengolahannya. Setelah itu **operator dan ekspresi**, lalu sebuah **studi kasus perhitungan nilai mahasiswa** yang menggabungkan seluruh materi pekan 1 sampai 7 sebelum UTS.

## Soal refleksi

1. Gambarkan flowchart untuk menghitung keliling persegi panjang dari masukan panjang dan lebar.
2. Ubah pseudocode yang kamu tulis pada soal refleksi pekan lalu menjadi flowchart.
3. Pada flowchart menukar dua nilai, gambarkan versi yang salah — yaitu versi yang menghapus simbol `sementara ← a` — lalu jelaskan di bagian mana alurnya menjadi tidak masuk akal.
4. Menurutmu, kenapa simbol keputusan digambarkan sebagai belah ketupat dan bukan persegi panjang? Apa yang akan membingungkan kalau bentuknya sama dengan simbol proses?
5. Kalau kamu harus menjelaskan algoritma kepada orang yang tidak kuliah informatika, bentuk mana yang kamu pilih: pseudocode atau flowchart? Jelaskan alasannya.
6. Sebutkan satu pekerjaan sehari-hari yang menurutmu lebih mudah dijelaskan dengan diagram alur daripada dengan daftar langkah tertulis.
