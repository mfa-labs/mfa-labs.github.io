---
title: Arsitektur Multi-Tenant & 12 Role
description: Mengelola ratusan klinik dalam satu platform dengan isolasi data dan role-based routing
pubDate: 2026-01-01
tags: ['PHP', 'CodeIgniter', 'MySQL', 'Architecture', 'RBAC']
---

**Proyek**: Arsitektur multi-tenant dengan 12 user role, isolasi data, dan grup klinik berbagi

**Peran**: Software Engineer — perancang dan pengembang arsitektur

**Periode**: 2021 — 2026

---

## Permasalahan yang Dihadapi

Kelola.net bukan aplikasi untuk satu klinik — ini platform yang melayani ratusan klinik dengan model bisnis berbeda. Ada klinik gigi, klinik umum, praktik pribadi dokter, klinik BPJS, dan grup klinik multi-cabang.

Tantangan utama:

1. **Data klinik A tidak boleh bocor ke klinik B** — isolasi data mutlak
2. **Setiap role punya kebutuhan berbeda** — apa yang dilihat owner tidak sama dengan yang dilihat dokter
3. **Klinik dalam satu grup perlu berbagi data** — tapi tidak dengan klinik di luar grup
4. **Role terus bertambah** — arsitektur harus bisa menampung role baru

## Proses Berpikir

Saya memilih pendekatan **hash-based isolation with role-based routing**:

- Setiap data di database ditandai dengan `klinikKey` (hash 128 karakter) — ini yang memisahkan data antar klinik
- Setiap user punya role — ini yang menentukan fitur apa yang bisa diakses
- Grup klinik punya mekanisme berbagi terpisah — data tetap terisolasi, tapi bisa di-share secara eksplisit

Saya juga membuat struktur direktori per role — setiap role punya folder controller sendiri. Ini membuat kode lebih terorganisir dan memudahkan penambahan role baru.

## Penyelesaian Masalah

### 1. Data Isolation via Hash Keys

Setiap query database membawa `klinikKey` dan `praktikKey` — dua hash 128 karakter yang:
- Dibuat saat klinik baru daftar
- Disimpan di session user setelah login
- Dipakai sebagai WHERE clause di setiap query
- Tidak pernah terekspos ke frontend

```
commit 05ea1e3 — keypraktik on session (Jul 2025)
```

### 2. 12 Role Architecture

Setiap role punya folder sendiri:

| Role | Folder Controller | Kegunaan |
|------|------------------|----------|
| Klinik | `klinik/` | Manajemen klinik penuh |
| Dokter | `dokter/` | Workflow dokter |
| Admin Klinik | `admin-klinik/` | Tugas administratif |
| Owner | `owner/` | Multi-clinic ownership |
| Partner | `affiliate/` | Program afiliasi |
| Super Admin | `players/` | Administrasi platform |
| Praktik Pribadi | `praktik-pribadi/` | Dokter solo |
| Klinik BPJS | `bpjs/` | Klinik BPJS |
| Umum | `umum/` | Klinik umum |
| Klinik Umum | `klinik-umum/` | Manajemen klinik umum |
| Dokter Klinik Umum | `dokter-klinik-umum/` | Dokter di klinik umum |
| Admin Klinik Umum | `admin-klinik-umum/` | Admin klinik umum |

Role bertambah seiring waktu:
```
9580d8c (Feb 2024) — add role umum and doktor
a81ad25 — Styling klinik (role klinik pertama)
44be132 (Sep 2023) — just klinik (membatasi akses)
06c3447 — Revert "just klinik" (terlalu ketat)
1cf56d6 — klinik and players only (model akses final)
```

### 3. Shared Clinic Groups

Beberapa klinik butuh berbagi data pasien — misalnya grup Ranu yang punya beberapa cabang:

| Grup | Klinik | Fitur |
|------|--------|-------|
| Ranu | RanuDC, Ranu Alphania | RM gabungan |
| Densglo | — | Grup dental |
| Jasmine | — | Sharing multi-cabang |
| Vialyne | — | Rujukan antar klinik |
| DiamondDC | — | Chain dental |

```
bb32002 (Sep 2023) — combine rm (Ranu group)
e32573f (Apr 2025) — combine rm jasmine
2c3d1be (Apr 2025) — merge rm vialyne
145f91e (Mar 2025) — diamonddc klinik bersama
5ba18c9 (Mar 2025) — fix: klinik bersama id user
```

### 4. Auth Routing

Flow login:
1. User input kredensial
2. Sistem deteksi role dari `tbl_user`
3. Redirect ke dashboard sesuai role
4. Jika login dari perangkat baru → OTP WhatsApp

### 5. CRUD Role Management

Super admin bisa kelola:
- Buat user baru dengan role tertentu
- Atur akses per tenant
- Reset password via OTP WhatsApp

## Implementasi

Arsitektur ini tidak dibangun dalam satu sprint — berkembang selama 5 tahun seiring bertambahnya jenis klinik yang bergabung.

| Waktu | Role Baru |
|-------|-----------|
| 2021 | Klinik, Dokter, Admin Klinik, Owner |
| 2022 | Praktik Pribadi, BPJS |
| 2023 | Partner/Affiliate |
| 2024 | Umum, Klinik Umum, Dokter Klinik Umum, Admin Klinik Umum |
| 2025 | Shared clinic groups (Ranu, Jasmine, Vialyne, DiamondDC) |

## Apa yang Dapat Dipelajari

1. **Hash-based isolation** lebih sederhana dan efektif daripada database terpisah per tenant — selama hash dikelola dengan benar.
2. **Role akan bertambah** — desain arsitektur yang memungkinkan penambahan role tanpa mengubah yang sudah ada.
3. **Berbagi data antar klinik itu rumit** — butuh keseimbangan antara kemudahan berbagi dan keamanan data.
4. **Folder per role** adalah keputusan struktural yang tepat — meskipun ada duplikasi kode, masing-masing role punya kebutuhan yang genuinely berbeda.
5. **Session + OTP** memberikan keamanan yang cukup tanpa mengorbankan kemudahan penggunaan.
