# Workshop Pemanfaatan AI untuk Tenaga Kependidikan

**Fakultas** — Membuat Tools Administrasi dengan Gemini Canvas

---

## 🎯 Tujuan Workshop

Setelah mengikuti workshop ini, peserta mampu:

- Memahami cara kerja **Gemini Canvas** untuk membuat aplikasi web tanpa coding
- Membuat 4 tools utama administrasi perkantoran:
  - ✅ **Tools Surat Resmi** — generator surat otomatis
  - ✅ **Tools SOP** — penyusun SOP terstruktur
  - ✅ **Tools Laporan** — perapih data jadi laporan
  - ✅ **Tools Notulensi** — pencatat notulensi rapat
- Menggunakan tools yang sudah dibuat dalam pekerjaan sehari-hari

---

## 📋 Agenda

| Waktu | Sesi |
|---|---|
| 08.00 – 08.30 | Registrasi & Pembukaan |
| 08.30 – 09.00 | **Sesi 1:** Pengenalan Gemini Canvas |
| 09.00 – 10.00 | **Sesi 2:** Praktik — Tools Surat Resmi |
| 10.00 – 10.45 | **Sesi 3:** Praktik — Tools SOP |
| 10.45 – 11.00 | Istirahat |
| 11.00 – 12.00 | **Sesi 4:** Praktik — Tools Laporan |
| 12.00 – 13.00 | Ishoma |
| 13.00 – 14.00 | **Sesi 5:** Praktik — Tools Notulensi |
| 14.00 – 15.00 | **Sesi 6:** Sesi Bebas — Bikin Tools Sendiri |
| 15.00 – 16.00 | Presentasi Hasil & Penutupan |

---

## 🧠 Sesi 1: Pengenalan Gemini Canvas

### 1.1 Apa itu Gemini Canvas?

**Gemini Canvas** adalah fitur di Gemini (gemini.google.com) yang bisa membuat **aplikasi web interaktif** hanya dari deskripsi bahasa alami. **Tidak perlu bisa coding.**

Canvas terintegrasi langsung dengan Gemini — Anda jelaskan apa yang ingin dibuat, Gemini yang membuatkan kode di belakang layar, hasilnya langsung bisa dipakai.

### 1.2 Cara Membuka Canvas

| Cara | Langkah |
|---|---|
| **Cara 1** | Buka gemini.google.com → klik tombol **Canvas** (⚡ atau "+ Canvas") |
| **Cara 2** | Ketik langsung: *"Buka Canvas dan buatkan tools untuk..."* |

### 1.3 Cara Menggunakan Canvas

```
Anda ngobrol → Canvas bikin tools → Anda coba pakai → Minta revisi → Jadi!
```

- **Minta dibuatkan:** Deskripsikan tools yang Anda inginkan dalam Bahasa Indonesia
- **Coba langsung:** Tools langsung bisa diisi dan dipakai di browser
- **Minta revisi:** *"Tambah kolom ini", "Ganti warna", "Perbaiki format output"*
- **Simpan:** Canvas otomatis tersimpan di history Gemini Anda

### 1.4 Tips Berinteraksi dengan Canvas

| Lakukan | Jangan |
|---|---|
| Deskripsi yang jelas dan detail | Deskripsi terlalu umum |
| Mulai dari yang sederhana, lalu tambah fitur | Langsung minta yang rumit |
| Kasih contoh input/output yang diinginkan | Harap Canvas membaca pikiran |
| Minta revisi bertahap | Minta semuanya sekaligus |

---

## 📄 Sesi 2: Tools Surat Resmi

### 2.1 Konsep Tools

Tools surat resmi akan menjadi sebuah **form isian** yang ketika diisi, langsung menghasilkan **surat resmi yang rapi dan siap cetak**. Tidak perlu buka Word, tidak perlu atur margin.

### 2.2 Praktik — Prompt ke Canvas

Buka Gemini Canvas, lalu ketik prompt berikut:

**Prompt:**
> "Buatkan tools pembuatan surat resmi untuk administrasi fakultas. Tampilkan form isian dengan field berikut:
> - Jenis Surat (dropdown: Undangan, Tugas, Keterangan, Pengantar)
> - Nomor Surat (text)
> - Tanggal Surat (date picker)
> - Perihal (text panjang)
> - Nama Penerima (text)
> - Jabatan Penerima (text)
> - Isi Surat (textarea besar)
> - Nama Pengirim / Penandatangan (text)
> - Jabatan Pengirim (text)
> - NIP Pengirim (text)
>
> Setelah tombol 'Generate Surat' diklik, tampilkan surat lengkap dengan:
> - Kop surat: 'KEMENTERIAN PENDIDIKAN DAN KEBUDAYAAN\nUNIVERSITAS CONTOH\nFAKULTAS ILMU PENDIDIKAN'
> - Garis pembatas di bawah kop
> - Nomor, lampiran, perihal di kiri
> - Kepada Yth. [Nama Penerima]\n[Jabatan Penerima]\ndi tempat
> - Isi surat
> - Tempat dan tanggal
> - Nama pengirim + jabatan + NIP
> - Tersedia tombol 'Cetak / Print'
>
> Gunakan layout bersih, font formal (Times New Roman atau serif), warna hitam putih agar mirip surat resmi."

