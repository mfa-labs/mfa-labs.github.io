# SIBUNDA — Sistem Informasi Bunda

> **Resume Proyek Portofolio**
> Aplikasi mobile Android + REST API untuk pemantauan gizi dan pencegahan stunting pada anak batita/balita.

---

## Ringkasan

**SIBUNDA** (Si**stem Informasi Bunda**) adalah aplikasi berbasis Android yang dikembangkan bersama Fakultas Keperawatan, Universitas Syiah Kuala (USK) untuk membantu **kader kesehatan dan ibu balita** memenuhi gizi seimbang anak secara mandiri. Proyek ini mencakup pengembangan **aplikasi mobile Flutter** dan **REST API backend** (Node.js/Vercel) yang saling terintegrasi.

Aplikasi menyediakan edukasi gizi bergambar, resep makanan sehat, pemantauan pertumbuhan anak berbasis standar WHO, pencatatan asupan makan harian (Isi Piringku), forum komunitas, serta pengingat jadwal makan.

---

## Cakupan & Peran Saya

**Peran: Fullstack Developer (Flutter & Backend)** dalam proyek institusi/penelitian.

- Merancang dan membangun aplikasi Flutter dari sisi UI, state management (`setState`), hingga integrasi REST API.
- Menyusun kontrak API (lihat `docs/API.md`) dan menyelaraskan implementasi aplikasi dengan skema 11 komponen makanan & 6 kategori gizi.
- Men-debug dan mendokumentasikan kendala integrasi backend (HTTP 500, ketidaksesuaian skema kategori gizi) dalam bentuk catatan teknis yang jelas bagi tim backend.
- Menangani autentikasi berbasis token (Bearer), sesi via `SharedPreferences`, dan upload foto ke layanan eksternal (Uploadthing).

---

## Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| **Autentikasi** | Register, login, lupa & reset password (via WhatsApp), proteksi sesi |
| **Profil & Data Anak** | CRUD data anak (nama, tanggal lahir, jenis kelamin, BB/TB) |
| **Monitoring Gizi** | Grafik pertumbuhan standar WHO 0–5 tahun (BB/U, TB/U, BB/TB) + penentuan status gizi |
| **Isi Piringku** | Catat 11 komponen makanan per waktu makan + foto piring; ringkasan harian 6 kategori gizi |
| **Panduan Sajian** | Panduan takaran saji untuk anak (gambar) |
| **Edukasi Gizi** | 4 topik buku bergambar (stunting, wasting, cakupan gizi, kesulitan makan) dengan dukungan zoom |
| **Resep Sehat** | 10 resep makanan sehat anak bergambar |
| **Menu Sehat Harian** | Rekomendasi menu harian bergizi |
| **Forum Komunitas** | Diskusi tanya-jawab antar pengguna + komentar (paginasi) |
| **Pengingat Makan** | Alarm kustom berulang harian via notifikasi lokal |
| **Video Edukasi** | Pemutar video pembelajaran YouTube |
| **Konsultasi** | Menghubungi tenaga gizi via WhatsApp |

---

## Teknologi

**Frontend (Aplikasi Mobile)**
- Flutter / Dart, Material 3
- `fl_chart` — grafik kurva pertumbuhan WHO
- `dio` — HTTP client & integrasi REST API
- `flutter_local_notifications` + `timezone` — alarm/pengingat & notifikasi lokal
- `shared_preferences` — penyimpanan sesi & data lokal
- `image_picker` + integrasi upload (Uploadthing) — foto piring
- `youtube_player_flutter`, `url_launcher`, `intl` (lokalisasi `id_ID`), `csv`, `google_nav_bar`, `awesome_snackbar_content`
- Desain sistem: tema Material 3 kustom, font Signika/Nunito, komponen reusable

**Backend (REST API)**
- Node.js di-deploy ke **Vercel** (`https://sibunda.vercel.app/api`)
- Endpoint REST: auth (`/register`, `/login`, `/forgot-password`, `/reset-password`), child CRUD (`/child`), pengukuran (`/child/data`), meals (`/meals`), diskusi (`/discussions`), upload file
- Autentikasi Bearer token; upload file via presigned URL (Uploadthing)
- Dokumentasi API & contoh payload (lihat `docs/API.md`)

---

## Detail Teknis Pilihan

