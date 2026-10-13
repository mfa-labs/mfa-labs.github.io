#!/usr/bin/env node
// Enkripsi soal ujian untuk situs statis.
//
// PIN adalah kunci dekripsi. Berkas terenkripsi boleh diunggah ke situs
// publik — tanpa PIN, isinya tidak terbaca. Karena itu:
//   - JANGAN menulis PIN di mana pun di dalam repo ini.
//   - Berkas soal asli (plaintext) disimpan di scripts/ujian/plain/ yang
//     sudah di-gitignore; JANGAN pernah meng-commit-nya.
//
// Pemakaian:
//   node scripts/ujian/encrypt.mjs <PIN>             # semua berkas di plain/
//   node scripts/ujian/encrypt.mjs <PIN> uts.json    # satu berkas saja
//
// Tiap ujian boleh memakai PIN sendiri — jalankan skrip sekali per berkas:
//   node scripts/ujian/encrypt.mjs 'INF-UAD-2026-UTS' uts.json
//   node scripts/ujian/encrypt.mjs 'INF-UAD-2026-UAS' uas.json
//
// Tanpa daftar berkas, seluruh *.json di scripts/ujian/plain/ diproses.
// Hasil terenkripsi ditulis ke
//   public/kuliah/algoritma-dan-pemrograman-1/2026-2027-ganjil/ujian/<nama>.json
//
// Mengganti PIN atau isi soal = ubah berkas di plain/ lalu jalankan ulang
// perintah di atas. Halaman soal membaca hasil terenkripsi ini apa adanya.

import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'node:fs';
import { createCipheriv, pbkdf2Sync, randomBytes } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ITERATIONS = 300000;
const KEY_LEN = 32;
const OUT_DIR = ['public', 'kuliah', 'algoritma-dan-pemrograman-1', '2026-2027-ganjil', 'ujian'];

const here = dirname(fileURLToPath(import.meta.url));
const plainDir = join(here, 'plain');
const outDir = join(here, '..', '..', ...OUT_DIR);

const pin = process.argv[2];
if (!pin) {
  console.error('PIN wajib diisi.\n\n  node scripts/ujian/encrypt.mjs <PIN> [berkas.json ...]\n');
  process.exit(1);
}

if (!existsSync(plainDir)) {
  console.error(`Folder tidak ditemukan: ${plainDir}`);
  process.exit(1);
}

const requested = process.argv.slice(3);
const files = requested.length > 0 ? requested : readdirSync(plainDir).filter((f) => f.endsWith('.json'));

if (files.length === 0) {
  console.error(`Tidak ada berkas *.json di ${plainDir}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });

for (const file of files) {
  const srcPath = join(plainDir, file);
  if (!existsSync(srcPath)) {
    console.error(`Berkas tidak ditemukan: ${srcPath}`);
    process.exit(1);
  }

  const raw = readFileSync(srcPath, 'utf8');
  try {
    JSON.parse(raw);
  } catch (error) {
    console.error(`JSON tidak valid pada ${file} — ${error.message}`);
    process.exit(1);
  }

  const salt = randomBytes(16);
  const iv = randomBytes(12);
  const key = pbkdf2Sync(pin, salt, ITERATIONS, KEY_LEN, 'sha256');

  const cipher = createCipheriv('aes-256-gcm', key, iv);
  const ciphertext = Buffer.concat([cipher.update(raw, 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();

  const payload = {
    v: 1,
    kdf: 'PBKDF2-SHA256',
    iterations: ITERATIONS,
    cipher: 'AES-256-GCM',
    salt: salt.toString('base64'),
    iv: iv.toString('base64'),
    ct: Buffer.concat([ciphertext, tag]).toString('base64'),
  };

  const outPath = join(outDir, file);
  writeFileSync(outPath, JSON.stringify(payload, null, 2) + '\n');
  console.log(`OK  ${file}  ->  ${outPath}`);
}