### 2.3 Hasil yang Diharapkan

Tools ini akan menampilkan:

1. **Form input** di sebelah kiri / atas
2. **Pratinjau surat** di sebelah kanan / bawah
3. Surat langsung berganti saat data diisi
4. Tombol **Cetak** untuk print / simpan PDF

### 2.4 Latihan Mandiri (20 menit)

1. Ketik prompt di atas ke Gemini Canvas
2. Coba isi form dengan data surat undangan rapat
3. Minta revisi: *"Tambah kolom 'Tembusan' di bagian bawah surat"*
4. Minta revisi: *"Ganti font jadi lebih formal"*

---

## 📋 Sesi 3: Tools SOP

### 3.1 Konsep Tools

Tools SOP akan membantu menyusun prosedur operasional standar dengan format yang **konsisten dan terstruktur**. User tinggal mengisi langkah-langkah, tools yang merapikan.

### 3.2 Praktik — Prompt ke Canvas

**Prompt:**
> "Buatkan tools penyusunan SOP (Standard Operating Procedure) untuk administrasi perkantoran. Tampilkan form isian:
> - Judul SOP (text)
> - Nomor Dokumen (text, contoh: SOP/FIP/001)
> - Tanggal Berlaku (date picker)
> - Unit / Bagian (text)
> - Tujuan SOP (textarea)
> - Ruang Lingkup (textarea)
> - Daftar Istilah / Definisi (textarea — satu istilah per baris dengan format: Istilah: Definisi)
> - Langkah Prosedur (dinamis — ada tombol 'Tambah Langkah' dan 'Hapus Langkah')
>   - Setiap langkah: Nomor otomatis, Deskripsi Langkah (textarea), PIC (text), Waktu (text, contoh: 5 menit)
> - Dokumen Terkait (textarea)
> - Disusun oleh (text)
> - Disetujui oleh (text)
>
> Output: tampilkan SOP lengkap dengan format rapi, bernomor, dan siap cetak dengan tombol Cetak. Gunakan format header formal seperti 'KEMENTERIAN PENDIDIKAN DAN KEBUDAYAAN' di atas lalu judul SOP."

### 3.3 Fitur Unggulan Tools SOP

- **Input langkah prosedur dinamis** — bisa tambah/hapus langkah sesuai kebutuhan
- **Setiap langkah punya PIC dan waktu** — jelas siapa mengerjakan dan berapa lama
- **Output langsung rapi** — tinggal cetak atau copy ke dokumen resmi

### 3.4 Latihan Mandiri (20 menit)

1. Buat tools SOP dengan prompt di atas
2. Isi dengan contoh: SOP Peminjaman Ruang Rapat (minimal 5 langkah)
3. Minta revisi: *"Tambah kolom 'Flowchart / Diagram Alir' di bagian akhir"*
4. Minta revisi: *"Buat font lebih kecil agar muat 1 halaman"*

---

## 📊 Sesi 4: Tools Laporan

### 4.1 Konsep Tools

Tools laporan akan menerima **data mentah** (catatan kegiatan, poin-poin acara, data numerik) dan merapikannya menjadi **laporan yang utuh dan terstruktur**.

### 4.2 Praktik — Prompt ke Canvas

**Prompt:**
> "Buatkan tools pembuatan laporan kegiatan untuk administrasi fakultas. Tampilkan form isian:
> - Judul Laporan (text)
> - Jenis Laporan (dropdown: Laporan Kegiatan, Laporan Bulanan, Laporan Evaluasi)
> - Periode (date range: dari tanggal — sampai tanggal)
> - Tempat / Lokasi (text)
> - Penanggung Jawab (text)
> - Latar Belakang (textarea)
> - Tujuan (textarea)
> - Peserta / Sasaran (textarea — satu baris per item)
> - Rincian Kegiatan (dinamis — tombol 'Tambah Kegiatan')
>   - Setiap kegiatan: Tanggal, Uraian Kegiatan, Keterangan
> - Hasil / Capaian (textarea)
> - Kendala (textarea)
> - Kesimpulan & Saran (textarea)
> - Lampiran (text — daftar lampiran pisahkan dengan koma)
>
> Output: laporan lengkap dengan format:
> 1. DAFTAR ISI (otomatis berdasarkan judul dan rincian)
> 2. BAB I: PENDAHULUAN (latar belakang, tujuan)
> 3. BAB II: PELAKSANAAN (waktu, tempat, peserta, rincian kegiatan dalam tabel)
> 4. BAB III: HASIL DAN PEMBAHASAN
> 5. BAB IV: PENUTUP (kesimpulan, saran)
> 6. LAMPIRAN
> 7. Halaman pengesahan
>
> Tampilkan dengan rapi. Sediakan tombol Cetak. Gunakan bahasa formal Indonesia dalam output."