### Grafik Pertumbuhan WHO 0–5 Tahun
- Dataset standar WHO (BB/U, TB/U, BB/TB untuk laki-laki & perempuan) dimuat dari file CSV yang dibundel.
- Titik ukur anak di-plot terhadap kurva median dan garis deviasi standar (−3 SD s.d. +3 SD) untuk menentukan kategori status gizi.
- Riwayat pengukuran dapat ditambah/diubah dan langsung tercermin pada grafik.

### Isi Piringku — Pencatatan & Evaluasi Asupan Harian
- Pengguna mencatat **11 komponen makanan** (nasi, protein hewani/nabati, sayur, buah, susu) dengan porsi standar (mis. "4 sdm", "1 potong sedang") per waktu makan (sarapan, makan siang, makan malam, selingan).
- Foto piring diunggah sebagai bukti visual.
- Backend menghitung keterpenuhan harian dalam **6 kategori gizi** dan aplikasi menampilkan ringkasan berupa progress bar + rincian sumber per kategori.

### Forum Komunitas
- Daftar diskusi dengan paginasi, detail diskusi, dan komentar antar pengguna.
- Model data menangani tipe respons server yang tidak konsisten (mis. `comment_count` bertipe string/int).

### Alarm & Pengingat Makan
- Alarm kustom (label + waktu) disimpan sebagai JSON di `SharedPreferences` dan dijadwalkan sebagai notifikasi lokal berulang harian (`matchDateTimeComponents: time`).
- Direschedule ulang setiap aplikasi dibuka sebagai jaring pengaman bila sistem operasi menghapus jadwal.

### Integrasi & Debugging Backend
- Menuliskan catatan teknis berisi reproduksi error (contoh request `curl`), perbandingan respons sukses/gagal, hipotesis akar masalah, dan permintaan perbaikan yang jelas untuk tim backend — mis. ketidaksesuaian skema 5 vs 6 kategori gizi dan error 500 pada `POST /api/meals`.
- Menyusun ulang tata letak form agar alur pengisian lebih logis dan memperbaiki label porsi sesuai lembar observasi.

---

## Arsitektur Aplikasi

```
┌──────────────────────────────┐
│  UI Layer (30 screens)       │  ← StatefulWidget + setState
├──────────────────────────────┤
│  API Layer (lib/api)         │  ← dio: auth, childs, meals,
│                              │     discussions, upload
├──────────────────────────────┤
│  Backend REST API (Vercel)   │  ← Node.js + skema DB
└──────────────────────────────┘
```

- **State management**: vanilla Flutter `setState` (tanpa library eksternal).
- **Navigasi**: `Navigator.push` / `pushReplacement` manual.
- **Struktur kode**: `lib/screens` (30 screen), `lib/widgets` (12 reusable), `lib/api` (5 service), `lib/models`, `lib/utils`, `lib/services` — terorganisir per fitur.
- **CI/CD**: GitLab CI/CD untuk build Flutter (terlihat pada riwayat repo).
- **Konten edukasi**: materi, resep, dan menu sehat dikirim sebagai aset gambar dalam bundle aplikasi (cocok untuk pengguna dengan koneksi terbatas).

---

## Hasil & Dampak

- Aplikasi produksi **v1.1.1** yang digunakan kader kesehatan dan ibu balita binaan Fakultas Keperawatan USK.
- Fitur lengkap dari **pemantauan pertumbuhan hingga edukasi & komunitas** dalam satu aplikasi.
- Integrasi frontend–backend yang stabil dengan **dokumentasi teknis** yang memudahkan kolaborasi tim lintas fungsi (Flutter & backend).
- Dasar untuk pengembangan lanjutan: alarm makan, forum, dan modul pencatatan asupan harian (Isi Piringku) terus bertambah di tiap rilis.

---

## Tampilan Aplikasi / Artefak Terkait

- `README.md` — ringkasan & cara menjalankan
- `docs/ARCHITECTURE.md` — arsitektur, navigasi, alur data
- `docs/API.md` — referensi endpoint backend
- `docs/DIRECTORY_STRUCTURE.md` — struktur direktori
- `PRD_ALARM_MAKAN_SNACK.md` — contoh PRD & rencana implementasi fitur
- `CATATAN_BACKEND_*.md` — contoh komunikasi teknis & debugging dengan tim backend

---

*Dokumen resume ini disusun untuk keperluan portofolio berdasarkan kondisi kode terkini repositori.*
