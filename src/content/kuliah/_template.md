---
# TEMPLATE MATA KULIAH
#
# File ini diawali "_" sehingga otomatis DIABAIKAN oleh Astro dan tidak akan
# pernah diterbitkan ke situs. Ini hanya contoh bentuk datanya.
#
# Cara pakai:
#   1. Salin file ini, mis. jadi src/content/kuliah/dasar-pemrograman.md
#   2. Hapus awalan "_" pada nama file — nama file itulah yang jadi URL-nya
#      (/kuliah/dasar-pemrograman/)
#   3. Isi datanya
#
# MENGAMPU ULANG MATA KULIAH YANG SAMA DI SEMESTER BERIKUTNYA:
# Jangan buat file baru dan jangan hapus blok lama. Cukup TAMBAHKAN satu blok
# baru di bagian ATAS daftar "terms" — blok teratas yang dirender penuh,
# blok di bawahnya tampil sebagai arsip ringkas.
#
# MATERI TEKS (field "note"):
#   - Ditulis sebagai file Markdown terpisah di src/content/catatan/
#   - Frontmatter catatan: title, description, course (slug mata kuliah),
#     pubDate, updatedDate (opsional), tags, draft
#   - URL catatan: /kuliah/<slug-mata-kuliah>/<nama-file-catatan>/
#   - Satu catatan per TOPIK dan dipakai lintas semester. Kalau materinya
#     berubah, perbarui catatan yang sama dan isi updatedDate — jangan buat
#     file baru, supaya tautan yang sudah dibagikan ke mahasiswa tetap hidup.
#   - Field "note" berisi nama file catatan TANPA ekstensi. Kalau catatannya
#     belum ada atau masih draft, tautannya otomatis tidak muncul.
#
# MATERI FILE (field "file"):
#   - Simpan di public/kuliah/<slug-mata-kuliah>/<label-semester>/
#     Contoh label semester: 2026-2027-ganjil
#   - Folder per semester supaya materi semester lama tidak tertimpa.
#   - File .html dibuka di tab baru dengan label "Slide". URL eksternal
#     (Google Drive/Slides) juga dibuka di tab baru. Format lain (pdf, md, txt)
#     diunduh sebagai "Materi".
#   - Jangan unggah kunci jawaban, daftar nilai/kehadiran mahasiswa, atau
#     materi berhak cipta pihak lain.
#   - Soal ujian BOLEH diunggah, tetapi HANYA lewat mekanisme terenkripsi
#     (field "exam"), bukan sebagai materi biasa. Lihat bagian SOAL UJIAN.

# SOAL UJIAN (field "exam" + "examLabel"):
#   - Soal TIDAK pernah disimpan sebagai teks biasa di repo. Isinya dienkripsi
#     (AES-256-GCM, PIN menjadi kunci dekripsi) memakai skrip:
#         node scripts/ujian/encrypt.mjs '<PIN>'           # semua berkas
#         node scripts/ujian/encrypt.mjs '<PIN>' uas.json  # satu berkas saja
#     Tiap ujian boleh memakai PIN sendiri: jalankan skrip sekali per berkas
#     (mis. UTS dengan PIN-nya, UAS dengan PIN-nya).
#   - Sumber soal ASLI ada di scripts/ujian/plain/*.json — folder itu
#     DIABAIKAN git; JANGAN pernah meng-commit soal aslinya.
#   - Hasil enkripsi ditulis ke
#         public/kuliah/<slug-mata-kuliah>/<label-semester>/ujian/*.json
#   - Halaman pembuka soal (minta PIN → dekripsi → tampil) memakai
#     .../ujian/viewer.css + .../ujian/viewer.js. Satu berkas HTML per ujian
#     (mis. soal-uts.html), dibedakan lewat atribut data-source pada <body>.
#   - Field "exam" berisi URL halaman soal: dibuka di tab baru dengan label
#     gembok. "examLabel" mengisi teksnya, mis. "Soal UTS". PIN salah =
#     halaman tidak terbuka. Halaman diberi noindex dan tidak masuk sitemap.
#   - Mengganti PIN atau isi soal = ubah berkas di plain/, lalu jalankan
#     ulang skrip untuk berkas yang bersangkutan.
#   - Catatan keamanan: PIN pendek bisa di-brute-force karena berkas
#     terenkripsi ikut terbit. Pakai frasa yang agak panjang.

# KONVENSI PSEUDOCODE (berlaku sejak pekan 5 Algoritma dan Pemrograman I):
#   - Penugasan memakai panah: luas <- panjang x lebar
#   - Masukan dan keluaran: READ dan WRITE
#   - Kata kunci kapital, nama variabel huruf kecil
#   - Setiap variabel dideklarasikan beserta tipenya di blok DEKLARASI
#     sebelum BEGIN. Tipe: integer, real, char, string, boolean
#   - Perubahan gaya ini baru berlaku sejak pekan 5. Catatan pekan 1-4
#     sengaja dibiarkan tanpa deklarasi karena tipe belum dibahas.
#
# KONVENSI SELEKSI (sejak pekan 9):
#   - Operator perbandingan: =, ≠, <, >, ≤, ≥  (menghasilkan boolean)
#   - Operator logika: AND, OR, NOT
#   - Seleksi memakai blok IF dengan penanda akhir ENDIF:
#         IF kondisi THEN
#           aksi
#         ENDIF
#     Bentuk dua cabang menambahkan ELSE sebelum ENDIF. Rangkaian
#     banyak cabang memakai ELSE IF. Pilihan seragam terhadap satu
#     nilai memakai CASE ... OF ... OTHERWISE ... ENDCASE.
#
# KONVENSI ITERASI (sejak pekan 10):
#   - WHILE kondisi DO ... ENDWHILE   (kondisi diuji di awal)
#   - FOR i <- 1 TO n DO ... ENDFOR   (jumlah putaran sudah pasti)
#   - REPEAT ... UNTIL kondisi        (kondisi diuji di akhir)
#   - Nama variabel pencacah lazim memakai i.

title: 'Nama Mata Kuliah'
code: 'TIF0000'
credits: 3
program: 'Program Studi Informatika (S1)'
description: 'Ringkasan satu sampai dua kalimat. Dipakai sebagai meta description di hasil pencarian.'
terms:
  # Semester terbaru selalu di posisi pertama.
  - label: 'Ganjil 2027/2028'
    meetings:
      - week: 1
        date: 2027-09-13
        topic: 'Topik pertemuan pertama'
      - week: 2
        date: 2027-09-20
        topic: 'Topik pertemuan kedua'
        note: 'topik-pertemuan-kedua'
        file: '/kuliah/nama-mata-kuliah/2027-2028-ganjil/02-topik.html'
      - week: 8
        date: 2027-10-25
        topic: 'Ujian Tengah Semester (UTS)'
        exam: '/kuliah/nama-mata-kuliah/2027-2028-ganjil/soal-uts.html'
        examLabel: 'Soal UTS'
  # Semester sebelumnya cukup dipertahankan di bawahnya.
  - label: 'Ganjil 2026/2027'
    meetings:
      - week: 1
        date: 2026-09-14
        topic: 'Topik pertemuan pertama'
order: 1
draft: false
---

## Deskripsi

Tulis silabus atau penjelasan panjang di sini. Bagian ini opsional — kalau
dikosongkan, halaman tetap tampil dengan jadwal pertemuan saja.

Bagian ini berlaku untuk mata kuliahnya, bukan untuk semester tertentu, jadi
tidak perlu diubah setiap kali kamu mengampu ulang.
