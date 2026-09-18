import type { Bilingual } from '../lib/i18n';

export interface MaterialLink {
  label: Bilingual<string>;
  href: string;
  /** true = tautan eksternal atau slide HTML → buka di tab baru. */
  newTab?: boolean;
}

export interface Project {
  tag: Bilingual<string>;
  title: string;
  role: Bilingual<string>;
  desc: Bilingual<string>;
  highlights: Bilingual<string[]>;
  links: MaterialLink[];
  tags: string[];
}

export const projects: Project[] = [
  {
    tag: {
      en: 'Community Service Project · 2025–2026 · Flutter + REST API',
      id: 'Projek Pengabdian Masyarakat · 2025–2026 · Flutter + REST API',
    },
    title: 'SIBUNDA — Sistem Informasi Bunda',
    role: {
      en: 'Fullstack Developer · Android Mobile App + Node.js Backend',
      id: 'Fullstack Developer · Aplikasi Mobile Android + Backend Node.js',
    },
    desc: {
      en: 'A nutrition monitoring and stunting prevention app for infants and toddlers — helping community health cadres and mothers track child growth independently against WHO standards, complete with nutrition education, healthy recipes, a community forum, and meal reminders.',
      id: 'Aplikasi monitoring gizi dan pencegahan stunting untuk anak batita/balita — membantu kader kesehatan dan ibu balita memantau pertumbuhan anak secara mandiri berbasis standar WHO, lengkap dengan edukasi gizi, resep sehat, forum komunitas, dan pengingat jadwal makan.',
    },
    highlights: {
      en: [
        'WHO 0–5 years growth charts (weight/age, height/age, weight/height) with nutritional status determination from bundled CSV datasets',
        'Daily intake logging "Isi Piringku" — 11 food components, plate photos, daily summary across 6 nutrition categories',
        '30 Flutter screens with setState state management, integrated with a Node.js REST API on Vercel',
        'Production app v1.1.1 used by cadres and mothers under the Faculty of Nursing, Syiah Kuala University',
      ],
      id: [
        'Grafik pertumbuhan WHO 0–5 tahun (BB/U, TB/U, BB/TB) dengan penentuan status gizi dari dataset CSV yang dibundel',
        'Pencatatan asupan harian "Isi Piringku" — 11 komponen makanan, foto piring, ringkasan harian 6 kategori gizi',
        '30 layar Flutter dengan state management setState, terintegrasi REST API Node.js di Vercel',
        'Aplikasi produksi v1.1.1 yang digunakan kader dan ibu balita binaan Fakultas Keperawatan, Universitas Syiah Kuala',
      ],
    },
    links: [
      { label: { en: 'Read technical article', id: 'Baca artikel teknis' }, href: '/blog/sibunda' },
    ],
    tags: ['Flutter', 'Dart', 'Node.js', 'REST API', 'Stunting', 'WHO Growth Chart'],
  },
  {
    tag: {
      en: 'Workshop Deliverable · 2026 · Apps Script + LLM API',
      id: 'Hasil Workshop · 2026 · Apps Script + API LLM',
    },
    title: 'AI-Powered Digital Archive',
    role: {
      en: 'Instructor & System Designer · Google Workspace + Apps Script',
      id: 'Pemateri & Perancang Sistem · Google Workspace + Apps Script',
    },
    desc: {
      en: 'A no-code-adjacent digital archive pipeline built with workshop participants at the D3 Secretarial Study Programme, Syiah Kuala University — turning archived files into a structured knowledge source with automatically generated metadata.',
      id: 'Pipeline arsip digital yang dibangun bersama peserta workshop di Program Studi D3 Sekretari, Universitas Syiah Kuala — mengubah berkas arsip menjadi sumber pengetahuan terstruktur dengan metadata yang dihasilkan otomatis.',
    },
    highlights: {
      en: [
        'Flow: Google Form → Google Drive → Apps Script → OpenRouter → structured metadata in Google Sheets',
        'onFormSubmit trigger, PDF-to-Base64 conversion, and an LLM prompt that returns JSON metadata (type, number, date, sender, subject, summary, keywords)',
        'Full setup guide and source code published as open learning material',
        'Human-in-the-loop framing: generated metadata is always verified by the secretary, sensitive documents stay protected',
      ],
      id: [
        'Alur: Google Form → Google Drive → Apps Script → OpenRouter → metadata terstruktur di Google Sheets',
        'Trigger onFormSubmit, konversi PDF ke Base64, dan prompt LLM yang mengembalikan metadata JSON (jenis, nomor, tanggal, pengirim, perihal, ringkasan, kata kunci)',
        'Panduan setup dan kode sumber lengkap diterbitkan sebagai materi pembelajaran terbuka',
        'Prinsip Human in the Loop: metadata hasil AI selalu diverifikasi sekretaris, dokumen sensitif tetap terlindungi',
      ],
    },
    links: [
      {
        label: { en: 'Slide', id: 'Slide' },
        href: '/materi/workshop-ai-sekre.html',
        newTab: true,
      },
      {
        label: { en: 'Apps Script documentation', id: 'Dokumentasi Apps Script' },
        href: '/materi/smart-archive/',
        newTab: true,
      },
    ],
    tags: ['Apps Script', 'OpenRouter', 'Prompt Engineering', 'Google Workspace'],
  },
];
