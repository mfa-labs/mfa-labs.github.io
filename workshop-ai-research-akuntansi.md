# Workshop: Pelatihan Penggunaan AI dalam Research Akuntansi

**Pemateri:** Muhammad Fadhil Al Amal
**Status:** Perancangan materi (draft v10 — tambah praktik agen mencari & mengunduh literatur open access)

---

## 1. Informasi Acara

| Item          | Keterangan                                                                                |
| ------------- | ----------------------------------------------------------------------------------------- |
| Judul         | Pelatihan Penggunaan AI dalam Research Akuntansi                                          |
| Hari/Tanggal  | Sabtu, 26 September 2026                                                                  |
| Waktu         | 14.00 – 18.00 WIB (4 jam total)                                                           |
| **Sesi saya** | **2 jam** (sisanya sesi pemateri lain — konfirmasi urutan & slot)                          |
| Tempat        | Ruang Rapim 1 FEB USK, Lantai 2                                                           |
| Penyelenggara | Program Studi Doktor Ilmu Akuntansi, Fakultas Ekonomi dan Bisnis, Universitas Syiah Kuala |
| Peserta       | **Campuran: mahasiswa S3 + dosen**                                                        |
| Format        | Offline, ruang rapat                                                                      |

**Hasil akhir yang diharapkan:** setiap peserta pulang membawa **vault riset berisi catatan literatur bertaut + draf paper LaTeX** di Overleaf.

---

## 2. Keputusan yang Sudah Ditetapkan

| Topik                    | Keputusan                                                    | Implikasi                                                              |
| ------------------------ | ------------------------------------------------------------ | ---------------------------------------------------------------------- |
| Konsep sesi              | **Agentic AI** dengan OpenCode + Obsidian                    | Fokus "AI mengerjakan tugas di folder Anda", bukan chat biasa          |
| Tools                    | **OpenCode Desktop App** (Windows/Mac) + Obsidian            | Tanpa terminal; ada GUI, editor, drag-and-drop                         |
| Model                    | **Model gratis bawaan OpenCode (Zen)**                       | Tanpa biaya, tapi **ada jebakan privasi** (bagian 5)                   |
| Audiens                  | Campuran (S3 + dosen)                                        | Sajikan konsep + praktik                                               |
| Format praktik           | **Follow-along: peserta copy-paste prompt** hingga berhasil menulis paper LaTeX | Peserta aktif sepanjang sesi, bukan penonton           |
| Starter vault            | **Mulai dari kosong**                                        | **Agen yang membangun struktur vault** — praktik pertama peserta       |
| Perlakuan data           | **Data tidak masuk ke agen** (prioritas kerahasiaan)         | Agen menulis kode/sintaks; data tinggal di mesin peneliti              |
| Dataset kuantitatif      | **Grunfeld** (panel firma, publik)                           | Klasik untuk fixed/random effects                                      |
| Skenario kualitatif      | **Transkrip sintetis**                                       | Transkrip asli rahasia → praktik pakai sintetis                        |
| Demo analisis            | **Sintaks SPSS/Stata dulu → lanjut Python dijalankan agen**  | Dua lapis: sintaks (aman) lalu Python (praktis, data publik)           |
| Studi kasus tulisan      | **Cari jurnal → template LaTeX → tulis paper**               | Penutup alur: literatur → analisis → tulisan                           |
| Platform LaTeX           | **Overleaf** (browser, tanpa instalasi)                      | Tak perlu memasang TeX lokal                                           |
| Pencarian literatur      | **Manual untuk kualitas; agen melengkapi & mengunduh**       | Agen cari + unduh PDF **open access**; metadata dari DOI/API           |
| Zotero                   | **Tidak dipakai**                                            | Alur sitasi sederhana: catatan MD + DOI                                |
| "Graph Obsidian"         | Graph view otomatis dari `[[wikilink]]`                      | Fokus konvensi penautan (MOC, tag, klaster tema)                       |

---

## 3. Konteks & Posisi Materi

- Lanjutan workshop sebelumnya di FEB USK (`workshop-ai-sekre`, `workshop-ai-tendik-sesi2`) — tapi audiens kali ini **peneliti**, bukan tendik.
- Audiens campuran S3 + dosen: sebagian menyusun disertasi/artikel, sebagian mengajar & membimbing.
- **Narasi besar sesi:** satu alur riset utuh — literatur → analisis → tulisan, dikerjakan bersama.

---

