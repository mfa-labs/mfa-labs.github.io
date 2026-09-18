import type { Bilingual, Lang } from '../lib/i18n';
import { SITE, profile } from './profile';
import type { MaterialLink } from './projects';

export interface Talk {
  /** ISO date — dipakai untuk menghitung status event. */
  date: string;
  dateLabel: Bilingual<string>;
  title: Bilingual<string>;
  role: Bilingual<string>;
  desc: Bilingual<string>;
  highlights: Bilingual<string[]>;
  links: MaterialLink[];
  tags: string[];
  locationName: Bilingual<string>;
  organizer: Bilingual<string>;
}

export const talks: Talk[] = [
  {
    date: '2026-09-16',
    dateLabel: { en: 'Wed, 16 September 2026', id: 'Rabu, 16 September 2026' },
    title: {
      en: 'Workshop on Digital Administration Management for Secretaries Using AI and Big Data Methods',
      id: 'Workshop Pengelolaan Administrasi bagi Sekretaris Berbasis Digital dengan Metode AI dan Big Data',
    },
    role: {
      en: 'AI-Powered Digital Archive System — Staying a Relevant Secretary in the AI Era',
      id: 'AI-Powered Digital Archive System — Menjadi Sekretaris yang Relevan di Era AI',
    },
    desc: {
      en: 'Led a workshop for students of the D3 Secretarial Study Programme, Faculty of Economics and Business, Syiah Kuala University. Covered building an AI-powered digital archive prototype — moving from archives that merely store files towards a source of organisational knowledge.',
      id: 'Pemateri workshop bagi mahasiswa Program Studi D3 Sekretari, Fakultas Ekonomi dan Bisnis Universitas Syiah Kuala. Materi membangun prototype sistem arsip digital berbasis AI — dari arsip yang sekadar menyimpan file menuju sumber pengetahuan organisasi.',
    },
    highlights: {
      en: [
        'The "Humans & AI" framing: AI is the 21st-century printing press, shifting human value from remembering towards analysis, evaluation, and creativity',
        'Bloom Taxonomy: AI is strongest at Remember–Understand–Apply, so secretaries must grow stronger at Analyze–Evaluate–Create',
        'AI on the secretary desk: CV screening, draft email replies, daily news summaries, meeting minutes, daily agenda and priorities, and fast research for meetings',
        'Built an AI-Powered Digital Archive prototype: Google Form → Google Drive → Apps Script → OpenRouter → automatic metadata stored in Google Sheets',
        'Technical walkthrough: onFormSubmit trigger, PDF-to-Base64 conversion, OpenRouter API calls, and prompt engineering that returns JSON metadata',
        'Ethics & Human in the Loop: AI can hallucinate and must be verified, sensitive documents need protection, and final decisions stay with humans',
      ],
      id: [
        'Kerangka "Manusia & AI": AI adalah mesin cetak abad ke-21 yang menggeser nilai manusia dari mengingat menuju analisis, evaluasi, dan kreativitas',
        'Bloom Taxonomy: AI sangat kuat di Remember–Understand–Apply, sehingga sekretaris harus makin kuat di Analyze–Evaluate–Create',
        'Studi kasus AI di meja sekretaris: screening CV, draft balasan email, ringkasan berita harian, notulen rapat, agenda & prioritas harian, dan riset cepat bahan rapat',
        'Membangun prototype AI-Powered Digital Archive: Google Form → Google Drive → Apps Script → OpenRouter → metadata otomatis tersimpan di Google Sheets',
        'Implementasi teknis: trigger onFormSubmit, konversi PDF ke Base64, panggilan OpenRouter API, dan prompt engineering yang mengembalikan metadata JSON',
        'Etika & Human in the Loop: AI bisa berhalusinasi dan wajib diverifikasi, dokumen sensitif harus dijaga, dan keputusan akhir tetap di tangan manusia',
      ],
    },
    links: [
      {
        label: { en: 'Invitation', id: 'Undangan' },
        href: 'https://drive.google.com/file/d/1lkJdYrXGXqnGiThrJo0v_3BMZN167DDL/view?usp=sharing',
        newTab: true,
      },
      { label: { en: 'Slide', id: 'Slide' }, href: '/materi/workshop-ai-sekre.html', newTab: true },
      {
        label: { en: 'Apps Script code', id: 'Kode Apps Script' },
        href: '/materi/smart-archive/',
        newTab: true,
      },
    ],
    tags: ['Digital Archiving', 'Apps Script', 'OpenRouter', 'Prompt Engineering', 'Human in the Loop'],
    locationName: {
      en: 'D3 Secretarial Study Programme Hall, Faculty of Economics and Business, Syiah Kuala University',
      id: 'Aula Prodi D3 Sekretari, Fakultas Ekonomi dan Bisnis Universitas Syiah Kuala',
    },
    organizer: {
      en: 'D3 Secretarial Study Programme, Faculty of Economics and Business, Syiah Kuala University',
      id: 'Program Studi D3 Sekretari, Fakultas Ekonomi dan Bisnis Universitas Syiah Kuala',
    },
  },
  {
    date: '2026-07-07',
    dateLabel: { en: 'Tue, 7 July 2026', id: 'Selasa, 7 Juli 2026' },
    title: {
      en: 'Archive Innovation and AI Adoption for Study Programme Staff — Even Semester, Academic Year 2025/2026',
      id: 'Inovasi Arsip dan Penggunaan AI bagi tendik Program Studi Semester Genap Tahun Akademik 2025/2026',
    },
    role: {
      en: 'Session 2 — AI Beyond ChatGPT: Claude, Gemini Canvas, and a Tool-Building Culture',
      id: 'Sesi 2 — AI Bukan Sekadar ChatGPT: Claude, Gemini Canvas, dan Budaya Membuat Tools',
    },
    desc: {
      en: 'Led a workshop for education staff of the Doctoral Programme in Accounting, Faculty of Economics and Business, Syiah Kuala University. Covered building office administration tools — official letters, SOPs, reports, and meeting minutes — straight from natural language via Gemini Canvas, no coding required.',
      id: 'Pemateri workshop bagi tenaga kependidikan Program Studi Doktor Ilmu Akuntansi, Fakultas Ekonomi dan Bisnis Universitas Syiah Kuala. Membangun tools administrasi perkantoran — surat resmi, SOP, laporan, dan notulensi — langsung dari bahasa alami via Gemini Canvas, tanpa coding.',
    },
    highlights: {
      en: [
        'Session 2 "AI for Building Tools": a Claude vs ChatGPT comparison — 200K token context, thinking mode, and data not used for training',
        'Cost analysis: Claude 3.5 Sonnet at $3/$15 per 1M tokens vs free Gemini 2.5 Flash — the saving strategy is Gemini for daily work, Claude only for long documents',
        'Never paste sensitive data (national ID numbers, salaries) into public AI, plus why ChatGPT stays more popular even though Claude is technically stronger',
        'Tool-building culture — "we are not just users, we are makers": AI as a tool maker, with Gemini Canvas for building tools without coding',
        'Gemini Canvas workshop: 4 administrative tools (official letters, SOPs, reports, meeting minutes) across Sessions 3–6 — participants leave with 4 ready-to-use tools',
      ],
      id: [
        'Sesi 2 "AI untuk Membuat Tools": perbandingan Claude vs ChatGPT — konteks 200K token, thinking mode, dan data tidak dipakai untuk training',
        'Analisis biaya: Claude 3.5 Sonnet $3/$15 per 1M token vs Gemini 2.5 Flash yang gratis — strategi hematnya pakai Gemini untuk tugas harian, Claude hanya untuk dokumen panjang',
        'Jangan masukkan data sensitif (NIK, gaji) ke AI publik, dan pahami kenapa ChatGPT tetap lebih populer meski Claude unggul secara teknis',
        'Budaya membuat tools — "kita bukan pemakai, tapi pembuat": AI sebagai tool maker, Gemini Canvas bikin tools tanpa coding',
        'Workshop Gemini Canvas: 4 tools administrasi (Surat Resmi, SOP, Laporan, Notulensi) pada Sesi 3–6 — peserta pulang dengan 4 tools siap pakai',
      ],
    },
    links: [
      {
        label: { en: 'Invitation', id: 'Undangan' },
        href: 'https://drive.google.com/file/d/1HniMlZeaUVmIv4g_D19orzwuJavaWDMA/view?usp=sharing',
        newTab: true,
      },
      {
        label: { en: 'Slide', id: 'Slide' },
        href: '/materi/workshop-ai-tendik-sesi2.html',
        newTab: true,
      },
    ],
    tags: ['Claude vs ChatGPT', 'Gemini Canvas', 'AI Cost Strategy', 'Tool-Building Culture'],
    locationName: {
      en: 'FEB USK Laboratory Room, Faculty of Economics and Business, Syiah Kuala University',
      id: 'Ruang Laboratorium FEB USK, Fakultas Ekonomi dan Bisnis Universitas Syiah Kuala',
    },
    organizer: {
      en: 'Doctoral Programme in Accounting, Faculty of Economics and Business, Syiah Kuala University',
      id: 'Program Studi Doktor Ilmu Akuntansi, Fakultas Ekonomi dan Bisnis Universitas Syiah Kuala',
    },
  },
];

/**
 * Status event dihitung dari tanggal, bukan ditulis manual — supaya acara yang
 * sudah lewat tidak pernah terkirim ke mesin pencari sebagai EventScheduled.
 */
export function eventSchema(talk: Talk, lang: Lang) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const isPast = new Date(`${talk.date}T00:00:00`) < today;

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: talk.title[lang],
    description: talk.desc[lang],
    startDate: talk.date,
    eventStatus: isPast
      ? 'https://schema.org/EventCompleted'
      : 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: talk.locationName[lang],
      address: {
        '@type': 'PostalAddress',
        ...profile.address,
      },
    },
    organizer: {
      '@type': 'Organization',
      name: talk.organizer[lang],
    },
    performer: {
      '@type': 'Person',
      name: profile.name,
      url: `${SITE}${lang === 'id' ? '/id/' : '/'}`,
    },
    image: profile.image,
    inLanguage: lang,
  };
}
