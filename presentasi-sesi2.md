# Sesi 2 — AI untuk Membuat Tools

**Workshop Pemanfaatan AI untuk Tenaga Kependidikan**
_Sesi 1 telah membahas AI Generatif secara umum_

---

## Slide 1 — Judul Sesi

**AI Bukan Sekadar ChatGPT: Mengenal Claude, Gemini Canvas, dan Budaya Membuat Tools**

_"Dari ngobrol dengan AI, sampai bikin tools sendiri"_

---

## Slide 2 — Kenapa Claude Lebih Baik dari ChatGPT?

| Aspek                       | ChatGPT                    | Claude                                                           |
| --------------------------- | -------------------------- | ---------------------------------------------------------------- |
| **Konteks**           | 32K–128K token            | **200K token** — bisa upload novel 1 buku penuh           |
| **Dokumen besar**     | Sering lupa konteks tengah | Konsisten sampai akhir                                           |
| **Bahasa Indonesia**  | Baik                       | **Lebih alami & kontekstual**                              |
| **Analisis & logika** | Cenderung generik          | **Lebih dalam & terstruktur**                              |
| **Sistem berpikir**   | Langsung generate jawaban  | **"Thinking mode" — mikir dulu, baru jawab**              |
| **Coding / tools**    | GPT-4 bagus                | Claude 3.5 Sonnet **unggul** di coding & pembuatan tools  |
| **Keamanan**          | Data dipakai training      | **Data tidak dipakai training** (kecuali explicit consent) |
| **Files upload**      | Bisa                       | Bisa +**lebih akurat** baca PDF panjang                    |

### Yang Membedakan: Sistem Berpikir Claude

Claude memiliki pendekatan berbeda dalam merespon:

```
ChatGPT: Input → langsung generate jawaban → output
Claude:  Input → [berpikir/menyusun strategi] → baru jawab
```

**ChatGPT** dilatih untuk **fluency** — kefasihan bahasa, jawaban langsung cair.

**Claude** dilatih untuk **reasoning eksplisit** — dia diam-diam mikir dulu: struktur yang tepat? format yang sesuai? konteksnya apa? baru menjawab dengan terstruktur.

**Contoh:**

> Input: "Buat surat undangan rapat evaluasi"
>
> **ChatGPT:** langsung mulai menulis surat
>
> **Claude:** [mikir] — ini formal atau semi-formal? perlu kop surat? siapa pengirimnya? → baru nulis dengan struktur yang tepat

### Dampak untuk Tendik

Claude lebih cocok untuk tugas yang butuh **presisi dan struktur**:

| Tugas       | Kenapa Claude Lebih Cocok                          |
| ----------- | -------------------------------------------------- |
| Surat resmi | Mikir format dulu, bukan asal nulis                |
| SOP         | Mikir alur logis sebelum nyusun langkah            |
| Laporan     | Mikir organisasi konten, bukan sekedar nempel data |
| Notulensi   | Mikir mana keputusan, mana tindak lanjut           |

### Tapi... kenapa ChatGPT lebih populer?

- **Pertama masuk pasar** — brand awareness lebih besar
- **Gratisan cukup baik** — GPT-3.5 gratis tanpa batas berarti
- **Multimodal lebih awal** — image generation (DALL-E) built-in
- **Integrasi luas** — Microsoft, plugin, API ecosystem

> Claude = unggul secara teknis & reasoning, ChatGPT = unggul secara distribusi & ekosistem

---

## Slide 3 — Kenapa Claude Lebih Mahal?

### Perbandingan Harga (Per 1M Token)

| Model             | Input (per 1M token)               | Output (per 1M token) |
| ----------------- | ---------------------------------- | --------------------- |
| GPT-4o            | $2.50 | $10.00                     |                       |
| Claude 3.5 Sonnet | **$3.00** | **$15.00** |                       |
| Gemini 2.5 Flash  | **Gratis**                   | **Gratis**      |

### Kenapa Claude lebih mahal?

1. **200K context window** — biaya komputasi lebih besar
2. **Safety training lebih ketat** — biaya develop lebih tinggi
3. **Kualitas output lebih baik** — butuh model lebih besar
4. **Target enterprise** — Anthropic fokus ke pelanggan bisnis

### Apakah worth it?

| Untuk                                      | Rekomendasi               |
| ------------------------------------------ | ------------------------- |
| Browsing santai, chat biasa                | ChatGPT gratis            |
| Dokumen panjang, analisis mendalam, coding | Claude                    |
| **Membuat tools, belajar AI**        | **Gemini (gratis)** |