## 4. Tesis Sesi: Kenapa "Agentic", Bukan Chat Biasa

Bedanya bukan "model yang lebih pintar", tapi **AI yang punya tangan** — bisa mengerjakan tugas bertahap di folder kerja Anda.

| Chat biasa (ChatGPT/Gemini)                                  | Agentic (OpenCode)                                                          |
| ------------------------------------------------------------ | --------------------------------------------------------------------------- |
| Output = teks di chat, harus Anda copy-paste sendiri         | Output = file nyata yang langsung tertulis di vault Obsidian Anda           |
| Tidak bisa menjalankan kode                                  | Bisa menjalankan Python/R untuk analisis data                               |
| Lupa konteks antar sesi                                      | Membaca konteks dari file: catatan, data, instruksi (`AGENTS.md`)           |
| Anda yang menyalin hasil ke catatan                          | **Agen yang menulis, menautkan, dan merapikan catatan**                     |
| Satu langkah per prompt                                      | Multi-langkah: cari → unduh PDF → ringkas → catatan → tautkan → analisis → draf paper |

**Kalimat kunci:** _"Bayangkan asisten riset yang rajin: dia mencari & mengunduh PDF, meringkasnya jadi catatan, menautkannya, menjalankan analisis, lalu menyiapkan draf paper. Semuanya di folder yang Anda miliki."_

**Demo pembuktian tesis:** vault dimulai **kosong**, lalu **agen sendiri yang membangun struktur** — peserta melakukannya sendiri di awal sesi.

---

## 5. Tools

### OpenCode Desktop App

- Versi GUI dari agent OpenCode — **macOS (Apple Silicon & Intel), Windows (x64), Linux**.
- Kelebihan: sesi ganda, editor dengan diff view, **drag-and-drop file**, berbagi sesi via tautan.
- Unduh: `https://opencode.ai/download` · macOS via `brew install --cask opencode-desktop`.

### Model Gratis (OpenCode Zen)

- Model gratis antara lain: Big Pickle, Space Bunny Free, MiMo-V2.6-Flash Free, MiMo-V2.5 Free, Ling 3.0 Flash Fin Free, Nemotron 3 Ultra/3.5 Lightning Free, Muse Spark 1.3 Contributor Free, Jev 1.13 Free.
- Alur: install app → login Zen → `/models` untuk pilih model.

> ⚠️ **PERINGATAN PRIVASI — WAJIB DISAMPAIKAN**
> - **Big Pickle, MiMo-V2.5/V2.6-Flash Free, Ling 3.0 Flash Fin Free** — data terkumpul **boleh dipakai memperbaiki model** selama masa gratis.
> - **Nemotron 3 Ultra/3.5 Lightning Free (NVIDIA)** — *trial use only*, **jangan kirim data pribadi/rahasia**; sesi dicatat.
> - **Muse Spark 1.3 Contributor Free** — prompt & jawaban Anda **dipakai melatih model Meta**.
> - **Space Bunny Free** — kebijakan *zero-retention*, tidak dipakai untuk training.
>
> **Model gratis ≠ aman untuk data sensitif.** Inilah alasan utama praktik memakai data publik.

### Obsidian

- Vault = folder file Markdown → OpenCode bisa langsung membaca & menulis ke dalamnya.
- **Graph view muncul otomatis** dari `[[wikilink]]`, tag, dan struktur folder.
- Punya penampil PDF bawaan (bagian 6).

### Overleaf (untuk studi kasus paper)

- **Platform LaTeX terpilih** — berjalan di browser, **tanpa instalasi TeX lokal**.
- Peserta **membuat akun Overleaf sebelum acara** (masuk daftar pre-work).

### API Literatur Terbuka (untuk pencarian & unduh)

- **OpenAlex** (gratis, tanpa key), **Crossref** (gratis), **Unpaywall** (status open access).
- Dipakai agen untuk mencari artikel & mengambil tautan PDF **open access** — metadata dari API, bukan dari ingatan model.

---

## 6. Alur Kerja PDF → Obsidian

**Jawaban pertanyaan kunci: dua-duanya, untuk tujuan berbeda.**

1. **Untuk dibaca manusia:** PDF **bisa langsung dimasukkan** ke vault (penampil PDF bawaan; bisa dianotasi). Tanpa konversi.
2. **Untuk dibaca agen:** PDF itu biner — agen tidak bisa membaca isinya atau menautkan ke dalamnya. Agar agen bisa **meringkas & menautkan**, isinya perlu jadi **teks/Markdown**.

