---
title: Sistem Laporan Keuangan & Jasa Medis
description: Multi-role financial system dengan server-side processing untuk ratusan klinik
---

# Sistem Laporan Keuangan & Jasa Medis: Mengelola Keuangan Ratusan Klinik

**Proyek**: Sistem laporan multi-role dengan server-side processing, export Excel/PDF, dan perhitungan jasa medis
**Peran**: Software Engineer — perancang dan pengembang utama
**Periode**: Juni 2021 — Maret 2025

---

## Permasalahan yang Dihadapi

Setiap hari, ratusan klinik menghasilkan ribuan transaksi. Pemilik klinik butuh laporan laba rugi, dokter butuh perhitungan jasa medis, dan Dinas Kesehatan butuh data SKP. Tantangannya:

1. **Data terlalu besar untuk client-side** — browser hang saat load ribuan transaksi
2. **Setiap role punya kebutuhan berbeda** — owner lihat aggregat, BPJS lihat klaim, Dinkes lihat SKP
3. **Perhitungan Jasa Medis rumit** — fee dokter berbeda per tindakan, dan ada kasus tanggal 31 yang error
4. **Laporan harus bisa diexport** — Excel untuk akuntan, PDF untuk pemilik klinik
5. **Format Rupiah tidak konsisten** — Rp1.000 berbeda dengan Rp1000 tergantung role

## Proses Berpikir

Pendekatan saya: **role-based reporting dengan server-side processing**. Artinya:

- Setiap role punya controller dan view laporan sendiri
- Data diproses di server, bukan di browser — browser hanya terima hasil akhir
- Semua laporan pakai format yang sama: filter tanggal → query → paginasi → export opsional
- Jasa Medis dihitung per-transaksi, bukan per-bulan, untuk menghindari error tanggal 31

## Penyelesaian Masalah

### 1. Server-Side DataTable

Ini perubahan paling berdampak. Sebelumnya, laporan mengambil SEMUA data ke browser, lalu JavaScript yang memproses. Akibatnya:

- Klinik dengan 10.000+ transaksi: loading lebih dari 10 detik
- Browser sering hang atau crash

Saya migrasikan ke server-side DataTable — browser hanya minta data per halaman, server yang sorting dan filter:

```
02ec637 — pembayaran server side (Mar 2023)
5c626ff — pribadi pembayaran serverside
964ea38 — klinik tagihan serverside
dae9182 — klinik umum tagihan serverside
fe013ce — admin umum pembayaran serverside
```

Hasil: response time turun dari 10+ detik menjadi <200ms.

### 2. Multi-Role Reports

| Role | Laporan yang Tersedia |
|------|----------------------|
| Klinik | Dashboard keuangan lengkap |
| Praktik Pribadi | Revenue & biaya praktik |
| Owner | Breakdown pendapatan per klinik |
| BPJS | Laporan klaim asuransi |
| Dinkes | Laporan SKP dokter, laporan ranu |

Salah satu fitur yang paling berguna: **detail biaya klinik owner** — pemilik beberapa klinik bisa lihat pendapatan tiap klinik dalam satu halaman (commit `3254447`).

### 3. Jasa Medis — Perhitungan Fee Dokter

Sistem Jasmed menghitung bagi hasil antara klinik dan dokter per tindakan. Tiga tantangan utama:

**Kasus Tanggal 31**

Query awal menggunakan `date('Y-m')` untuk filter bulan, tapi ini menyebabkan error di bulan yang punya tanggal 31. Misalnya, 31 Januari dianggap sebagai 1 Februari oleh fungsi `date()`. Butuh 4 komit untuk memperbaikinya:

```
1a1e380 — test fixing tgl 31 jasmed
f0490ef — test fixing 31 jasmed
6836022 — jasmed 31 fixing pribadi
6b964ac — fixing tanggal 31 laporan jasmed range
```

**PHP 8 Regression**

Migrasi PHP 8.1 membuat perhitungan Jasmed error karena tipe data lebih ketat:

```
b19d939 — fix: v81 php - laporan harian dan laporan jasmed
117eee5 — fix: v81 php - laporan harian dan laporan jasmed
```

**Diskon Tidak Mengurangi Jasmed**

Bug di mana diskon tidak mengurangi perhitungan Jasa Medis — dokter tetap dapat fee penuh meskipun pasien dapat diskon:

```
08e5cf7 — medina diskon tidak mengurangi jasmed di laporan jasmed
b15af94 — medina pendapatan lain diskon tidak mengurangi jasmed
```

### 4. Laporan Dinkes

Untuk memenuhi kebutuhan Dinas Kesehatan:

```
608d0d4 — laporan dinkes (Feb 2024) — laporan SKP dokter
15864b3 — dinkes pribadi
3d3e8ad — implemen laporan dinkes
24e3f1f — laporan dinkes dokter (Aug 2024)
767b52a — laporan dinkes ranu (Mar 2025) — laporan rawat inap
2281d7e — skp ranu dokter
```

### 5. Export System

- **Excel** via PhpSpreadsheet — format yang bisa dibaca akuntan
- **PDF** via Dompdf — dengan branding klinik
- **Custom date range** — semua laporan mendukung filter tanggal (commit `f78c668`)

### 6. Laporan Batal Pasien

Melacak pembatalan janji dengan informasi siapa yang membatalkan:

```
b585ae3 — laporan batal pasien (Mar 2022)
c8e6032 — fix: pembatalan created_by (May 2024)
98003dd — feat: created by on cancel praktik
```

### 7. Format Rupiah yang Konsisten

Semua role sebelumnya punya format Rupiah berbeda. Saya buat library standar:

```
commit d422806 — Rp without space lib (+324 baris)
```

Sekarang `Rp1.000.000` tampil konsisten di semua role.

## Implementasi

| Waktu | Capaian |
|-------|---------|
| Jun 2021 | Laporan harian klinik & praktik |
| Aug 2021 | Export Excel, range tanggal, diskon |
| Jan 2022 | Laporan tahunan, detail jasamedis |
| Mar 2023 | Server-side DataTable, format Rupiah |
| Jun 2023 | Fix tanggal 31 Jasa Medis |
| Feb 2024 | Laporan Dinkes, SKP |
| Nov 2024 | PHP 8 migration fix |
| Mar 2025 | Laporan ranu, SKP dokter |
| Jun 2026 | Fix diskon Jasmed |

Total ~44 komit non-merge.

## Apa yang Dapat Dipelajari

1. **Server-side processing bukan opsi, tapi keharusan** untuk data dalam skala besar. Client-side processing tidak akan scalable.
2. **Bugs tanggal 31** adalah contoh klasik edge case yang tidak terpikir sampai terjadi — selalu test dengan berbagai tanggal.
3. **Pemisahan laporan per role** membuat kode lebih terstruktur dan memudahkan penambahan role baru.
4. **Format konsisten** (Rupiah tanpa spasi) adalah detail kecil yang dampaknya besar untuk pengalaman pengguna.
5. **Regression testing** setelah migrasi PHP 8 sangat penting — perubahan kecil di tipe data bisa merusak perhitungan keuangan.