---

## Slide 4 — Bagaimana Menghemat?

### Strategi Hemat untuk Tendik

#### 1. Manfaatkan yang Gratis Dulu

| Tools Gratis                                    | Kegunaan                                                                  |
| ----------------------------------------------- | ------------------------------------------------------------------------- |
| **Gemini 2.5 Flash** — gemini.google.com | Chat umum, analisis, brainstorming**gratis selamanya**              |
| **Gemini Canvas** — built-in di Gemini   | Bikin tools tanpa coding**gratis**                                  |
| **Claude** — claude.ai                   | Untuk dokumen penting, analisis panjang **(kuota terbatas gratis)** |
| **ChatGPT** — chat.openai.com            | Alternatif gratis dengan kemampuan cukup                                  |

#### 2. Gunakan AI Sesuai Kebutuhannya

| Tugas                              | AI Terbaik                             | Biaya            |
| ---------------------------------- | -------------------------------------- | ---------------- |
| Chat ringan, tanya jawab           | Gemini / ChatGPT                       | Gratis           |
| Analisis dokumen panjang           | Claude / Gemini                        | Gratis–murah    |
| **Bikin tools administrasi** | **Gemini Canvas**                | **Gratis** |
| Data sensitif (NIK, gaji, dll)     | **Jangan masukkan ke AI publik** | —               |

#### 3. Gemini Canvas

- Tools Canvas bisa di-export HTML dan dijalankan offline
- Hasil tools bisa dibagikan ke rekan lain via file HTML

### Prinsip Utama

> **"AI yang paling mahal adalah AI yang tidak dipakai."**
> Tapi juga: **"AI yang paling mahal adalah AI yang dipakai untuk tugas yang salah."**

Pilih AI yang tepat untuk tugas yang tepat.

---

## Slide 5 — Budaya Membuat Alat/Tools

### Filosofi: "Kita Bukan Pemakai, tapi Pembuat"

Selama ini sebagai tendik kita **memakai** alat yang sudah jadi:

- Microsoft Word
- Google Docs
- Aplikasi surat dari pusat

**Sekarang kita bisa membuat alat sendiri.**

### Kenapa Budaya Ini Penting?

| Old Mindset                   | New Mindset                                   |
| ----------------------------- | --------------------------------------------- |
| "Tunggu IT bikin aplikasi"    | **"Saya bikin tools sendiri"**          |
| "Nggak bisa coding"           | **"Cuma perlu ngomong, AI yang bikin"** |
| "Kerja manual berulang-ulang" | **"Bikin tools, pakai berkali-kali"**   |
| "Prosedurnya ribet"           | **"Tools yang menyederhanakan"**        |

### Contoh Perubahan Mindset

**Dulu:**
Setiap kali ada rapat → buka Word → ketik notulensi manual → format sendiri

**Sekarang:**
Buka Gemini Canvas → isi catatan kasar → **tools otomatis merapikan** → cetak

**Dulu:**
Setiap kali buat surat tugas → cari template → copy paste → edit manual

**Sekarang:**
Buka tools surat tugas Canvas → isi form → **surat langsung jadi** → print

### Di Luar Sana, Orang Sudah Mulai

- Guru bikin tools kalkulator nilai
- Staf desa bikin tools surat keterangan
- Admin RS bikin tools jadwal jaga
- **Tendik fakultas bikin tools administrasi!**

---

## Slide 6 — AI adalah Alat yang Dapat Membuat Tools

### Evolusi Alat Bantu Kerja

```
Kapak batu  →  Mesin uap  →  Komputer  →  AI
(tenaga)       (produksi)     (informasi)   (intelejensi)
```

**Setiap era punya alat yang memperluas kemampuan manusia.**

### AI Adalah "Tool Maker"

AI bukan cuma alat yang menjawab pertanyaan.

**AI adalah alat untuk membuat alat.**

| Sebelum                                    | Sekarang                                                           |
| ------------------------------------------ | ------------------------------------------------------------------ |
| Mau bikin tools? → Belajar coding 2 tahun | Mau bikin tools? →**Jelaskan ke AI dalam Bahasa Indonesia** |
| Mau bikin aplikasi? → Bayar programmer    | Mau bikin tools? →**Gratis, tanpa coding**                  |
| Tools butuh waktu berbulan-bulan           | Tools jadi**dalam hitungan detik**                           |

### Meta-tool: Tools yang Bikin Tools

- **Gemini Canvas** = tools untuk membuat tools
- Anda ngomong, dia bikin
- Anda revisi, dia perbaiki
- Anda pakai, dia jalan

