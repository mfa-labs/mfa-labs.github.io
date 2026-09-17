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
#   - Jangan unggah soal ujian, kunci jawaban, daftar nilai/kehadiran
#     mahasiswa, atau materi berhak cipta pihak lain.

# KONVENSI PSEUDOCODE (berlaku sejak pekan 5 Algoritma dan Pemrograman I):
#   - Penugasan memakai panah: luas <- panjang x lebar
#   - Masukan dan keluaran: READ dan WRITE
#   - Kata kunci kapital, nama variabel huruf kecil
#   - Setiap variabel dideklarasikan beserta tipenya di blok DEKLARASI
#     sebelum BEGIN. Tipe: integer, real, char, string, boolean
#   - Perubahan gaya ini baru berlaku sejak pekan 5. Catatan pekan 1-4
#     sengaja dibiarkan tanpa deklarasi karena tipe belum dibahas.

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
