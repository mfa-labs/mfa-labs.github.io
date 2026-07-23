# Portofolio Software Engineering — Muhammad Fadhil Al Amal

> Software Engineer | 5+ tahun mengelola dan mengembangkan platform SaaS healthcare di Indonesia

Kontribusi penuh di **Kelola.net**, SaaS manajemen klinik gigi/umum — CodeIgniter 3 (PHP MVC), MySQL 8.0, Bootstrap 4, REST API, Docker. Melayani ratusan klinik dengan 12 role, multi-tenant, dan integrasi data kesehatan nasional.

**Kontak**: fadhil.muq@gmail.com | [LinkedIn](https://www.linkedin.com/in/muhammad-fadhil-al-amal/) | [GitHub](https://github.com/mfa-labs) | [Scholar](https://scholar.google.com/citations?user=1pAz6xgAAAAJ&hl=id)

---

## Ikhtisar Kontribusi Git

**Periode**: April 2021 — Juli 2026 (5 tahun 2 bulan aktif berturut-turut)

```
Total commits:    646
Non-merge:        444
Files touched:    10.252
Controller files: 204
Model files:      36
View files:       646
DB migrations:    7
```

---

## 1. SATUSEHAT Integration — Platform Data Kesehatan Nasional

**Komit**: ~34 non-merge | **File terkait**: Satusehat.php (377 baris), 2 model | **Periode**: Agustus 2023 — Mei 2025

Integrasi sistem klinik dengan platform SATUSEHAT Kementerian Kesehatan RI — pertukaran data kesehatan elektronik nasional. Database terpisah (`newsatusehat`) untuk log dan token akses.

**Detail pekerjaan**:
- REST API client untuk endpoint SATUSEHAT (auth OAuth2, CRUD pasien, practitioner, organization, location)
- **Patient IHS** — lookup dan registrasi IHS pasien; menangani kasus duplikat, no-IHS tidak ditemukan, error handling
- **SDMK** — verifikasi practitioner (dokter, perawat) ke database SDMK nasional
- **Organization & Location** — registrasi faskes dan ruang praktik via API; configurable environment (staging/production)
- **RME (Rekam Medis Elektronik)** — encounter submission dengan diagnosis ICD-10 dan prosedur ICD-9
- **ICD-9 mapping** (Juli 2025) — mapping lengkap tindakan klinik ke kode prosedur ICD-9; checkout dokter dengan ICD-9
- **Logging & error tracking** — tabel log khusus, detail error per transaksi, resend queue untuk gagal kirim
- **Configurable key** — SATUSEHAT key per tenant dari panel, bukan hardcode
- **Menu per role** — menu SATUSEHAT tersedia di dashboard klinik, dokter, admin dengan konteks berbeda

**Dampak**: Ratusan klinik dapat mengirim data RME nasional tanpa perlu integrasi manual ke SATUSEHAT.

---

## 2. WhatsApp Notification System — CRM & Otomasi Komunikasi

**Komit**: ~28 non-merge | **File terkait**: 2 controller CRM, WaNotif.php, Mainlib.php (2.488 baris) | **Periode**: Mei 2021 — Juli 2026

Sistem notifikasi WhatsApp end-to-end untuk reminder janji temu, ulang tahun pasien, OTP login, dan invoice. Dua arsitektur — legacy cron (PHP) dan CRM module modern.

**Legacy Cron (WaNotif.php, 2021–2025)**
- Pengiriman terjadwal via cron: H-1 reminder, same-day reminder, ucapan ulang tahun
- Laporan harian klinik: ringkasan per-dokter dikirim ke admin klinik
- Pengiriman via StarSender API (old API: `starsender.online/api/sendText`)
- Query pasien via `tbl_pasien`, jadwal via `tbl_praktik`, dokter via `tbl_dokterjaga`

**CRM Module (2026)**
- **Device management** — CRUD device WhatsApp via StarSender (new API: `api.starsender.online`); QR scan display, status polling AJAX, logout
- **Template engine** — 4 trigger types (H-1 Reminder, Same-Day, Birthday, Invoice) dengan variabel dinamis `{nama}`, `{hari}`, `{tanggal}`, `{jam}`, `{dokter}`, `{invoice}`, `{nominal}`
- **CRM_model** — centralized DB queries: `get_device()`, `upsert_device()`, `delete_device()`, `update_device_status()`, `get_template()`, `upsert_template()`, `is_valid_trigger_id()`
- **Rate limiting** — 8s minimum poll interval per user via session cooldown
- **Error logging** — `log_starsender_error()` method mencatat method, context, response ke application logs
- **Input validation** — `is_valid_trigger_id()` sentralisasi validasi trigger range 1–4
- **Bulk save** — "Simpan Semua" saves 4 templates via sequential AJAX
- **Test send** — kirim preview template ke nomor WA owner
- **Toggle all** — enable/disable all templates tanpa mengubah konten

**OTP & Auth** — Two-factor authentication via WhatsApp OTP untuk login perangkat baru; device trusted cookie

**Webhook** — WhatsApp bot untuk command admin (Helpme.php)

**Bug fixes kritis**: undefined variable errors pada API failure, foreach null, variable scope issue, empty trigger type handling, API key duplication

---

## 3. Financial & Reporting System

**Komit**: ~44 non-merge | **Periode**: Juni 2021 — Maret 2025

Sistem laporan multi-role dengan server-side processing, export Excel/PDF, dan perhitungan jasa medis.

**Detail pekerjaan**:
- **Multi-role reports**: dashboard keuangan untuk klinik, praktik pribadi, owner, BPJS
- **Jasa Medis (Jasmed)** — splitting fee dokter, perhitungan jasmed per tindakan; fixing laporan jasmed tanggal 31
- **Laporan Dinkes** — laporan untuk Dinas Kesehatan (SKP dokter, laporan ranu)
- **Export**: Excel (PhpSpreadsheet) dan PDF (Dompdf) dengan format yang bisa dibaca non-teknis
- **Server-side DataTable** — laporan harian, bulanan, tahunan dengan pagination server-side untuk tabel besar
- **Detail biaya klinik owner** — breakdown pendapatan per klinik untuk multi-clinic owner
- **Range tanggal** — semua laporan mendukung filter custom date range
- **Laporan batal pasien** — track pembatalan dengan `created_by`

---

## 4. Medical Records & Clinical Workflow

**Komit**: ~42 non-merge | **Periode**: Juli 2021 — Juni 2026

Rekam medis elektronik untuk dokter gigi dan umum.

**Detail pekerjaan**:
- **Odontogram** — dental chart digital untuk charting kondisi gigi
- **ICD-10 & ICD-9** — multi-diagnosis support; ICD-9 mapping ke tindakan; checkout dokter dengan kode ICD-9
- **Checkout 5-status** — progression tracking kunjungan pasien dari awal sampai selesai
- **Booking & appointment** — manual book untuk semua role (admin, klinik, pribadi, umum);
- **Combined RM** — rekam medis gabungan untuk klinik bersama 
- **Pemeriksaan dokter umum & gigi** — biaya di RM pemeriksaan, periksakan langsung dari RM
- **Fixing RM data gigi kosong** — bug pada RM akun dokter ketika tidak ada data gigi
- **Sharing RM** — sharing rekam medis antar klinik dalam satu group

---

## 5. Billing & Kasir

**Komit**: ~33 non-merge | **Periode**: Agustus 2021 — Maret 2025

Sistem pembayaran multi-metode dengan server-side processing.

**Detail pekerjaan**:
- **Multi-metode pembayaran**: cash, transfer, debit/credit card, BPJS, hutang
- **Diskon** — diskon tindakan, diskon multi-level; fixing bugs diskon
- **Invoice** — PDF via Dompdf, print diagnosa di invoice, thermal printer support
- **Hutang/piutang** — tracking pembayaran hutang, status hutang di kasir
- **Server-side DataTable** — pembayaran server-side untuk semua role (admin, klinik, pribadi, umum)
- **Detail pembayaran** — nominal dibayarkan, status, metode
- **Kapitalisasi** — format Rupiah tanpa spasi, konsistensi format di seluruh role

---

## 6. PHP 7 → PHP 8 Migration

**Komit**: ~13 non-merge | **Periode**: November — Desember 2024

Migrasi platform dari PHP 7 ke PHP 8.1 tanpa downtime.

**Detail pekerjaan**:
- **Dompdf upgrade** — dari versi lawas ke Dompdf 2.0 untuk kompatibilitas PHP 8
- **Fix compatibility** — deprecated functions, type errors, `each()` removal, null handling
- **Laporan harian & jasmed** — fix perhitungan yang berubah karena tipe data lebih ketat
- **Detail pasien** — fix bugs pada view dan edit detail pasien
- **Tambah pasien baru** — fix error pada create pasien pertama kali
- **Kirim email invoice** — fix PHPMailer compatibility
- **Pemeriksaan dokter umum** — fix alur pemeriksaan yang error di PHP 8
- **HTACCESS** — update konfigurasi untuk PHP 8.1
- **Regression testing** — test manual di tiap modul setelah migrasi

---

## 7. Multi-Tenant & Role Architecture

**Komit**: Tersebar di seluruh codebase | **12 role** | **Periode**: 2021–2026

Arsitektur multi-tenant dengan isolasi data dan role-based routing.

**Detail pekerjaan**:
- **Data isolation**: setiap query dibatasi oleh `klinikKey` dan `praktikKey` (128-char hash)
- **12 role** dengan dedicated controller subdirectory dan view folder:
  - Klinik, Dokter, Admin Klinik, Owner, Partner (Affiliate), Super Admin (Players)
  - Praktik Pribadi, Klinik BPJS, Umum, Klinik Umum, Dokter Klinik Umum, Admin Klinik Umum
- **Shared clinic groups**: multi-klinik berbagi data pasien (Ranu, Densglo, Jasmine, Vialyne, DiamondDC)
- **Klinik bersama** — multiple klinik berbagi resource dengan scope terbatas
- **Auth routing** — login → deteksi role → redirect ke dashboard sesuai; session + OTP untuk device baru
- **CRUD role management** — super admin dapat mengelola user, role, akses per tenant

---

## 8. Infrastructure & DevOps

**Komit**: ~33 non-merge | **Periode**: 2021–2026

Manajemen server, deployment, dan containerization.

**Detail pekerjaan**:
- **Docker (2026)** — Docker Compose environment: PHP 8.1 Apache + MySQL 8.0 + phpMyAdmin; Dockerfile untuk reproducible dev environment
- **Hosting migration** — migrasi dari shared hosting ke VPS (managed); post-migration validation, live monitoring
- **HTACCESS** — rewrite rules, PHP settings, security headers; update untuk PHP 8.1
- **Configuration management** — database credentials, Redis config, SATUSEHAT environment per tenant
- **Session & cache** — Redis configuration (unix socket), session encryption
- **Error logging** — PHP error log management, log rotation

---

## 9. Database & Performance Optimization

**Komit**: ~18 non-merge | **Periode**: 2021–2026

Optimasi query dan indexing untuk database dengan jutaan transaksi.

**Detail pekerjaan**:
- **Server-side DataTable** — implementasi pagination, sorting, filtering di sisi server untuk tabel besar (pasien, pembayaran, laporan)
- **Indexing** — indexing appointment praktik, optimization query checkout flow
- **Query optimization** — fixing slow queries di laporan, searching pasien, appointment list
- **Memory leak fix** — fixing "gagal menambah pasien baru" karena memory leak di `get_all_pasien`
- **Database migration** — 7 SQL migration files di `update_db/` untuk schema changes

---


## Ringkasan Per Tahun

| Tahun | Komit | Fokus Dominan |
|-------|-------|---------------|
| **2021** (Apr–Des) | 125 | Foundation: WA notif, auth/OTP, laporan keuangan, booking, pasien, dashboard |
| **2022** | 40 | Laporan klinik, WA API, fullcalendar, tarif, dashboard per role |
| **2023** | 84 | SATUSEHAT integration (IHS, encounter, SDMK), server-side DataTable, pembayaran, klinik bersama |
| **2024** | 104 | PHP 8.1 migrasi, Dompdf upgrade, ICD-9 mapping, SATUSEHAT hardening, klinik bersama |
| **2025** | 61 | DiamondDC klinik bersama, laporan dinkes, ICD-9 checkout, bug fixing, dokumentasi |
| **2026** | 30 | CRM module + model, Docker setup, WA template engine, fitur gaji pokok, dokumentasi v2 |

---

**Sumber data**: Repositori panel Kelola.net — git log `--author="Amal17|fadhil|Muhammad Fadhil"` — 4 Juli 2026
