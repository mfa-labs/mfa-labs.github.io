---
title: Migrasi PHP 7 ke PHP 8
description: Upgrade platform SaaS tanpa downtime untuk ratusan klinik
---

# Migrasi PHP 7 ke PHP 8: Upgrade Platform Tanpa Downtime

**Proyek**: Migrasi platform SaaS dari PHP 7 ke PHP 8.1 tanpa menghentikan operasional klinik
**Peran**: Software Engineer — perencana dan pelaksana migrasi
**Periode**: November — Desember 2024

---

## Permasalahan yang Dihadapi

Setelah bertahun-tahun di PHP 7, platform mulai menunjukkan masalah:

1. **Keamanan** — PHP 7 sudah tidak mendapat update security
2. **Library usang** — Dompdf versi lama tidak bisa di-upgrade tanpa PHP 8
3. **Performa menurun** — tidak bisa memanfaatkan JIT compilation PHP 8
4. **Ratusan klinik bergantung** — migrasi harus tanpa downtime

Yang paling menakutkan: PHP 8 menghapus banyak fungsi yang dipakai di mana-mana (`each()`, `create_function()`, dan puluhan lainnya). Kalau ada yang terlewat, sistem bisa error tanpa sepengetahuan.

## Proses Berpikir

Saya ambil pendekatan **in-place dengan rollback capability**:

1. **Siapkan server cadangan** dengan PHP 7 — jika terjadi krisis, tinggal switch DNS
2. **Upgrade bertahap per modul** — bukan all-at-once
3. **Test manual setiap modul** — automated test tidak cukup, harus test langsung
4. **Prioritaskan modul kritis** — login, kasir, laporan keuangan dulu, baru fitur pendukung

## Penyelesaian Masalah

### 1. Upgrade Dompdf ke 2.0

Ini tantangan terbesar. Dompdf versi lama tidak kompatibel dengan PHP 8. Upgrade langsung ke 2.0:

```
87efd22 — fix: v81 - upgrade dompdf (composer.json, 3 baris)
```

Tapi setelah upgrade, gambar di invoice PDF rusak — butuh fix lanjutan:

```
4e83442 — fix bug dompdf image - klinik (Sep 2024, sebelum migrasi)
```

### 2. Fungsi yang Dihapus

PHP 8 menghapus `each()`, `create_function()`, `__autoload()`, dan `mysql_*` shim:

```
59e039f — fix: v81 php - models
```

**each()** → diganti dengan `foreach` loop
**create_function()** → diganti anonymous function
**__autoload()** → diganti `spl_autoload_register()`

### 3. Type System Fixes — Yang Paling Banyak Membuang Waktu

PHP 8 punya tipe data yang lebih ketat. Ini menyebabkan bug di tempat yang tidak terduga:

| Area | Error | Fix |
|------|-------|-----|
| **Laporan harian & jasmed** (`b19d939`, `117eee5`) | Perbandingan `int` vs `string` di perhitungan tanggal | Casting eksplisit |
| **Detail pasien** (`5f005c2`, `cb4b527`) | `null` dikirim ke fungsi yang期待 `string` | Null coalescing |
| **Tambah pasien baru** (`2721105`, `c671280`) | `count()` dipanggil pada `null` | Guard clause |
| **Send email invoice** (`ebcb42b`, `2f68c44`) | Method signature PHPMailer berubah | Upgrade + parameter fix |
| **Pemeriksaan dokter umum** (`bc51407`) | `undefined array key` di checkbox | `isset()` |
| **Klinik model** (`ecb792b`) | `float` ke `int` truncation | Casting eksplisit |

### 4. HTACCESS & Konfigurasi Server

PHP 8.1 butuh konfigurasi Apache yang berbeda:

```
fe3307d — htaccess
8c2dfec — fix: v81 - htaccess and last update
9b1bc57 — fix: v81 - htaccess and upgrade version dompdf
```

- Rewrite rules untuk PHP-FPM handler
- Security headers update
- `php_value` directives untuk PHP 8.1
- `Options -Indexes` hardening

### 5. Redis Session Handler

PHP 8 mengubah cara ekstensi Redis menangani cache miss — return `null` bukan `false`:

```
aa3bebe — return null for redis
```

## Regression Testing

Setelah semua fix, saya test manual setiap modul:

1. Login sebagai 12 role berbeda → menjalankan workflow utama
2. Bandingkan hasil laporan keuangan dengan output PHP 7
3. Cek invoice PDF side-by-side
4. Test SATUSEHAT integration di staging
5. Kirim WhatsApp notifikasi dan konfirmasi delivery

## Implementasi

| Waktu | Capaian |
|-------|---------|
| 26 Nov 2024 | Dompdf upgrade, htaccess |
| 27 Nov 2024 | Fix laporan harian & jasmed |
| 29 Nov 2024 | Fix models, detail pasien |
| 2 Des 2024 | Fix tambah pasien baru |
| 9 Des 2024 | Fix email invoice, pemeriksaan dokter |
| 8 Des 2024 | Fix Redis session |

Total ~13 komit non-merge. Zero downtime.

## Apa yang Dapat Dipelajari

1. **Migrasi versi PHP adalah proyek berisiko tinggi** — persiapan rollback adalah prioritas.
2. **Type system PHP 8 lebih ketat** — yang tadinya "hanya warning" berubah jadi error fatal.
3. **Regression testing manual tetap penting** — automated test tidak bisa mencakup semua skenario di SaaS dengan banyak role.
4. **Library dependency (Dompdf) bisa jadi bottleneck** — upgrade library sering kali lebih sulit daripada upgrade PHP itu sendiri.
5. **Catat setiap error yang ditemui** — dokumentasi ini berguna saat migrasi berikutnya.