### 4.3 Fitur Unggulan Tools Laporan

- **Input terstruktur** — tinggal isi form, tidak perlu pusing format
- **Daftar isi otomatis** — tidak perlu buat manual
- **Rincian dinamis** — bisa tambah kegiatan sebanyak yang dimiliki
- **Output bab per bab** — format laporan formal siap pakai

### 4.4 Latihan Mandiri (20 menit)

1. Buat tools laporan dengan prompt di atas
2. Isi dengan data kegiatan workshop AI ini (3-4 rincian kegiatan)
3. Minta revisi: *"Tambah BAB 'Anggaran / Rincian Biaya'"*
4. Minta revisi: *"Buat tabel rincian kegiatan lebih lebar"*

---

## 📝 Sesi 5: Tools Notulensi

### 5.1 Konsep Tools

Tools notulensi akan membantu mencatat hasil rapat secara **cepat, rapi, dan terstruktur**. Input berupa catatan kasar, output berupa notulensi profesional.

### 5.2 Praktik — Prompt ke Canvas

**Prompt:**
> "Buatkan tools pencatat notulensi rapat untuk administrasi fakultas. Tampilkan form isian:
> - Nama Rapat / Topik (text)
> - Hari, Tanggal (text + date picker)
> - Waktu Mulai — Waktu Selesai (time picker)
> - Tempat (text)
> - Pimpinan Rapat (text)
> - Notulis (text)
> - Daftar Peserta (textarea — satu nama per baris)
> - Daftar Hadir (checkbox per nama peserta — otomatis dari daftar peserta)
> - Agenda Rapat (textarea — satu agenda per baris)
> - Catatan Diskusi (textarea besar — bebas, bisa copy paste dari catatan kasar)
> - Keputusan / Hasil Rapat (textarea — satu keputusan per baris)
>
> Output: Tampilkan notulensi rapat lengkap dengan format:
> 1. Header: [Nama Rapat]
> 2. Info rapat (hari, tanggal, waktu, tempat, pimpinan, notulis)
> 3. Daftar peserta (nama-nama)
> 4. Agenda rapat (poin bernomor)
> 5. Pembahasan (ringkasan dari catatan diskusi, dipisah per agenda)
> 6. Keputusan (poin bernomor)
> 7. Tindak Lanjut (tabel dengan kolom: No, Tindak Lanjut, PIC, Deadline)
> 8. Tempat dan tanggal pembuatan
> 9. Kolom tanda tangan (Pimpinan Rapat dan Notulis)
>
> Tersedia tombol 'Tambah Baris Tindak Lanjut' secara dinamis. Tersedia tombol Cetak. Tampilkan semua dalam satu halaman yang rapi dengan font formal."

### 5.3 Fitur Unggulan Tools Notulensi

- **Catatan kasar langsung dirapikan** — tinggal paste (copy paste) catatan rapat
- **Tindak lanjut dengan PIC & deadline** — jelas follow-up-nya
- **Kolom tanda tangan** — siap disahkan
- **Daftar hadir otomatis** — tinggal checklist

### 5.4 Latihan Mandiri (20 menit)

1. Buat tools notulensi dengan prompt di atas
2. Isi dengan simulasi rapat (contoh: rapat persiapan workshop AI)
3. Minta revisi: *"Tambah kolom 'Waktu' di tabel tindak lanjut"*
4. Minta revisi: *"Buat agar catatan diskusi otomatis terkelompok per agenda"*

---

## 🎨 Sesi 6: Sesi Bebas — Bikin Tools Sendiri

### 6.1 Ide Tools Lain untuk Tendik

| Tools | Kegunaan |
|---|---|
| **Kalkulator Honorarium** | Hitung honor narasumber, dosen, dan pegawai tidak tetap |
| **Form Inventaris Barang** | Catat barang masuk/keluar, kondisi, lokasi |
| **Surat Tugas Otomatis** | Form → langsung jadi surat tugas siap print |
| **Checklist Akreditasi** | Daftar dokumen akreditasi dengan status centang |
| **Jadwal Piket** | Buat jadwal piket bulanan dengan rotasi otomatis |
| **Tracking Surat Masuk/Keluar** | Catat dan lacak status surat |

