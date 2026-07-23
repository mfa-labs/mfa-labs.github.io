---
title: Sistem Pembayaran & Kasir
description: Multi-metode pembayaran dengan invoice, hutang/piutang, dan server-side DataTable
---

# Sistem Pembayaran & Kasir: Multi-Metode dengan Server-Side Processing

**Proyek**: Sistem pembayaran multi-metode dengan invoice, hutang/piutang, diskon bertingkat, dan server-side DataTable
**Peran**: Software Engineer — perancang dan pengembang utama
**Periode**: Agustus 2021 — Maret 2025

---

## Permasalahan yang Dihadapi

Klinik di Indonesia melayani pembayaran dengan berbagai metode — tunai, transfer, kartu debit/kredit, BPJS, dan hutang. Sistem kasir harus menangani semuanya dengan cepat dan akurat.

Tantangan:

1. **Multi-metode dalam satu transaksi** — pasien bisa bayar sebagian tunai, sebagian transfer
2. **Diskon bertingkat** — diskon per tindakan dan diskon total, terkadang ada bug perhitungan
3. **Invoice harus profesional** — pasien butuh bukti pembayaran yang rapi
4. **Hutang pasien** — track siapa yang masih punya tanggungan
5. **Data pembayaran besar** — ribuan transaksi per bulan, browser hang

## Proses Berpikir

Saya bagi sistem menjadi beberapa modul:

- **Payment capture** — menangani input pembayaran dengan berbagai metode
- **Invoice engine** — generate PDF bukti pembayaran via Dompdf
- **Debt tracker** — mencatat hutang dan pelunasan
- **DataTable server-side** — menampilkan riwayat pembayaran tanpa loading lama

Saya juga standarisasi format Rupiah — karena setiap role sebelumnya punya format sendiri yang membingungkan.

## Penyelesaian Masalah

### 1. Multi-Metode Pembayaran

Setiap metode pembayaran adalah tipe transaksi terpisah dengan validasi sendiri:

- **Tunai** — hitung kembalian otomatis
- **Transfer** — verifikasi manual oleh admin
- **Kartu debit/kredit** — dengan referensi merchant
- **BPJS** — integrasi klaim asuransi
- **Hutang** — bayar sebagian, sisanya dicatat

```
commit 17adeb8 — pembayaran diskon hutang
```

### 2. Sistem Diskon

Diskon bisa diterapkan di level tindakan (per-procedure) atau level total invoice. Beberapa bug yang ditemui:

- `21e98bd` — diskon tindakan praktik (pertama kali)
- `499c0d2` — detail diskon tindakan klinik (multilevel)
- `a355f20` — fix bugs diskon (perhitungan diskon di pembayaran parsial)
- `0d199fa` — fix: diskon tindakan (pembulatan diskon)

### 3. Invoice Generation

Invoice PDF via Dompdf — dengan diagnosis pasien tercetak di invoice:

```
8a33b06 (Jul 2021) — diagnosa di print invoice
058cf9a (Aug 2021) — print diagnosa detail pembayaran
4e83442 (Sep 2024) — fix bug dompdf image - klinik
ebcb42b / 2f68c44 (Dec 2024) — fix: v81 php - send email invoice
```

Saya juga dukung thermal printer — format PDF sempit yang umum di klinik Indonesia.

### 4. Server-Side DataTable

Migrasi dari client-side ke server-side:

```
223189e — admin kasir server side (Feb 2023)
27b3b60 — rupiah on admin kasir
d422806 — Rp without space lib (324 baris)
02ec637 — pembayaran server side (Mar 2023)
5c626ff — pribadi pembayaran serverside
b20ed3c — fixing admin kasir model
240deb4 — umum pembayaran serverside
5a28f21 — fixing search pembayaran pribadi
```

### 5. Format Rupiah Standar

Semua role dulunya punya format Rupiah berbeda. Saya buat library `Rp without space` yang memastikan format `Rp1.000.000` konsisten di semua role.

### 6. Hutang/Piutang

Setiap hutang mencatat:
- Jumlah awal
- Jumlah dibayar
- Sisa
- Status (aktif/lunas)

```
commit d64f6fd — detail pembayaran (May 2022)
```

### 7. WhatsApp Payment Receipt (2026)

Integrasi dengan modul CRM WhatsApp:

```
beee9ce (Jun 2026) — bukti bayar WA
bfeb82a (Jun 2026) — invoice kirim wa
```

## Implementasi

| Waktu | Capaian |
|-------|---------|
| Agu 2021 | Multi-metode, diskon, invoice PDF |
| Mei 2022 | Detail pembayaran, hutang tracking |
| Feb 2023 | Server-side DataTable, format Rupiah |
| Sep 2024 | Fix bugs diskon, dompdf image |
| Des 2024 | PHP 8 email invoice fix |
| Jun 2026 | Integrasi WhatsApp payment receipt |

Total ~33 komit non-merge.

## Apa yang Dapat Dipelajari

1. **Multi-metode pembayaran** harus didesain fleksibel — metode baru bisa muncul kapan saja.
2. **Diskon bertingkat rawan bug** — selalu test kombinasi diskon per-tindakan + diskon total.
3. **Format Rupiah konsisten** adalah detail yang dampaknya besar untuk kepercayaan pengguna.
4. **Server-side DataTable adalah solusi untuk data besar** — client-side tidak akan pernah cukup.
5. **Integrasi dengan modul lain (WhatsApp)** menambah nilai tanpa harus membuat ulang dari nol.
