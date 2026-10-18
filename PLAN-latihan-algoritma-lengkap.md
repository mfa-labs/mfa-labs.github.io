# PLAN — Lengkapi Latihan Interaktif Algoritma dan Pemrograman I

Status: menunggu persetujuan
Cakupan: seluruh materi kuliah (pekan 1–14), verifikasi soal, dan rendering flowchart.

## Tujuan

1. **Lengkapi** kuis latihan agar mencakup seluruh materi Algoritma dan Pemrograman I — bukan lagi 1 unit / 3 pelajaran (POC).
2. **Verifikasi** bahwa seluruh soal benar dan tepat (akurat terhadap catatan pekan terkait, dan integritas data valid).
3. **Pastikan flowchart** (diagram) terender dengan baik di halaman latihan.

## Cakupan Materi

Pekan 1–7 dan 9–14 adalah materi. Pekan 8 (UTS), 15 (seminar), dan 16 (UAS) dikecualikan karena bukan materi baru.

Struktur baru: **4 unit, 13 pelajaran, ±5 soal per pelajaran (~65 soal)**.

| Unit | Pelajaran | Pekan |
| --- | --- | --- |
| **1 — Fondasi** | Pengenalan Algoritma dan Pemrograman | 1 |
| | Computational Thinking | 2 |
| | Pseudocode | 3 |
| | Flowchart | 4 |
| **2 — Data & Ekspresi** | Konsep Data | 5 |
| | Operator dan Ekspresi | 6 |
| | Studi Kasus: Perhitungan Nilai Akhir | 7 |
| **3 — Seleksi & Iterasi** | Seleksi | 9 |
| | Iterasi | 10 |
| | Studi Kasus: Transaksi | 11 |
| **4 — Pemecahan Masalah Terpadu** | Pemecahan Masalah | 12 |
| | Kasus Data Akademik | 13 |
| | Mini Project Desain Algoritma | 14 |

Tiap pelajaran: teori singkat (text/code/image) + soal campuran (pilihan ganda, benar/salah, isian singkat, susun baris kode), masing-masing dengan penjelasan jawaban.

## Perubahan Kode

1. **`src/data/kelas-algoritma/course.ts`** — tulis ulang: 4 unit / 13 pelajaran / ±65 soal, mengikuti isi catatan per pekan (istilah, `div`/`mod`, urutan cabang, akumulator, nilai awal `tertinggi`/`terendah`, kasus batas, dsb).
2. **`src/components/kelas-algoritma/CourseApp.astro`**
   - Tambah blok teori jenis `image` untuk flowchart → dirender `<img>` responsif.
   - Tambah CSS `.adx-figure` (latar putih + border + margin) agar flowchart tetap terbaca di light maupun dark mode.
3. **`src/lib/kelas-algoritma/progress.ts`**
   - Naikkan kunci penyimpanan ke `mfa.algodasar.v2` (ID pelajaran berubah, agar progres lama tidak salah cocok).
   - Unlock dibuat **berurutan lintas unit** (story belajar bertahap: pelajaran ke-N terbuka setelah pelajaran ke-(N−1) selesai), bukan hanya di dalam unit.
4. **Validator hermetic (test ter-commit)**
   - `src/lib/kelas-algoritma/validate.ts` — fungsi validasi murni.
   - `scripts/validate-kelas-algoritma.mjs` — dijalankan dengan Node.
   - Skrip npm `validate:course`.
   - Yang dicek: id pelajaran unik, tiap pelajaran punya ≥1 soal, indeks jawaban mcq dalam rentang, opsi mcq unik, isian punya jawaban tak kosong, item susun unik, setiap soal punya penjelasan.

## Flowchart

Memakai 7 SVG yang sudah ada di `public/kuliah/algoritma-dan-pemrograman-1/2026-2027-ganjil/img/` (semuanya sudah punya `viewBox` + `aria-label`):

- `01-simbol-standar.svg` dan `02/03/04-…` → pelajaran **Flowchart**
- `05-flowchart-nilai-akhir.svg` → pelajaran **Studi Kasus Nilai Akhir**
- `06-flowchart-if-else.svg` → pelajaran **Seleksi**
- `07-flowchart-while.svg` → pelajaran **Iterasi**

Ditampilkan sebagai gambar di blok teori, dijaga aspek rasionya, dengan latar kontras tetap baik di light/dark.

## Verifikasi

1. `npm run build` sukses.
2. `npm run validate:course` lulus (integritas data seluruh soal).
3. **E2E browser**: skrip menjalankan **setiap** pelajaran, menjawab benar sesuai data (mengharapkan 3 bintang) dan memastikan progres tersimpan; ditambah uji satu jawaban salah → hati berkurang.
4. **Cek visual**: screenshot halaman latihan (light & dark) memastikan flowchart terender.
5. Reload → progres tetap (persistensi).

## Risiko & Mitigasi

- **Akurasi soal** — setiap soal diberi penjelasan, dan diverifikasi ulang terhadap catatan pekan terkait sebelum dianggap selesai.
- **Perubahan ID pelajaran** — progres lama tidak cocok; diatasi dengan bump kunci penyimpanan (v2) + tombol reset yang sudah ada.

## Commit

Dua commit, dipisah per topik:
1. `feat(kuliah)`: data kursus lengkap (13 pelajaran) + validator.
2. `feat(kuliah)`: dukungan blok gambar/flowchart + unlock lintas unit.

Tidak menyentuh berkas `taste` dan tidak mengubah catatan/aset materi yang ada.