**Pola "PDF asli + catatan Markdown":**

```text
vault/
├── literatur/
│   ├── _index.md                          ← MOC: peta literatur (bertag & bertaut)
│   ├── catatan/
│   │   └── Smith-2023-Audit-Quality.md    ← catatan literatur (ringkasan + metadata + tautan)
│   └── pdf/
│       └── Smith-2023-Audit-Quality.pdf   ← PDF asli (arsip + bukti + anotasi)
├── data/
├── draf/
└── _templates/
    └── literatur.md                        ← template frontmatter catatan literatur
```

- **PDF** = arsip, bukti, anotasi manusia.
- **Catatan Markdown** = hasil ringkasan agen: frontmatter (judul, penulis, tahun, jurnal, DOI, tag), ringkasan, temuan kunci, kutipan, tautan ke PDF.
- **Yang masuk graph & ditautkan adalah catatan MD-nya** — PDF hanya lampiran.

**Ekstraksi PDF → teks (agen bisa menjalankannya sendiri):** `markitdown`, `docling`, `pymupdf4llm`, atau `pdftotext`.
**Catatan praktis:** PDF dua kolom & scan sering berantakan (scan perlu OCR); tabel/rumus mudah rusak. Simpan kutipan secukupnya (hak cipta).

---

## 7. Fungsi Asisten Riset

### 7.1 Pencarian literatur — **manual untuk kualitas, agen untuk melengkapi**

- **Manual (utama):** peneliti menelusuri Google Scholar, Scopus/Web of Science (langganan kampus), Garuda/SINTA — peneliti yang menilai kata kunci & kualitas jurnal.
- **Agen (melengkapi):** agen **mencari & mengunduh PDF sendiri** lewat API terbuka (**OpenAlex, Crossref, Unpaywall**) lalu menyimpannya ke `literatur/pdf/`.
  - **Hanya PDF open access.** Jangan mengunduh/membajak artikel berbayar (Sci-Hub dsb).
  - **Metadata (judul, penulis, tahun, jurnal, DOI) diambil dari API** — bukan dari ingatan model (anti-halusinasi).
  - Artikel berbayar tetap diakses manual lewat langganan perpustakaan.

### 7.2 Tambah PDF ke Obsidian & konversi

- PDF → `literatur/pdf/`, isi diekstrak ke teks → jadi catatan MD (bagian 6).

### 7.3 Ringkas literatur + konvensi penautan otomatis — **fungsi utama**

- Agen: ekstrak → ringkas → isi frontmatter → simpan catatan MD → tambahkan `[[wikilink]]` → beri tag.
- Konvensi distandarkan lewat `AGENTS.md` + template, contoh: `[[_index]]`, `[[Teori-Agency]]`, `#metode/kuantitatif`, `#topik/audit`.
- **Peserta tidak mengetik Markdown** — mereka berinteraksi dengan agen; agen yang menulis vault.

### 7.4 Analisis data studi kasus

**Lapis 1 — Agen menulis sintaks, data tidak masuk ke agen (paling aman)**

- Agen menulis **sintaks SPSS/Stata** (atau Python) dari **deskripsi struktur data & hipotesis** — bukan datanya.
- Peneliti menjalankan sintaks di software berlisensinya. **Model tidak pernah menyentuh data mentah.**

**Lapis 2 — Agen menulis & menjalankan Python (praktis, data publik)**

- Untuk dataset publik, agen menulis **dan** menjalankan kode (pandas, statsmodels, linearmodels).
- **Catatan:** output masuk ke percakapan dan terkirim ke model → hanya untuk data non-sensitif.

> **Prinsip:** _"Biarkan data tinggal di tempatnya. Yang masuk ke agen hanya instruksi dan kode."_

**Studi kasus kuantitatif — dataset Grunfeld:** panel firma × tahun, publik, klasik untuk fixed/random effects.

**Studi kasus kualitatif — transkrip sintetis:** agen memberi *first-pass coding* + menyusun codebook. **Reliability, transparansi, intercoder agreement** adalah isu serius.

### 7.5 Menulis paper: cari jurnal → template LaTeX → draf

- **Cari jurnal:** agen menelusuri kesesuaian naskah dengan scope/aims jurnal.
  - **Verifikasi wajib:** ISSN, scope, indexing (Scopus/SINTA), kuartil, APC — **jangan percaya angka/impact factor yang diketik model**; ambil dari sumber resmi (Scimago, laman jurnal, SINTA).
