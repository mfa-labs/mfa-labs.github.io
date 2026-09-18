import type { Bilingual } from '../lib/i18n';

export const SITE = 'https://mfa-labs.github.io';

export const profile = {
  name: 'Muhammad Fadhil Al Amal',
  alternateName: 'Fadhil Al Amal',
  brand: 'MFA Labs',
  brandTagline: 'AI for Language & Society',
  image: `${SITE}/cropped_circle_image.png`,

  jobTitle: {
    en: 'AI & Software Engineer | NLP Researcher | Informatics Lecturer',
    id: 'AI & Software Engineer | NLP Researcher | Dosen Informatika',
  } as Bilingual<string>,

  title: {
    en: 'Muhammad Fadhil Al Amal — AI & Software Engineer',
    id: 'Muhammad Fadhil Al Amal — AI & Software Engineer',
  } as Bilingual<string>,

  metaDescription: {
    en: 'AI & Software Engineer and NLP Researcher with 5+ years building healthcare SaaS, APIs, multi-tenant systems, and AI applications.',
    id: 'AI & Software Engineer dan peneliti NLP dengan pengalaman 5+ tahun membangun SaaS kesehatan, API, sistem multi-tenant, dan aplikasi AI.',
  } as Bilingual<string>,

  availability: {
    en: 'Open to Remote Engineering & Research Collaboration',
    id: 'Terbuka untuk Kolaborasi Remote Engineering & Riset',
  } as Bilingual<string>,

  hero: {
    headlineTop: 'AI & Software Engineer',
    headlineBottom: {
      en: 'Building healthcare SaaS systems and researching NLP for Indonesian regional languages.',
      id: 'Membangun SaaS kesehatan dan meneliti NLP untuk bahasa daerah Indonesia.',
    } as Bilingual<string>,
    support: {
      en: '5+ years building multi-tenant healthcare systems, APIs, database-intensive applications, and AI/NLP solutions.',
      id: '5+ tahun membangun sistem kesehatan multi-tenant, API, aplikasi padat basis data, dan solusi AI/NLP.',
    } as Bilingual<string>,
    engineeringCta: {
      en: 'View Engineering Work',
      id: 'Lihat Engineering',
    } as Bilingual<string>,
    researchCta: {
      en: 'View Research',
      id: 'Lihat Riset',
    } as Bilingual<string>,
  },

  stack: ['PHP', 'CodeIgniter', 'MySQL', 'Docker', 'REST API', 'Python'],

  address: {
    addressLocality: 'Banda Aceh',
    addressRegion: 'Aceh',
    addressCountry: 'ID',
  },

  knowsAbout: [
    'Software Engineering',
    'Natural Language Processing',
    'Healthcare IT',
    'Machine Learning',
    'SaaS',
  ],

  alumniOf: ['Universitas Syiah Kuala', 'UIN Maulana Malik Ibrahim Malang'],
  worksFor: ['PT Alfath Teknologi Kreatif', 'Universitas Ahmad Dahlan Aceh'],

  /** Isi folder ini sendiri; tombol Unduh CV hilang otomatis bila file tidak ada. */
  cv: {
    path: '/cv/muhammad-fadhil-al-amal-cv.pdf',
    label: {
      en: 'Download CV',
      id: 'Unduh CV',
    } as Bilingual<string>,
  },

  socials: {
    linkedin: 'https://www.linkedin.com/in/muhammad-fadhil-al-amal/',
    github: 'https://github.com/mfa-labs',
    scholar: 'https://scholar.google.com/citations?user=1pAz6xgAAAAJ&hl=id',
    email: 'fadhil.muq@gmail.com',
    whatsapp: 'https://wa.me/6282165687924',
  },
};

export interface NavItem {
  href: string;
  en: string;
  id: string;
  /** Konten hanya berbahasa Indonesia — jangan pernah diberi prefix /id. */
  idOnly?: boolean;
}

export const navItems: NavItem[] = [
  { href: '/engineering/', en: 'Engineering', id: 'Engineering' },
  { href: '/research/', en: 'Research', id: 'Riset' },
  { href: '/projects/', en: 'Projects', id: 'Proyek' },
  { href: '/experience/', en: 'Experience', id: 'Pengalaman' },
  { href: '/teaching/', en: 'Teaching', id: 'Pengajaran' },
  { href: '/speaking/', en: 'Speaking', id: 'Pembicara' },
  { href: '/blog/', en: 'Blog', id: 'Blog', idOnly: true },
];

export function navHref(item: NavItem, lang: 'en' | 'id'): string {
  return item.idOnly ? item.href : lang === 'id' ? `/id${item.href}` : item.href;
}
