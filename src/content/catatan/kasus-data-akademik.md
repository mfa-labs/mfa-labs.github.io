---
title: 'Kasus Data Akademik'
description: 'Merekap nilai satu kelas dengan akumulator: rata-rata, nilai tertinggi dan terendah, banyak yang lulus, dan sebaran nilai huruf — semuanya tanpa struktur data.'
course: 'algoritma-dan-pemrograman-1'
pubDate: 2026-12-07
tags: ['Studi Kasus', 'Akumulator', 'Seleksi']
draft: false
---

Kasus pekan ini adalah pekerjaan seorang dosen setiap akhir semester: **merekap nilai satu kelas**. Dari satu daftar nilai, kita ingin tahu rata-ratanya, nilai tertinggi dan terendahnya, berapa mahasiswa yang lulus, dan bagaimana sebaran nilai hurufnya.

Sekilas ini beberapa pekerjaan sekaligus. Tetapi keindahannya justru di situ: semuanya bisa dihitung dalam **satu kali pembacaan data**.

## Kasusnya

Sebuah kelas berisi sejumlah mahasiswa. Setiap mahasiswa punya satu nilai akhir berupa bilangan bulat 0 sampai 100. Kita tidak menyimpan nilai-nilainya — kita hanya membacanya satu per satu, lalu langsung mengolahnya.

Ini keterbatasan yang disengaja. Karena kita belum mengenal struktur data, nilai tidak bisa disimpan untuk dibaca ulang. Jadi setiap pertanyaan harus **dijawab sambil data mengalir**, bukan setelah semua data terkumpul.

## Membaca aliran data

Bayangkan nilai-nilai itu mengalir satu per satu di depan kita seperti barang di ban berjalan. Pada setiap nilai yang lewat, kita hanya bisa melakukan tiga hal:

- **Menambahkannya ke sebuah akumulator** — misalnya total.
- **Membandingkannya dengan nilai yang sudah kita pegang** — untuk mencari tertinggi atau terendah.
- **Memeriksa syaratnya**, lalu menambah satu ke pencacah yang sesuai.

Yang penting, wadah yang kita pegang selalu sedikit dan tetap jumlahnya. Untuk setiap pertanyaan rekap, kita hanya perlu satu atau dua variabel.

## Empat pertanyaan, empat wadah

| Pertanyaan | Wadah yang dipakai | Pola |
| --- | --- | --- |
| Berapa rata-ratanya? | `total` dan `n` | akumulator penjumlahan |
| Berapa nilai tertinggi? | `tertinggi` | nilai terbesar sementara |
| Berapa nilai terendah? | `terendah` | nilai terkecil sementara |
| Berapa yang lulus? | `lulus` | pencacah kejadian |

Sebaran nilai huruf memakai empat pencacah tambahan, satu untuk setiap huruf.

## Nilai tertinggi dan terendah sementara

Ini teknik baru pekan ini. Untuk mencari nilai terbesar, kita tidak perlu menyimpan semua nilai — cukup menyimpan **yang terbesar sejauh ini**.

Caranya: pegang sebuah variabel `tertinggi`. Setiap nilai baru dibandingkan dengannya. Kalau nilai baru lebih besar, `tertinggi` diganti; kalau tidak, dibiarkan.

```pseudocode
IF nilai > tertinggi THEN
  tertinggi ← nilai
ENDIF
```

Masalah kecil muncul di awal: **nilai awal `tertinggi` diisi apa?** Kalau diisi 0, dan seluruh nilai ternyata negatif, hasilnya salah. Untuk data nilai yang berkisar 0 sampai 100, mengisi 0 sebenarnya aman — tetapi kebiasaan itu rapuh.

Cara yang lebih baik: **ambil nilai pertama sebagai titik awal**. Pada putaran pertama, `tertinggi` dan `terendah` langsung diisi oleh nilai pertama. Setelah itu, nilai-nilainya saling dibandingkan.

```pseudocode
IF i = 1 THEN
  tertinggi ← nilai
  terendah ← nilai
ENDIF
```

Dengan begitu, titik awalnya selalu berasal dari data yang nyata, bukan dari angka yang kita karang.

## Pseudocode lengkap

```pseudocode
DEKLARASI
  n, i : integer
  nilai : integer
  total : integer
  tertinggi, terendah : integer
  lulus : integer
  cacah_A, cacah_B, cacah_C, cacah_D : integer
  rata_rata : real

BEGIN
  READ n

  total ← 0
  lulus ← 0
  cacah_A ← 0
  cacah_B ← 0
  cacah_C ← 0
  cacah_D ← 0
  tertinggi ← 0
  terendah ← 0

  IF n > 0 THEN
    FOR i ← 1 TO n DO
      READ nilai

      total ← total + nilai

      IF i = 1 THEN
        tertinggi ← nilai
        terendah ← nilai
      ENDIF

      IF nilai > tertinggi THEN
        tertinggi ← nilai
      ENDIF

      IF nilai < terendah THEN
        terendah ← nilai
      ENDIF

      IF nilai ≥ 60 THEN
        lulus ← lulus + 1
      ENDIF

      IF nilai ≥ 85 THEN
        cacah_A ← cacah_A + 1
      ELSE IF nilai ≥ 70 THEN
        cacah_B ← cacah_B + 1
      ELSE IF nilai ≥ 60 THEN
        cacah_C ← cacah_C + 1
      ELSE
        cacah_D ← cacah_D + 1
      ENDIF
    ENDFOR

    rata_rata ← total ÷ n
    WRITE rata_rata, tertinggi, terendah, lulus
    WRITE cacah_A, cacah_B, cacah_C, cacah_D
  ELSE
    WRITE "tidak ada data"
  ENDIF
END
```