- **Template LaTeX:** banyak jurnal menyediakan template via **Overleaf**. Agen menyiapkan struktur `.tex`; peserta mengunggahnya ke Overleaf.
- **Draf paper:** agen menyusun kerangka (Pendahuluan, Literatur, Metode, Hasil, Diskusi) dan draf awal dari catatan vault.
- **Sitasi:** tanpa Zotero, buat `.bib` dari **DOI** catatan. **Ambil entri BibTeX dari Crossref/DOI, jangan biarkan model mengetik dari ingatan.**
- **Etika:** AI **bukan penulis**. Banyak jurnal melarang AI sebagai author dan mewajibkan disclosure. Manusia pemilik isi & penanggung jawab klaim.

---

## 8. Alur Praktik Peserta (Follow-Along)

Peserta **copy-paste prompt** yang sama dengan pemateri, mengikuti langkah demi langkah sampai berhasil menulis paper LaTeX. Unduhan installer & pembuatan akun Overleaf dilakukan **sebelum acara**.

**Pre-work (sebelum acara)**

1. Unduh installer **Obsidian + OpenCode Desktop** (atau ambil offline di lokasi).
2. Daftar akun **Overleaf** (gratis).
3. Kirim nama/judul topik (opsional) untuk bahan skenario.

**Langkah praktik di sesi**

1. Pasang **Obsidian** dan **OpenCode Desktop**.
2. Buat folder kosong, buka sebagai **vault Obsidian** — juga dijadikan *working directory* OpenCode.
3. Login **OpenCode Zen**, pilih **model gratis** (`/models`).
4. Jalankan **prompt #1** → agen membangun struktur vault.
5. Jalankan **prompt #2–#8** mengikuti pemateri: cari & unduh literatur, ringkas, analisis, lalu draf paper.
6. Unggah `draf/paper/` ke **Overleaf**, kompilasi, dan pastikan PDF paper terbentuk.

**Contoh prompt (lembar peserta)**

_Jalur aman: data sensitif tidak pernah dimasukkan; praktik memakai data publik & PDF open access._

