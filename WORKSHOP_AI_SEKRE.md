# AI-Powered Digital Archive System

## Menjadi Sekretaris yang Relevan di Era AI

**Durasi:** 2 Jam
**Target Peserta:** Mahasiswa D3 Sekretaris
**Tujuan:** Memahami perubahan dunia kerja akibat AI dan membangun prototype sistem arsip digital berbasis AI menggunakan Google Form, Google Drive, Apps Script, dan OpenRouter.

---

# Slide 1 — Pembukaan

## Pertanyaan Besar

Jika AI dapat:

* Menulis surat
* Membuat notulen rapat
* Merangkum dokumen
* Menerjemahkan bahasa
* Mencari informasi dalam ribuan dokumen

Apakah profesi sekretaris masih dibutuhkan?

---

# Slide 2 — Pertanyaan yang Lebih Tepat

Bukan:

> Apakah AI akan menggantikan manusia?

Tetapi:

> Manusia seperti apa yang akan tetap dibutuhkan ketika AI ada di mana-mana?

---

# Slide 3 — AI Sudah Menjadi Bagian Dunia Kerja

Contoh AI yang digunakan saat ini:

* ChatGPT
* Gemini
* Microsoft Copilot
* Canva AI
* Notion AI
* Grammarly AI

AI bukan teknologi masa depan.

AI adalah alat kerja saat ini.

---

# Slide 4 — Pelajaran dari Estonia

Pada tahun 2023, Menteri Pendidikan Estonia mulai mempertanyakan:

> Apa yang terjadi pada kemampuan belajar manusia ketika AI menjadi sangat pintar?

Fokusnya bukan pada teknologi.

Fokusnya adalah pada manusia.

---

# Slide 5 — AI Bukan Masalah Utama

Yang perlu dipikirkan bukan:

* ChatGPT
* Gemini
* OpenAI

Tetapi:

> Apa yang harus dipelajari manusia ketika mesin dapat melakukan banyak tugas intelektual?

---

# Slide 6 — Evolusi Manusia

Sebelum mesin cetak:

* Membaca bukan kemampuan umum.

Setelah mesin cetak:

* Semua orang harus belajar membaca.

Mesin cetak tidak membuat manusia berhenti belajar.

Mesin cetak memaksa manusia berkembang.

---

# Slide 7 — AI adalah Mesin Cetak Abad ke-21

AI memberikan tekanan evolusi baru.

Bukan pada fisik.

Tetapi pada:

* Cara berpikir
* Cara belajar
* Cara bekerja

---

# Slide 8 — Cara Kerja Otak

## Lower Order Thinking

* Mengingat
* Menghafal
* Memahami
* Mengikuti prosedur

Contoh:

* Mengetik ulang surat
* Mengarsipkan dokumen
* Menyalin data

---

# Slide 9 — Higher Order Thinking

* Analisis
* Evaluasi
* Kreativitas
* Pemecahan masalah

Contoh:

* Menentukan prioritas informasi
* Menilai validitas dokumen
* Menyusun rekomendasi
* Mengambil keputusan

---

# Slide 10 — Bloom Taxonomy

```text
CREATE
EVALUATE
ANALYZE
----------------
APPLY
UNDERSTAND
REMEMBER
```

AI sangat kuat pada:

* Remember
* Understand
* Apply

Manusia harus semakin kuat pada:

* Analyze
* Evaluate
* Create

---

# Slide 11 — Sekretaris Masa Lalu

Fokus utama:

* Mengetik
* Mengarsipkan
* Menyalin
* Menyusun dokumen

Nilai utama:

Kecepatan administrasi.

---

# Slide 12 — Sekretaris Masa Depan

Fokus utama:

* Information Management
* Knowledge Management
* Decision Support
* AI Collaboration

Nilai utama:

Kemampuan memahami dan mengelola informasi.

---

# Slide 13 — Tantangan Arsip Tradisional

Masalah yang sering terjadi:

* File tersimpan tetapi sulit ditemukan
* Nama file tidak konsisten
* Informasi tersembunyi di dalam PDF
* Membutuhkan waktu lama mencari dokumen

---

# Slide 14 — Studi Kasus

Sebuah kantor memiliki:

* 20.000 file PDF
* Surat masuk
* Surat keluar
* Kontrak
* Memo

Pertanyaan:

> Temukan surat kerja sama yang diterbitkan tahun 2023.

Berapa lama waktu yang dibutuhkan?

---

# Slide 15 — Dari Arsip Menjadi Pengetahuan

Arsip bukan sekadar tempat menyimpan file.

Arsip adalah sumber pengetahuan organisasi.

Masalahnya:

Dokumen ada.

Informasi sulit ditemukan.

---

# Slide 16 — Solusi

## AI-Powered Digital Archive

Dokumen → AI → Metadata → Pengetahuan

AI membantu:

* Membaca dokumen
* Mengidentifikasi informasi penting
* Membuat ringkasan
* Menghasilkan metadata

---

# Slide 17 — Arsitektur Sistem

```text
Mahasiswa / Pegawai
          │
          ▼
     Google Form
          │
          ▼
    Upload PDF
          │
          ▼
     Google Drive
          │
          ▼
      Apps Script
          │
          ▼
      OpenRouter
          │
          ▼
      AI Model
          │
          ▼
 Metadata Otomatis
          │
          ▼
    Google Sheets
```

---

# Slide 18 — Komponen yang Digunakan

## Google Form

Fungsi:

* Upload dokumen

## Google Drive

Fungsi:

* Penyimpanan file

## Apps Script

Fungsi:

* Otomatisasi proses

## OpenRouter

Fungsi:

* Mengakses AI model

## Google Sheets

Fungsi:

* Menyimpan metadata

---

# Slide 19 — Alur Kerja Sistem

```text
Upload PDF
      ↓
File disimpan di Drive
      ↓
Trigger Apps Script aktif
      ↓
File dikirim ke AI
      ↓
AI membaca isi dokumen
      ↓
Metadata dihasilkan
      ↓
Data disimpan ke Sheet
```

---

# Slide 20 — Metadata yang Diekstraksi

Contoh:

```json
{
  "jenis_dokumen": "Surat Keputusan",
  "nomor_dokumen": "123/UN11/2026",
  "tanggal_dokumen": "10 September 2026",
  "pengirim": "Universitas",
  "penerima": "Tim Arsip",
  "perihal": "Pengangkatan Tim Arsip",
  "ringkasan": "...",
  "kata_kunci": [
    "arsip",
    "surat keputusan"
  ]
}
```

---

# Slide 21 — Implementasi Teknis

## Trigger Google Form

```javascript
function onFormSubmit(e)
```

Aktif ketika file diunggah.

---

# Slide 22 — Mengambil File dari Drive

```javascript
const file =
  DriveApp.getFileById(fileId);
```

Fungsi:

Mengakses PDF yang diunggah.

---

# Slide 23 — Mengubah PDF Menjadi Base64

```javascript
const blob = file.getBlob();

const base64 =
  Utilities.base64Encode(
    blob.getBytes()
  );
```

Fungsi:

Mengirim file ke AI.

---

# Slide 24 — Mengirim ke OpenRouter

```javascript
UrlFetchApp.fetch(
  "https://openrouter.ai/api/v1/chat/completions"
)
```

Fungsi:

Menghubungkan sistem dengan AI.

---

# Slide 25 — Prompt Engineering

Contoh instruksi:

```text
Analisis dokumen PDF berikut.

Ekstrak:

- jenis dokumen
- nomor dokumen
- tanggal
- pengirim
- perihal
- ringkasan

Kembalikan dalam format JSON.
```

Pelajaran penting:

AI yang baik membutuhkan instruksi yang baik.

---

# Slide 26 — Hasil Akhir

Google Sheet:

| Nama File | Jenis           | Nomor    | Pengirim    | Perihal          |
| --------- | --------------- | -------- | ----------- | ---------------- |
| Surat.pdf | Surat Keputusan | 123/2026 | Universitas | Pengangkatan Tim |

---

# Slide 27 — Keterampilan yang Harus Dimiliki

## Hard Skills

* Digital Archiving
* AI Tools
* Prompt Engineering
* Data Management
* Workflow Automation

## Soft Skills

* Critical Thinking
* Communication
* Collaboration
* Ethics

---

# Slide 28 — Etika Penggunaan AI

Selalu ingat:

* AI bisa salah
* AI bisa berhalusinasi
* AI harus diverifikasi
* Dokumen sensitif harus dijaga

Prinsip:

> Human in the Loop

AI membantu manusia, bukan menggantikan manusia.

---

# Slide 29 — Pesan Utama

AI tidak menggantikan sekretaris.

AI menggantikan pekerjaan yang repetitif.

Nilai manusia meningkat pada:

* Analisis
* Evaluasi
* Kreativitas
* Pengambilan keputusan

---

# Slide 30 — Penutup

> "Masalah terbesar bukan AI yang semakin pintar.

> Masalah terbesar adalah ketika manusia berhenti melatih kemampuan berpikirnya."

Gunakan AI untuk memperkuat kemampuan berpikir, bukan untuk menggantikannya.

Terima kasih.