### 6.2 Contoh Prompt Cepat

**Surat Tugas:**
> "Buat tools surat tugas otomatis. Form: nama, NIP, pangkat, jabatan, acara, tanggal, tempat. Output: surat tugas formal dengan kop fakultas. Tombol cetak."

**Inventaris:**
> "Buat tools pencatatan inventaris barang. Form: nama barang, kode barang, jumlah, kondisi (baik/rusak), lokasi. Tampilkan tabel daftar barang dan bisa di-export."

**Tracking Surat:**
> "Buat tools tracking surat masuk dan keluar. Form: nomor surat, pengirim/tujuan, perihal, tanggal masuk/keluar, status (diproses/selesai). Tampilkan tabel dan bisa filter berdasarkan status."

### 6.3 Latihan Mandiri (30 menit)

1. Pilih **satu ide tools** dari daftar di atas (atau ide sendiri)
2. Buka Gemini Canvas
3. Deskripsikan tools yang ingin dibuat
4. Coba pakai dan minta revisi
5. Siap dipresentasikan!

---

## 🚀 Tips & Trik Gemini Canvas

### Cara Merevisi Tools

| Situasi | Prompt Revisi |
|---|---|
| Tambah kolom | *"Tambah input field untuk [nama field]"* |
| Ubah tampilan | *"Ganti warna jadi [warna], pakai font [font]"* |
| Perbaiki output | *"Outputnya tolong dibuat lebih [rapi / detail / ringkas]"* |
| Tambah fitur | *"Tambah tombol untuk [fungsi yang diinginkan]"* |
| Hapus fitur | *"Hapus bagian [nama bagian]"* |
| Error / tidak jalan | *"Ada error di bagian [sebutkan]. Tolong perbaiki."* |

### Trik Lanjutan

1. **Copy dari yang sudah ada** — Jika sudah punya tools bagus, minta Canvas: *"Buat tools serupa tapi untuk [fungsi berbeda]"*
2. **Gabung tools** — *"Gabung tools surat tugas dan tools surat undangan jadi satu halaman dengan tab"*
3. **Export kode** — Klik Export untuk menyimpan versi HTML yang bisa dibuka offline
4. **Simpan bookmark** — Simpan link Canvas di bookmark browser

---

## 📚 Lampiran

### A. Daftar Prompt Cepat (Copy-Paste)

**Tools Surat Resmi:**
```
Buatkan tools surat resmi dengan form: jenis surat (dropdown: Undangan, Tugas, Keterangan), nomor surat, tanggal, perihal, penerima, isi surat, pengirim, jabatan pengirim, NIP. Output: surat lengkap dengan kop fakultas, formal, tombol cetak.
```

**Tools SOP:**
```
Buatkan tools SOP dengan form: judul, nomor dokumen, tanggal, tujuan, ruang lingkup, langkah prosedur (dinamis: tambah/hapus langkah — setiap langkah ada deskripsi, PIC, waktu), dokumen terkait. Output: SOP rapi bernomor, tombol cetak.
```

**Tools Laporan:**
```
Buatkan tools laporan kegiatan dengan form: judul, periode, tempat, latar belakang, tujuan, peserta, rincian kegiatan (dinamis per hari), hasil, kendala, kesimpulan. Output: laporan dengan BAB (Pendahuluan, Pelaksanaan, Hasil, Penutup), daftar isi otomatis, tombol cetak.
```

**Tools Notulensi:**
```
Buatkan tools notulensi rapat dengan form: topik, tanggal, waktu, tempat, pimpinan, notulis, peserta, agenda, catatan diskusi, keputusan. Output: notulensi lengkap dengan header, pembahasan per agenda, keputusan, tabel tindak lanjut (PIC + deadline), tanda tangan, tombol cetak.
```

### B. Alur Kerja dengan Tools Canvas

```
Canvas → Buat tools → Simpan di history → 
Buka saat dibutuhkan → Isi data → Cetak / Copy → Selesai!
```

Tools yang sudah dibuat bisa dipakai berulang kali. Cukup buka history Gemini dan klik tools yang sudah dibuat.

### C. Tips Keamanan

- Tools yang dibuat Canvas berjalan di browser Anda — data tidak dikirim ke server
- Namun untuk data **sensitif** (NIK, gaji, dll), tetap berhati-hati
- Tools bisa di-export sebagai file HTML dan dijalankan offline (tanpa internet)

---

> **"Dengan Gemini Canvas, setiap tendik bisa punya asisten digital sendiri — cukup dijelaskan, langsung jadi."**

---

_Dipersiapkan untuk Workshop Pemanfaatan AI untuk Tenaga Kependidikan — Juli 2025_