```text
# 1. Scaffold vault
Kamu asisten riset saya. Buat struktur vault riset ini:
folder `literatur/catatan`, `literatur/pdf`, `data`, `draf`, `_templates`.
Buat `_templates/literatur.md` dengan frontmatter: title, authors, year,
journal, doi, tags; dan bagian Ringkasan, Metode, Temuan Kunci, Kutipan.
Buat `AGENTS.md` berisi konvensi: catatan literatur disimpan di
`literatur/catatan/NamaDepan-Tahun-JudulSingkat.md`, tautkan ke `[[_index]]`
dan teori terkait, beri tag `#metode/...` dan `#topik/...`.
```

```text
# 2. Cari & unduh literatur (OPEN ACCESS saja)
Topik: "audit quality and earnings management".
Cari 5 artikel lewat API OpenAlex/Crossref (jangan dari ingatan).
Untuk tiap artikel tampilkan judul, penulis, tahun, jurnal, DOI,
dan status open access. Unduh PDF yang open access ke `literatur/pdf/`
dengan nama `Penulis-Tahun-JudulSingkat.pdf`. Jangan unduh artikel berbayar.
```

```text
# 3. Ringkas satu literatur
Baca PDF di `literatur/pdf/Smith-2023.pdf`. Buat catatan literatur sesuai
template, tautkan ke `[[_index]]` dan ke teori terkait, beri tag yang sesuai.
```

```text
# 4. Sintaks (data TIDAK dikirim ke agen)
Struktur data saya: kolom invest, value, capital; unit = firma; waktu = tahun.
Tulis sintaks Stata untuk regresi fixed effects invest pada value dan capital
dengan efek tetap firma dan tahun. Jangan minta datanya.
```

```text
# 5. Python (dataset publik Grunfeld)
Gunakan dataset Grunfeld. Jalankan regresi panel fixed effects invest pada
value dan capital; tampilkan hasil dan interpretasi singkat.
```

```text
# 6. Kualitatif (transkrip sintetis)
Lakukan first-pass coding tematik pada `data/transkrip-sintetis.md`. Buat
codebook di `literatur/catatan/codebook.md`, tandai kutipan pendukung,
dan jangan menarik kesimpulan.
```

```text
# 7. Cari jurnal & siapkan template paper
Berdasarkan `draf/kerangka.md`, carikan 3 jurnal akuntansi yang cocok
(sebutkan scope & alasan, jangan mengarang impact factor). Lalu siapkan
template LaTeX jurnal pilihan di `draf/paper/` dan susun struktur `.tex`.
```

```text
# 8. Susun draf paper
Susun draf bagian Pendahuluan & Metode dari catatan di `literatur/catatan/`.
Buat `draf/paper/refs.bib` dari DOI catatan (ambil entri BibTeX dari Crossref,
jangan menulis dari ingatan). Tandai semua klaim yang perlu saya verifikasi.
```

**Checkpoint (agar peserta yang tertinggal bisa menyusul)**

- Sediakan **vault cadangan** yang sudah selesai (berisi catatan, data, dan draf) supaya peserta bisa menimpa/unduh bila ketinggalan langkah.
- Sediakan **`draf/paper/` lengkap** (`.tex` + `refs.bib`) sebagai hasil akhir rujukan.

---

## 9. Rangka Materi 2 Jam (Follow-Along)

| Menit   | Blok                                    | Isi                                                                 |
| ------- | --------------------------------------- | ------------------------------------------------------------------- |
| 0–8     | Pembuka                                 | "Agentic AI" vs chat biasa + peta alur riset (bagian 4)             |
| 8–20    | Praktik: instalasi                      | Pasang OpenCode + Obsidian, login Zen, pilih model gratis           |
| 20–28   | Praktik: setup                          | Buka vault kosong + cek akun Overleaf                               |
| 28–38   | Praktik: scaffold vault (prompt #1)     | Agen membangun struktur vault                                       |
| 38–52   | Praktik: cari & unduh literatur (#2)    | Agen cari via API → unduh PDF open access ke `literatur/pdf/`       |
| 52–62   | Praktik: ringkas → catatan (prompt #3)  | PDF → catatan literatur bertaut → graph muncul                      |
| 62–68   | Istirahat                               | —                                                                   |
| 68–78   | Praktik: sintaks (prompt #4)            | Agen menulis sintaks Stata (data tidak dikirim)                     |
| 78–86   | Praktik: Python (prompt #5)             | Regresi panel dijalankan agen atas Grunfeld                         |
| 86–93   | Praktik: kualitatif (prompt #6)         | First-pass coding transkrip sintetis + codebook                     |
| 93–112  | Praktik: paper (prompt #7–#8)           | Cari jurnal → template → draf + `.bib` → unggah & kompilasi Overleaf |
| 112–118 | Etika & privasi                         | Disclosure, verifikasi, kerahasiaan data, jebakan model gratis      |
| 118–120 | Penutup & Q&A                           | Cara mulai sendiri, resource, follow-up                             |

**Catatan pelaksanaan**

- **Agenda sangat padat** (9 praktik berurutan). Wajib ada **checkpoint vault** agar bisa menyusul, dan versi ringkas bila waktu mepet.
- **Titik gagal tetap instalasi (8–20).** Perkuat dengan installer offline (USB/share lokal) + tim pendamping.
- **Praktik unduh literatur bergantung jaringan.** Siapkan PDF contoh lokal sebagai cadangan bila internet/API melambat.
- **Overleaf**: pastikan akun sudah dibuat sebelum acara; unggah folder `draf/paper/`, lalu kompilasi.
- **Risiko rate limit** lebih besar karena semua peserta menembak model gratis bersamaan. Minta akun masing-masing; siapkan cadangan.
- Tiap praktik punya **rekaman cadangan** sebagai jaring pengaman.

---

## 10. Kritik & Risiko

1. **Sesi instalasi titik gagal terbesar** — memasang dua aplikasi + login dalam waktu singkat tidak realistis tanpa persiapan. Solusi: pre-download/offline installer + pendamping.
2. **Follow-along berisiko tidak selesai** — 8 prompt + Overleaf dalam 2 jam sangat padat; peserta bisa tertinggal. Mitigasi: checkpoint vault + versi ringkas + pendamping.
3. **Legalitas unduhan** — agen **hanya** boleh mengunduh PDF **open access**; jangan membajak artikel berbayar (Sci-Hub dsb). Tekankan di sesi.
4. **Ketergantungan jaringan/API** — pencarian & unduh literatur bergantung koneksi & API (OpenAlex/Crossref/Unpaywall). Siapkan PDF contoh lokal sebagai cadangan.
5. **Halusinasi metadata & sitasi** — metadata literatur harus dari API/DOI, bukan dari ingatan model.
6. **Rate limit model gratis lebih berbahaya** — semua peserta menembak model gratis bersamaan → throttle; siapkan cadangan.
7. **Overleaf bisa jadi hambatan** — perlu akun & jaringan; unggah template bisa membingungkan. Siapkan panduan langkah gambar.
8. **Halusinasi metrik jurnal** — model bisa mengarang impact factor/kuartil/indexing. **Wajib verifikasi** ke Scimago/laman jurnal/SINTA.
9. **Etika penulisan** — AI bukan author; banyak jurnal melarang & mewajibkan disclosure. Manusia pemilik isi & klaim.
10. **Jebakan privasi model gratis** — sebagian dipakai untuk training/mencatat sesi. Praktik memakai data publik.
11. **Agen "melihat" output, bukan hanya kode** — pada Lapis 2, tabel hasil masuk ke percakapan.
12. **Vault kosong bergantung pada prompt** — sediakan teks prompt scaffold siap salin.
13. **PDF bukan node graph** — graph & tautan hidup di catatan Markdown.
14. **Ekstraksi PDF tidak selalu bersih** — dua kolom & scan bermasalah; tabel/rumus mudah rusak.
15. **Konektivitas & izin** — WiFi Ruang Rapim 1 stabil? Peserta boleh install software?

---

## 11. Detail yang Masih Perlu Diputuskan

- [ ] **Urutan & slot** sesi dalam blok 4 jam + materi pemateri lain (agar tidak tumpang tindih).
- [ ] **Topik pencarian** untuk praktik cari & unduh literatur (mis. "audit quality & earnings management").
- [ ] **Sumber open access** yang dipakai — OpenAlex, Crossref, Unpaywall (konfirmasi pilihan).
- [ ] **Jurnal target** untuk studi kasus paper (jurnal akuntansi nasional terindeks SINTA/Scopus?).
- [ ] **Rincian transkrip sintetis** — topik & panjang.
- [ ] **Isi final prompt scaffold** — dibekukan sebelum acara.
- [ ] **Bentuk checkpoint vault** — zip unduhan, repo, atau berbagi di lokasi?
- [ ] **Cara distribusi installer & aset** — tautan, USB, atau share lokal?
- [ ] **Jumlah pendamping** saat praktik (instalasi, unduh literatur, Overleaf).

---

## 12. Aset yang Perlu Disiapkan

- [x] Slide materi (`public/materi/workshop-ai-research-akuntansi.html`) — **tema terang, kontras tinggi** (27 slide: ide → praktik berpasangan)
- [ ] **Installer offline** OpenCode Desktop + Obsidian (Windows & Mac) untuk USB/share lokal
- [ ] **Lembar contoh prompt** siap salin (bagian 8) — versi cetak/tautan
- [ ] **PDF contoh lokal** sebagai cadangan bila jaringan/API bermasalah
- [ ] Dataset **Grunfeld** (siap unduh) + transkrip **sintetis**
- [ ] **Template LaTeX jurnal target** + contoh project **Overleaf** + panduan unggah
- [ ] Contoh `refs.bib` hasil ambil dari DOI (Crossref)
- [ ] **Vault checkpoint** selesai + `draf/paper/` lengkap sebagai jaring pengaman
- [ ] Rekaman cadangan tiap praktik
- [ ] Model cadangan berbayar murah (jaga-jaga model gratis bermasalah)
- [ ] Entri di `src/data/speaking.ts` setelah materi selesai

---

## 13. Etika & Prinsip

- **Human in the Loop** — AI mengolah, manusia memutuskan.
- **AI bukan penulis** — banyak jurnal melarang AI sebagai author & mewajibkan **disclosure**; manusia pemilik isi & penanggung jawab klaim.
- **Hanya open access** — unduhan literatur terbatas pada PDF open access; artikel berbayar diakses lewat langganan perpustakaan.
- **Data tinggal di tempatnya** — data sensitif tidak masuk ke agen; agen hanya menulis kode/sintaks.
- **Jangan kirim data sensitif ke model gratis** — sebagian dipakai untuk training; praktik pakai data publik.
- **Verifikasi sitasi & metrik** — metadata/`.bib` dari DOI/API; angka jurnal dari sumber resmi.
- **Hak cipta** — simpan kutipan secukupnya, jangan teks penuh artikel.
- **Transparansi** — simpan jejak langkah AI (prompt, output, keputusan) di vault agar bisa diaudit.
