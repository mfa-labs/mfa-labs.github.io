---
title: Infrastruktur & DevOps
description: Manajemen server, hosting migration, dan Docker containerization untuk SaaS healthcare
---

# Infrastruktur & DevOps: Mengelola Server Produksi untuk Ratusan Klinik

**Proyek**: Manajemen server, hosting migration, Docker containerization, dan konfigurasi infrastruktur
**Peran**: Software Engineer — perancang infrastruktur dan operator
**Periode**: 2021 — 2026

---

## Permasalahan yang Dihadapi

Menjalankan SaaS untuk ratusan klinik berarti infrastruktur harus stabil dan aman. Awalnya platform berjalan di shared hosting — murah tapi sangat terbatas. Seiring bertambahnya klinik, keterbatasan ini menjadi masalah serius.

Tantangan:

1. **Shared hosting terlalu lambat** — resource dibagi dengan puluhan pengguna lain
2. **Tidak ada SSH access** — mustahil melakukan debugging atau otomatisasi
3. **PHP settings terbatas** — tidak bisa upload file besar, memory limit rendah
4. **Database shared** — performa MySQL tidak stabil
5. **Butuh environment development** — developer tidak bisa bekerja langsung di production

## Proses Berpikir

Saya merencanakan evolusi infrastruktur dalam 3 fase:

1. **Segera: Migrasi ke VPS** — dapatkan kendali penuh atas server
2. **Jangka pendek: Docker** — reproducible development environment
3. **Jangka panjang: Redis** — session dan caching untuk performa

Prioritas utama: **zero downtime saat migrasi**. Klinik tidak bisa berhenti operasi.

## Penyelesaian Masalah

### 1. Migrasi Hosting: Shared → Managed VPS

Migrasi dilakukan bertahap:

| Fase | Komit | Deskripsi |
|------|-------|-----------|
| Setup awal | `9128f87`, `2eabd34` (Nov 2021) | Persiapan hosting |
| Migrasi VPS | `e7e6299` (Mar 2022), `ee6c68d` (Jan 2024) | Pindah ke VPS |
| Konfigurasi | `19e2acd`, `0e1bdfe` (Feb–Sep 2024) | .htaccess, security |
| Branch-specific | `608d162` (May 2025) | Multi-tenant hosting |

### 2. Docker Containerization (2026)

Docker Compose stack:

```
5f79300 — init docker (Jun 2026)
```

- **PHP 8.1 Apache** — dengan Dockerfile kustom
- **MySQL 8.0** — database
- **phpMyAdmin** — manajemen database UI

Manfaat Docker:
- Developer bisa jalankan environment yang persis sama dengan production
- Setup cukup `docker-compose up`
- Tidak ada lagi "tapi di laptop saya jalan"

### 3. Redis Session & Cache

Redis diimplementasikan untuk session storage — lebih cepat dari file-based session:

| Komit | Perubahan | Deskripsi |
|-------|-----------|-----------|
| `7015163` (Jan 2024) | 4 files | Redis testing |
| `fbb0832` (Jan 2024) | 2 files | Unix socket |
| `e42376b` (Feb 2024) | 2 files | Clean redislib |
| `03b2208` (Feb 2024) | 3 files | Redis configuration |
| `aa3bebe` (Dec 2024) | 1 line | PHP 8 null fix |

Redis dikonfigurasi via unix socket — lebih cepat daripada TCP:
```php
$config['sess_driver'] = 'redis';
$config['sess_save_path'] = 'tcp://127.0.0.1:6379?auth=KelolaPedia@2024';
```

### 4. Configuration Management

Database credentials, Redis config, dan SATUSEHAT environment dikelola terpusat:
- `configuration.php` di-gitignore — tidak pernah masuk repository
- Per-tenant configuration di database
- Environment-specific config untuk staging vs production

```
0a6adcc (May 2021) — Start configuration.php
a0f3c2e (May 2021) — Start ignore configuration.php
```

### 5. HTACCESS Management

`.htaccess` berevolusi untuk mengakomodasi:

1. **Rewrite rules** — clean URL untuk CodeIgniter
2. **PHP settings** — upload limit, memory, execution time
3. **Security headers** — X-Frame-Options, X-Content-Type-Options
4. **PHP 8.1 handler** — perubahan untuk PHP-FPM
5. **Hotlink protection** — cegah pencurian gambar klinik

### 6. Error Logging

- PHP error → `/var/log/php_errors.log`
- API failures (SATUSEHAT, StarSender) → log aplikasi terstruktur
- Log rotation — mencegah disk penuh

## Implementasi

| Waktu | Capaian |
|-------|---------|
| Nov 2021 | Setup hosting awal |
| Mar 2022 | Migrasi ke VPS |
| Jan 2024 | Redis session & cache |
| Feb 2024 | Redis configuration, htaccess security |
| Sep 2024 | Multi-tenant htaccess |
| Nov 2024 | PHP 8.1 htaccess update |
| Feb 2025 | Eldental & Medina hosting |
| Jun 2026 | Docker Compose setup |

## Apa yang Dapat Dipelajari

1. **Shared hosting tidak akan pernah cukup** untuk SaaS — VPS atau dedicated server adalah keharusan begitu melewati skala tertentu.
2. **Docker bukan hanya untuk development** — lingkungan yang reproducible mencegah "works on my machine".
3. **Redis via unix socket** lebih cepat daripada TCP — setiap milidetik berarti saat melayani ratusan klinik.
4. **Configuration management yang baik** — jangan pernah hardcode credentials, dan pastikan konfigurasi development/production terpisah.
5. **Dokumentasi infrastruktur** penting — saat ada krisis, tidak ada waktu untuk membaca kode untuk mencari konfigurasi.