### Yang perlu diperhatikan

**Semua wadah disiapkan di luar pengulangan.** Delapan variabel akumulator dan pencacah diberikan nilai awal sebelum `FOR` dimulai. Kalau salah satu dipindahkan ke dalam, ia akan direset setiap putaran.

**Satu `READ` melayani banyak perhitungan.** Perhatikan bahwa nilai yang sama ternyata dipakai empat kali: ditambahkan ke `total`, dibandingkan dengan `tertinggi`, dibandingkan dengan `terendah`, dan diperiksa untuk pencacah. Satu pembacaan data bisa mengisi banyak wadah sekaligus — inilah sebabnya semuanya bisa dihitung dalam satu kali lewat.

**Pemeriksaan `i = 1` membedakan putaran pertama.** Ia hanya bertindak sekali, untuk memberi titik awal `tertinggi` dan `terendah`.

**Pemeriksaan `n > 0` menjaga pembagian.** Kalau kelasnya kosong, `total ÷ n` tidak terdefinisi. Karena itu seluruh perhitungan hanya dilakukan bila ada data.

**Pencacahan lulus dipisah dari pencacahan huruf.** Keduanya sebenarnya bisa digabung, tetapi memisahkannya membuat tiap bagian lebih mudah diperiksa.

## Menelusuri dengan lima nilai

Anggap nilainya berturut-turut: 90, 55, 72, 88, dan 60.

| Putaran | `nilai` | `total` | `tertinggi` | `terendah` | `lulus` | A | B | C | D |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 90 | 90 | 90 | 90 | 1 | 1 | 0 | 0 | 0 |
| 2 | 55 | 145 | 90 | 55 | 1 | 1 | 0 | 0 | 1 |
| 3 | 72 | 217 | 90 | 55 | 2 | 1 | 1 | 0 | 1 |
| 4 | 88 | 305 | 90 | 55 | 3 | 2 | 1 | 0 | 1 |
| 5 | 60 | 365 | 90 | 55 | 4 | 2 | 1 | 1 | 1 |

Hasil akhirnya: rata-rata `365 ÷ 5 = 73`, tertinggi 90, terendah 55, dan 4 dari 5 mahasiswa lulus.

Perhatikan bagaimana tabel ini sekaligus **memeriksa kebenaran** hasilnya. Jumlah seluruh pencacah (`2 + 1 + 1 + 1`) sama dengan `n`, yaitu 5 — tidak ada nilai yang luput atau terhitung dua kali. Dan banyak yang lulus (`4`) sama dengan jumlah pencacah huruf A, B, dan C. Pemeriksaan semacam ini disebut pemeriksaan silang, dan sangat berguna untuk memastikan tidak ada yang terlewat.

## Kesalahan umum

- **Memberi nilai awal `tertinggi` dengan angka yang salah.** Mengisi 0 aman untuk nilai ujian, tetapi salah untuk data yang bisa negatif. Ambil titik awal dari data nyata.
- **Menaruh akumulator di dalam pengulangan.** Setiap wadah harus dimulai sebelum `FOR`.
- **Lupa pemeriksaan `n > 0`.** Kelas kosong berujung pembagian dengan nol.
- **Membalik urutan cabang nilai huruf.** Nilai 90 akan salah menjadi `'C'`.
- **Memakai `>` padahal `≥`.** Nilai tepat 60 bisa salah dianggap tidak lulus.
- **Menghitung rata-rata sebelum pengulangan selesai**, sehingga `total` belum lengkap.
- **Menambah pencacah di luar pemeriksaan syarat** sehingga setiap nilai dihitung ke semua kategori.

## Selanjutnya

Pekan depan kita memakai seluruh kemampuan ini untuk **mini project desain algoritma**: merancang satu algoritma lengkap dari nol — dari narasi masalah sampai pseudocode, flowchart, dan dokumentasi yang bisa diperiksa orang lain.

## Soal refleksi

1. Kenapa untuk mencari nilai tertinggi kita tidak perlu menyimpan seluruh nilai, melainkan cukup satu variabel sementara?
2. Apa akibatnya kalau `tertinggi` dan `terendah` diberi nilai awal 0, lalu semua nilai yang dibaca bertanda negatif? Jelaskan.
3. Pada penelusuran di atas, periksa silang: apakah jumlah semua pencacah huruf sama dengan banyak data? Apa artinya kalau tidak sama?
4. Tambahkan perhitungan rata-rata nilai bagi mahasiswa yang lulus saja. Wadah baru apa yang diperlukan?
5. Ubah ambang kelulusan menjadi 65. Bagian mana saja yang perlu diubah?
6. Rancang cara menghitung banyak nilai yang berada di atas rata-rata kelas. Kesulitan apa yang muncul, dan kenapa?
