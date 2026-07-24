---
title: Menghubungkan Klinik ke SATUSEHAT
description: Integrasi platform manajemen klinik dengan sistem SATUSEHAT Kementerian Kesehatan RI
pubDate: 2025-05-01
tags: ['REST API', 'OAuth2', 'JSON', 'ICD-10', 'ICD-9', 'FHIR', 'Healthcare']
---

**Proyek**: Integrasi platform manajemen klinik dengan sistem SATUSEHAT Kementerian Kesehatan RI

**Peran**: Software Engineer — perancang dan pengembang utama modul integrasi

**Periode**: Agustus 2023 — Mei 2025

---

## Permasalahan yang Dihadapi

Pada pertengahan 2023, Kementerian Kesehatan mewajibkan seluruh fasilitas kesehatan untuk mengirimkan data Rekam Medis Elektronik (RME) melalui platform SATUSEHAT. Ini menjadi masalah besar bagi Kelola.net yang melayani ratusan klinik gigi dan umum di Indonesia.

Tantangan yang muncul:

1. **Tidak ada pengalaman sebelumnya** — belum pernah integrasi dengan sistem pemerintah, apalagi yang menggunakan standar FHIR dan OAuth2
2. **Ratusan klinik, satu platform** — setiap klinik punya kredensial SATUSEHAT sendiri, tapi harus terintegrasi dalam satu sistem
3. **Data kesehatan sensitif** — error handling harus ketat karena data pasien tidak boleh hilang
4. **Klinik tetap beroperasi** — integrasi tidak boleh mengganggu aktivitas klinik sehari-hari

## Proses Berpikir

Pendekatan yang saya ambil adalah **memisahkan tanggung jawab**. SATUSEHAT adalah sistem eksternal yang tidak boleh memengaruhi performa database utama klinik. Saya memutuskan untuk:

- **Gunakan database terpisah** — log, token akses, dan antrean SATUSEHAT disimpan di database `newsatusehat`, terisolasi dari transaksi klinik
- **Buat konfigurasi per tenant** — setiap klinik punya kunci API sendiri yang bisa diatur dari panel admin, tanpa perlu mengubah kode
- **Siapkan environment staging** — klinik bisa uji coba dulu sebelum memproduksi data ke server resmi SATUSEHAT

## Penyelesaian Masalah

### 1. REST API Client untuk SATUSEHAT

Saya membangun `Satusehat.php` — sebuah controller sepanjang 377 baris yang menangani semua komunikasi dengan SATUSEHAT. Mulai dari:

- **OAuth2 authentication** — mendapatkan token akses dari server SATUSEHAT
- **CRUD Pasien** — lookup IHS (ID kesehatan nasional) dan registrasi pasien baru
- **SDMK** — verifikasi dokter dan perawat ke database nasional
- **Organization & Location** — registrasi klinik dan ruang praktik

### 2. Configurable Key System

Awalnya kunci SATUSEHAT di-*hardcode* di file konfigurasi. Setiap kali ada klinik baru, harus edit kode. Saya ubah agar kunci bisa dikonfigurasi dari panel admin:

```
commit edd6451 — satusehat integrasi key from panel (+107 lines)
```

Sekarang admin klinik bisa memasukkan kunci SATUSEHAT sendiri melalui form di dashboard.

### 3. Logging & Error Tracking

Saya membuat sistem logging khusus dengan:
- **Tabel log terpisah** — mencatat setiap transaksi ke SATUSEHAT
- **Detail error per transaksi** — jika gagal, bisa tahu persis penyebabnya
- **Resend queue** — jika gagal terkirim, bisa dikirim ulang dari panel

### 4. ICD-9 Mapping (2025)

Tantangan terbesar kedua. Setiap tindakan klinik harus dipetakan ke kode prosedur ICD-9 nasional. Saya membuat:
- `SatusehatICD9Model.php` — model database untuk mapping
- `mapping-icd.php` — antarmuka untuk admin memetakan tindakan
- Checkout otomatis mengirim kode ICD-9 bersama diagnosis

```
commit d0d05bd — mapping ICD-9 (1.443 baris perubahan, 8 file)
```

## Implementasi

Proyek ini berjalan dalam beberapa gelombang:

| Waktu | Capaian |
|-------|---------|
| Juli 2023 | Setup OAuth2, lookup pasien, verifikasi SDMK |
| Agustus 2023 | Encounter submission, registrasi organisasi & lokasi |
| Jan–Mar 2024 | Configurable key, tabel log, antrean error |
| Mei 2024 | Environment staging/production |
| Jul 2025 | Mapping ICD-9, integrasi checkout |

Total ~34 komit non-merge dengan melibatkan `Satusehat.php`, 2 model, dan database `newsatusehat`.

## Apa yang Dapat Dipelajari

1. **Integrasi dengan sistem pemerintah itu unik** — dokumentasi bisa berubah, endpoint bisa tidak terduga. Logging yang baik adalah penyelamat.
2. **Pemisahan database sangat penting** — jika SATUSEHAT lambat, klinik tetap bisa beroperasi normal karena database transaksional tidak terpengaruh.
3. **Konfigurasi per tenant dari panel** menghindari bottleneck — 100 klinik bisa daftar sendiri tanpa perlu developer turun tangan.
4. **Mapping ICD-9** mengajarkan bahwa standar nasional bisa diimplementasikan bertahap — mulai dari yang paling sering digunakan, lalu diperluas.
