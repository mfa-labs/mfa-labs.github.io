---
title: Sistem Notifikasi WhatsApp & CRM
description: Dari cron sederhana ke modul CRM modern untuk notifikasi klinik
pubDate: 2026-07-01
tags: ['PHP', 'WhatsApp API', 'CRM', 'AJAX', 'Automation']
---

**Proyek**: Sistem notifikasi WhatsApp end-to-end untuk pengingat janji temu, OTP login, dan pengiriman invoice

**Peran**: Software Engineer — perancang dan pengembang utama

**Periode**: Mei 2021 — Juli 2026

---

## Permasalahan yang Dihadapi

Klinik sering menghadapi pasien yang lupa dengan janji temu mereka — mengakibatkan *no-show* yang merugikan. Di sisi lain, pasien butuh pengingat dan konfirmasi yang cepat. Solusinya: notifikasi WhatsApp otomatis.

Tantangan yang muncul:

1. **Server shared hosting terbatas** — tidak bisa install ekstensi atau service tambahan
2. **API WhatsApp terus berubah** — dari API lama ke baru, perlu adaptasi tanpa mengganggu layanan
3. **Setiap klinik butuh template pesan sendiri** — tidak bisa satu template untuk semua
4. **Keamanan** — OTP login via WhatsApp harus aman dan tidak bisa dicegat
5. **Device management** — setiap klinik punya nomor WhatsApp sendiri untuk bisnis

## Proses Berpikir

Sistem ini berevolusi dalam dua fase besar.

**Fase 1 (2021–2025):** Karena keterbatasan shared hosting, pendekatan paling sederhana adalah menggunakan cron job PHP. Setiap jam, server menjalankan script yang mengecek database — siapa yang punya janji besok? Siapa yang ulang tahun hari ini? Lalu kirim pesan.

**Fase 2 (2026):** Setelah migrasi ke VPS, saya bisa membangun arsitektur yang lebih matang. Saya pisahkan menjadi: device management, template engine, dan CRM model. Setiap komponen punya tanggung jawab sendiri.

## Penyelesaian Masalah

### Fase 1: Cron-Based Legacy (2021–2025)

Saya membuat `WaNotif.php` yang berjalan via cron:

- **H-1 reminder**: query jadwal besok, kirim pengingat ke pasien
- **Same-day reminder**: pengingat di hari yang sama untuk janji siang/sore
- **Ucapan ulang tahun**: query pasien yang ulang tahun hari ini
- **Laporan harian klinik**: ringkasan per-dokter dikirim ke admin

Mengirim pesan via StarSender API lama (`starsender.online/api/sendText`). Sayangnya, sistem ini *fire-and-forget* — tidak ada konfirmasi apakah pesan berhasil terkirim.

### Fase 2: CRM Module (2026)

**Device Management**

Saya buat sistem untuk manage perangkat WhatsApp:
- CRUD device via StarSender API baru (`api.starsender.online`)
- QR scan display — admin bisa scan QR untuk menghubungkan nomor WhatsApp
- Status polling via AJAX — tahu apakah device online atau tidak
- Logout dan reset device

```
commit 5f65cd2 — feat: scan wa and template (+40 lines, 5 files)
commit fa06a4c — koneksi wa
```

**Template Engine**

Empat jenis template yang bisa dikustomisasi per klinik:

| Trigger | Variabel yang Tersedia |
|---------|----------------------|
| H-1 Reminder | `{nama}`, `{hari}`, `{tanggal}`, `{jam}`, `{dokter}` |
| Same-Day | `{nama}`, `{hari}`, `{tanggal}`, `{jam}`, `{dokter}` |
| Birthday | `{nama}` |
| Invoice | `{nama}`, `{invoice}`, `{nominal}`, `{tanggal}` |

**CRM Model**

Saya buat `Crm_model.php` sebagai lapisan database terpusat:

```
get_device(), upsert_device(), delete_device()
update_device_status(), get_template()
upsert_template(), is_valid_trigger_id()
```

**Rate Limiting**

Polling device status dibatasi 8 detik per user — mencegah rate limit dari API StarSender.

**Bug Fixes Penting**

```
7207afc — undefined variable saat API gagal
1384b13 — role-based menu visibility
83e3a98 — empty trigger type handling
b8c4166 — QR display edge cases
```

### OTP & Two-Factor Authentication

Saya integrasikan WhatsApp OTP dengan sistem login (commit `2dae9a5`). Saat user login dari perangkat baru, OTP dikirim via WhatsApp. Device yang sudah dipercaya disimpan di cookie.

### WhatsApp Bot

Memanfaatkan webhook, saya buat bot WhatsApp untuk command admin — `Helpme.php` (commit `6ad3369`, Sep 2023).

## Implementasi

| Waktu | Capaian |
|-------|---------|
| Mei 2021 | Cron-based WA notification pertama kali jalan |
| 2022–2023 | API key management, webhook, OTP login |
| 2024 | Report WA ke admin, bug fixes |
| 2026 | CRM module: device mgmt, template engine, bulk save |
| Jul 2026 | CRM model, rate limiting, fallback template |

Total ~28 komit non-merge, 3 file utama: `WaNotif.php`, `Mainlib.php` (2.488 baris), dan modul CRM.

## Apa yang Dapat Dipelajari

1. **Evolusi itu wajar** — mulai dari cron sederhana lalu berkembang ke arsitektur modular adalah proses alami. Yang penting adalah sistem lama tetap berjalan selama migrasi.
2. **API eksternal akan berubah** — StarSender berganti API. Desain yang baik membuat perubahan ini hanya berdampak di satu lapisan.
3. **Rate limiting itu penting** — jangan pernah polling API orang lain tanpa batasan.
4. **Validasi input sentral** — `is_valid_trigger_id()` mencegah bug di banyak tempat sekaligus.
5. **Pisahkan model dari logic** — CRM_model membuat kode controller lebih bersih dan mudah di-test.
