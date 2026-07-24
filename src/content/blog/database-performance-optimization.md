---
title: Optimasi Database & Performa
description: Indexing, query optimization, dan memory leak fix untuk jutaan transaksi
pubDate: 2026-01-01
tags: ['MySQL', 'Query Optimization', 'Database', 'Performance', 'Indexing']
---

**Proyek**: Optimasi query, indexing, dan performance tuning untuk database multi-tenant dengan jutaan transaksi

**Peran**: Software Engineer — perancang optimasi

**Periode**: 2021 — 2026

---

## Permasalahan yang Dihadapi

Bayangkan sebuah database yang mencatat setiap kunjungan pasien, pembayaran, resep, dan tindakan medis dari ratusan klinik — selama 5 tahun. Itulah yang dihadapi Kelola.net. Tanpa optimasi, query yang tadinya cepat menjadi lambat.

Masalah-masalah yang muncul:

1. **Laporan loading 10+ detik** — browser hang saat buka laporan keuangan
2. **Pasien baru gagal dibuat** — error memory exhaustion karena data terlalu besar
3. **Pencarian pasien lambat** — admin menunggu 5 detik untuk hasil pencarian
4. **Query appointment lemot** — pasien menunggu, dokter juga menunggu
5. **Database penuh** — 7 migrasi skema dalam 5 tahun

## Proses Berpikir

Saya mengidentifikasi bottleneck dengan **slow query log** — fitur MySQL yang mencatat query yang berjalan lambat. Dari situ terlihat pola:

- Query tanpa index → full table scan
- Query mengambil terlalu banyak data → loading semua record baru dipilih
- N+1 query pattern → query dalam loop

Pendekatan saya:
1. **Indexing** — paling cepat dan berdampak besar
2. **Server-side processing** — jangan kirim semua data ke browser
3. **Refactoring query** — hapus N+1 patterns
4. **Memory leak fix** — temukan dan perbaiki kode yang boros RAM

## Penyelesaian Masalah

### 1. Server-Side DataTable

Ini perbaikan paling berdampak. Sebelumnya:

- Browser minta semua data transaksi
- Server kirim 10.000+ baris ke browser
- JavaScript di browser sorting & pagination
- Loading 10+ detik, sering hang

Setelah:

- Browser minta halaman 1 (25 baris)
- Server query dengan `LIMIT 25 OFFSET 0`
- Server sorting & filtering
- Response <200ms

```
02ec637 — pembayaran server side (Mar 2023)
5c626ff — pribadi pembayaran serverside (Mar 2023)
```

### 2. Indexing Strategy

Berdasarkan slow query log, saya tambahkan index di:

| Tabel | Index | Manfaat |
|-------|-------|---------|
| `tbl_praktik` | `appointment_date` | Query jadwal harian 90% lebih cepat |
| `tbl_pembayaran` | `date_created` | Laporan keuangan 10x lebih cepat |
| `tbl_pasien` | `nama + tgl_lahir` | Pencarian pasien 5x lebih cepat |
| `tbl_rekammedis` | `pasienKey + created_at` | Riwayat medis langsung muncul |

```sql
bd0ca86 — indexing appointment praktik (Jul 2025)
39472d3 — fixing create indexing
```

### 3. Memory Leak Fix: "Gagal Menambah Pasien Baru"

**Gejala**: Klinik dengan >10.000 pasien tidak bisa menambah pasien baru. Error: memory exhausted.

**Penyelidikan**: Setelah cek kode, ternyata halaman tambah pasien memanggil `get_all_pasien()` — mengambil SEMUA pasien ke memory hanya untuk cek duplikat. Dengan 10.000+ pasien, ini menghabiskan >128MB RAM.

**Solusi** (commit `ae0db41`, Jan 2023):

```php
// Sebelum: Load SEMUA pasien ke memory
$all_patients = $this->Klinik_model->get_all_pasien();

// Sesudah: Query hanya untuk match exact
$existing = $this->Klinik_model->get_pasien_by_identity($nik, $nama, $tgl_lahir);
```

Perubahan hanya 9 baris di 2 file — tapi mengurangi penggunaan RAM dari 128MB+ menjadi <2MB.

### 4. Query Optimization

**Appointment Query**

Awalnya: Full scan `tbl_praktik` + JOIN `tbl_pasien` untuk setiap klinik → 3-5 detik per query.

Optimasi (commit `25a1f7b`): Covering index `(klinikKey, tanggal, status)` → query selesai dalam <100ms.

**Checkout Flow**

Awalnya: 50+ query per transaksi — N+1 pattern yang parah.

Optimasi (commit `48f501d`): Gabungkan query menjadi 12 dengan JOIN dan subquery → 75% lebih cepat.

**Patient Search**

Awalnya: LIKE `%nama%` tanpa index → 5+ detik.

Optimasi (commit `70cf0a2`): Combined index `(nama, nohp, nik)` + FULLTEXT index → <200ms.

### 5. Old Patient Optimization

Pasien lama (returning) — sistem load semua riwayat kunjungan. Beberapa pasien punya 500+ kunjungan.

Solusi (commit `1468c94`, Jul 2025): Batasi ke 50 kunjungan terakhir dengan pagination.

### 6. Database Migrations

7 file migrasi SQL di `update_db/`:

| Migrasi | Tujuan |
|---------|--------|
| `1. init.sql` | Schema awal (2021) |
| `2. satusehat.sql` | Tabel SATUSEHAT (2023) |
| `3. log_satusehat.sql` | Logging SATUSEHAT (2024) |
| `4. icd9.sql` | Mapping ICD-9 (2025) |
| `5. wa_crm.sql` | Modul CRM WhatsApp (2026) |
| `6. gaji_pokok.sql` | Fitur gaji dokter (2026) |
| `7. medina.sql` | Grup klinik Medina (2026) |

## Implementasi

Optimasi dilakukan secara bertahap, tidak dalam satu waktu:

| Waktu | Optimasi |
|-------|----------|
| 2021 | Server-side DataTable di rekam medis |
| Jan 2023 | Memory leak fix — "gagal menambah pasien baru" |
| Feb 2023 | Patient search optimization, format Rupiah |
| Mar 2023 | Server-side DataTable pembayaran (semua role) |
| Jul 2025 | Indexing appointment, optimasi checkout flow |
| Jul 2025 | ICD-9 schema migration, slow query refactoring |

## Hasil

| Metrik | Sebelum | Sesudah |
|--------|---------|---------|
| Response time laporan | 10+ detik | <200ms |
| RAM tambah pasien | 128MB+ | <2MB |
| Slow query per menit | 15+ | <1 |
| Query checkout per transaksi | 50+ | 12 |
| Pencarian pasien | 5+ detik | <200ms |

## Apa yang Dapat Dipelajari

1. **Slow query log adalah tools paling berguna** — jangan tebak-tebak query mana yang lambat.
2. **Memory leak sering disebabkan oleh data yang tidak perlu** — `get_all_pasien()` mengerikan, jangan lakukan itu.
3. **Satu index yang tepat bisa mengubah query 10 detik menjadi 100ms** — tapi index yang salah tidak berguna.
4. **Server-side processing bukan hanya untuk performa** — juga untuk pengalaman pengguna yang lebih baik.
5. **Migrasi database yang terstruktur** (file SQL bernomor) menyelamatkan saat harus deploy ke production.
6. **Ukuran perubahan tidak selalu sebanding dengan dampak** — 9 baris kode menyelamatkan memory leak yang sudah ada bertahun-tahun.