---

## Slide 7 — Apa Itu Gemini Canvas?

### Definisi

**Gemini Canvas** adalah fitur di Gemini (gemini.google.com) yang bisa membuat **aplikasi web interaktif** langsung dari perintah bahasa alami.

### Cara Kerja

```
Anda: "Buatkan tools notulensi rapat..."
    ↓
Canvas: [Membuat kode di belakang layar]
    ↓
Anda: [Langsung bisa pakai tools-nya!]
    ↓
Anda: "Tambah kolom tindak lanjut..."
    ↓
Canvas: [Langsung diperbarui]
```

### Yang Bisa Dibuat dengan Canvas

| Tools             | Fungsi                                 |
| ----------------- | -------------------------------------- |
| ✅ Surat Resmi    | Form isian → surat jadi               |
| ✅ SOP            | Input prosedur → SOP rapi             |
| ✅ Laporan        | Data mentah → laporan utuh            |
| ✅ Notulensi      | Catatan kasar → notulensi profesional |
| ✅ Kalkulator     | Hitung honor, anggaran, dll            |
| ✅ Form & Tracker | Inventaris, surat masuk/keluar         |

### Kenapa Canvas Cocok untuk Tendik?

| Alasan                       | Penjelasan                                 |
| ---------------------------- | ------------------------------------------ |
| **Tidak perlu coding** | Cukup Bahasa Indonesia                     |
| **Gratis**             | Tidak perlu langganan                      |
| **Cepat**              | Tools jadi dalam hitungan detik            |
| **Bisa direvisi**      | Tinggal minta, langsung diubah             |
| **Bisa di-export**     | Simpan sebagai file HTML, jalankan offline |
| **Bisa dipakai ulang** | Tools yang sama untuk tugas berulang       |

---

## Slide 8 — Workshop Gemini Canvas

### Apa yang Akan Kita Buat Hari Ini?

Kita akan membuat **4 tools administrasi** yang langsung bisa dipakai:

| Sesi   | Tools                       | Kegunaan                                   |
| ------ | --------------------------- | ------------------------------------------ |
| Sesi 2 | **Tools Surat Resmi** | Generate surat undangan, tugas, keterangan |
| Sesi 3 | **Tools SOP**         | Menyusun prosedur operasional standar      |
| Sesi 4 | **Tools Laporan**     | Merapikan data jadi laporan formal         |
| Sesi 5 | **Tools Notulensi**   | Mencatat dan merapikan notulensi rapat     |

### Alur Workshop

1. **Instruktur demo** — bikin tools di depan, peserta lihat
2. **Peserta praktik** — buka Canvas, ketik prompt yang sama
3. **Revisi bersama** — minta Canvas menambahkan fitur
4. **Latihan mandiri** — setiap peserta menyempurnakan tools-nya
5. **Hasil** — setiap peserta pulang dengan 4 tools siap pakai

### Yang Perlu Disiapkan

- **Browser**: Chrome / Edge / Firefox (yang terbaru)
- **Akun Google**: Bisa pakai akun pribadi
- **Koneksi internet**: Stabil (Canvas butuh internet saat bikin, tools bisa dipakai offline setelah di-export)

### Link Penting

| Sumber        | Link                             |
| ------------- | -------------------------------- |
| Gemini        | gemini.google.com                |
| Gemini Canvas | gemini.google.com → klik Canvas |

---

## Slide 9 — Ringkasan Sesi 2

1. **Claude lebih unggul** untuk dokumen panjang dan analisis, ChatGPT untuk ekosistem — **sistem berpikir Claude** bedanya dia mikir dulu baru jawab, cocok untuk tugas terstruktur
2. **Claude lebih mahal** karena konteks besar dan safety, **tapi ada alternatif gratis**
3. **Strategi hemat**: pakai Gemini untuk tugas sehari-hari, Claude untuk tugas berat, jangan masukkan data sensitif
4. **Budaya membuat tools**: dari pemakai jadi pembuat — tanpa coding
5. **AI adalah meta-tool**: alat untuk membuat alat
6. **Gemini Canvas**: tools untuk membuat tools — gratis, tanpa coding, Bahasa Indonesia
7. **Workshop dimulai**: kita akan buat 4 tools administrasi!

---

## 🚀 Selanjutnya: Sesi 3 — Tools Surat Resmi

**Buka gemini.google.com, klik Canvas, dan kita mulai!**

---

_Dipersiapkan untuk Workshop Pemanfaatan AI untuk Tenaga Kependidikan — Juli 2025_
