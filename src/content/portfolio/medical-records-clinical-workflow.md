---
title: Rekam Medis Elektronik & Alur Kerja Klinik
description: Odontogram digital, ICD coding, appointment booking, dan berbagi data antar klinik
---

# Rekam Medis Elektronik & Alur Kerja Klinik: Dari Odontogram ke Berbagi Data

**Proyek**: Sistem rekam medis elektronik untuk klinik gigi dan umum — odontogram digital, ICD coding, appointment booking
**Peran**: Software Engineer — perancang dan pengembang utama
**Periode**: Juli 2021 — Juni 2026

---

## Permasalahan yang Dihadapi

Klinik gigi punya kebutuhan unik yang tidak dimiliki klinik umum — odontogram (peta gigi digital) untuk mencatat kondisi setiap gigi pasien. Selain itu, ada tantangan:

1. **Dokter gigi butuh charting visual** — tidak cukup dengan catatan teks
2. **Standar diagnosis nasional** — ICD-10 untuk diagnosa, ICD-9 untuk tindakan
3. **Pasien bisa ke beberapa klinik dalam satu grup** — data medis harus bisa dibagi
4. **Alur kunjungan pasien** — dari daftar sampai pulang, ada 5 status yang harus dilacak
5. **Bug aneh di data gigi kosong** — akun dokter tertentu error tanpa sebab yang jelas

## Proses Berpikir

Saya membangun sistem RM (Rekam Medis) secara bertahap:

1. **Mulai dari yang paling dasar** — form rekam medis sederhana untuk mencatat diagnosa dan tindakan
2. **Tambahkan odontogram** — peta gigi interaktif untuk klinik gigi
3. **Integrasikan dengan ICD** — kode diagnosis dan prosedur standar nasional
4. **Fitur berbagi** — grup klinik bisa berbagi data pasien
5. **Optimasi** — setelah semua fitur jalan, baru fokus ke performa

## Penyelesaian Masalah

### 1. Odontogram — Peta Gigi Digital

Odontogram adalah grid visual yang menampilkan semua gigi pasien. Setiap gigi punya status: karies, tambalan, gigi hilang, dan lainnya — dengan kode warna berbeda.

Saya render odontogram di server-side dengan update via AJAX. Ini memungkinkan dokter gigi melihat kondisi gigi secara visual tanpa perlu membaca catatan teks.

### 2. ICD-10 & ICD-9 Coding

Diagnosa menggunakan kode ICD-10, tindakan menggunakan ICD-9. Tantangan terbesar adalah mapping — ada ribuan tindakan klinik yang harus dipetakan ke kode ICD-9.

```
commit d0d05bd — mapping ICD-9 (1.443 baris perubahan, 8 file)
```

Termasuk `SatusehatICD9Model.php` dan antarmuka mapping yang memudahkan admin memetakan tindakan.

### 3. 5-Status Checkout Progression

Setiap kunjungan pasien melalui 5 status yang dilacak dengan timestamp:

**Menunggu → Diperiksa → Selesai Diperiksa → Pembayaran → Selesai**

Saya optimasi alur checkout karena awalnya terlalu banyak query:

```
48f501d — optimize db checkout flow (Jul 2025)
bd0ca86 — indexing appointment praktik
```

### 4. Booking & Appointment System

Saya buat sistem booking manual yang berbeda untuk setiap role — karena admin klinik tidak perlu melihat jadwal yang sama dengan dokter:

```
8b57c99 — manual book - admin
a3423d1 — manual book - klinik
b71ec2c — booking manual - klinik umum
7273108 — booking manual - umum
96bec31 — booking manual - admin umum
abe375c — booking manual - pribadi
```

Setiap role punya view booking yang disesuaikan — daftar pasien, slot waktu, dan tindakan yang relevan.

### 5. Combined & Shared Medical Records

Klinik dalam satu grup perlu berbagi data pasien. Saya implementasikan secara bertahap:

```
bb32002 (Sep 2023) — combine rm — grup RanuDC
fa4340f (Nov 2024) — fixing sharing rm on perawatan
e32573f (Apr 2025) — combine rm jasmine
2c3d1be (Apr 2025) — merge rm vialyne
c528430 (Jul 2024) — dentinia aggregat rm
```

### 6. Bug Fix: RM Data Gigi Kosong

Bug paling misterius: akun dokter tertentu error saat buka RM. Setelah diselidiki, ternyata odontogram selalu mengasumsikan ada data gigi. Kalau dokter itu belum pernah mengisi data gigi pasien, sistem crash.

```
b5c6114 — fixing rm data gigi kosong
1e7f0d6 — fixing rm data gigi kosong
d8f121a — fix: tidak ada data gigi di rm akun dokter
2af011f — fix: gigi kosong rm dokter
```

Solusi: tambahkan pengecekan apakah data gigi ada sebelum merender odontogram.

### 7. Yodental Implementation (Aug 2024)

Implementasi RM lengkap untuk grup klinik Yodental — dengan view berbeda untuk klinik, admin, dan dokter:

```
3304ebe — yodental: klinik rm
191a853 — yodental: klinik rm
1d92346 — yodental: admin rm
6ea24e1 — yodental: dokter rm
55c9324 — yodental: booking
```

### 8. Alur Pemeriksaan

Saya integrasikan pemeriksaan dengan billing — biaya bisa langsung ditambahkan dari RM:

```
155c73e — biaya di rekam medis pemeriksaan (Jun 2025)
c21174b — fix periksakan langsung dari rm
c7d6fa4 — fixing periksakan dokter oldpasien
```

## Implementasi

| Waktu | Capaian |
|-------|---------|
| Jul 2021 | RM dasar, odontogram |
| Jun 2023 | Booking manual untuk semua role |
| Sep 2023 | Combined RM untuk grup klinik |
| Jul 2024 | Yodental: RM multi-role |
| Jul 2025 | ICD-9 mapping, optimasi checkout |
| Mar 2026 | Fix RM data gigi kosong |

Total ~42 komit non-merge.

## Apa yang Dapat Dipelajari

1. **Fitur khusus industri (odontogram) membutuhkan pendekatan khusus** — tidak bisa pakai komponen generic.
2. **Edge case "data kosong" sering terlewat** — selalu test dengan kondisi tanpa data.
3. **Fitur berbagi data antar klinik** harus diimplementasikan hati-hati — privasi pasien tetap prioritas.
4. **Booking system yang berbeda per role** lebih baik daripada satu system untuk semua — karena kebutuhan setiap role memang berbeda.
5. **Optimasi setelah fitur jalan** — jangan optimasi sebelum yakin fiturnya benar.
