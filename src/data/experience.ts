import type { Bilingual } from '../lib/i18n';

export interface Job {
  role: Bilingual<string>;
  org: string;
  period: Bilingual<string>;
  type: Bilingual<string>;
  items: Bilingual<string[]>;
}

export const jobs: Job[] = [
  {
    role: {
      en: 'Lecturer — Informatics Study Programme (S1)',
      id: 'Dosen — Program Studi Informatika (S1)',
    },
    org: 'Universitas Ahmad Dahlan Aceh',
    period: { en: '2026 – Present', id: '2026 – Sekarang' },
    type: { en: 'Concurrent with engineering role', id: 'Paralel dengan peran engineer' },
    items: {
      en: ['Teaching and supervising undergraduate Informatics students'],
      id: ['Mengajar dan membimbing mahasiswa Program Studi Informatika jenjang S1'],
    },
  },
  {
    role: { en: 'Software Engineer', id: 'Software Engineer' },
    org: 'PT Alfath Teknologi Kreatif — platform Kelola.net',
    period: { en: 'Apr 2021 – Present', id: 'Apr 2021 – Sekarang' },
    type: { en: 'Full-time', id: 'Full-time' },
    items: {
      en: [
        'Designed and built a multi-tenant clinic management SaaS — application architecture, database design, backend, and deployment (PHP, MySQL, PostgreSQL, Docker, REST API)',
        'Reduced critical page load time from 75 seconds to about 5 seconds (93% improvement) through application and database optimization',
        'Led technical implementation and coordinated development tasks across the engineering team, including code review and technical decision-making',
        'Integrated the platform with SATUSEHAT (OAuth2, FHIR, ICD-10/ICD-9) to submit electronic medical records to the Indonesian Ministry of Health',
      ],
      id: [
        'Merancang dan membangun SaaS multi-tenant untuk manajemen klinik — arsitektur aplikasi, desain database, backend, dan deployment (PHP, MySQL, PostgreSQL, Docker, REST API)',
        'Menurunkan waktu muat halaman kritis dari 75 detik menjadi sekitar 5 detik (perbaikan 93%) melalui optimasi aplikasi dan database',
        'Memimpin implementasi teknis dan mengoordinasi tugas pengembangan tim, termasuk code review dan pengambilan keputusan teknis',
        'Mengintegrasikan platform dengan SATUSEHAT (OAuth2, FHIR, ICD-10/ICD-9) untuk pengiriman rekam medis elektronik ke Kementerian Kesehatan',
      ],
    },
  },
  {
    role: { en: 'NLP Engineer', id: 'NLP Engineer' },
    org: 'PT Bahasa Kinerja Utama',
    period: { en: 'Jan 2023 – Dec 2023', id: 'Jan 2023 – Des 2023' },
    type: { en: 'Contract', id: 'Kontrak' },
    items: {
      en: [
        'Built and experimented with deep learning models (Python, PyTorch) for Indonesian conversational text',
        'Developed NLP solutions for automated information extraction from unstructured phone-call transcriptions',
        'Performed preprocessing, cleaning, and transformation of noisy transcription data',
        'Integrated NLP processing into application workflows to turn unstructured text into structured information',
      ],
      id: [
        'Membangun dan mengeksperimen model deep learning (Python, PyTorch) untuk teks percakapan bahasa Indonesia',
        'Mengembangkan solusi NLP untuk ekstraksi informasi otomatis dari transkrip panggilan yang tidak terstruktur',
        'Melakukan prapemrosesan, pembersihan, dan transformasi data transkripsi yang berisik',
        'Mengintegrasikan pemrosesan NLP ke alur aplikasi untuk mengubah teks tak terstruktur menjadi informasi terstruktur',
      ],
    },
  },
  {
    role: { en: 'Back End Developer', id: 'Back End Developer' },
    org: 'PT Ina Gata Persada',
    period: { en: 'Feb 2020 – Mar 2021', id: 'Feb 2020 – Mar 2021' },
    type: { en: 'Full-time', id: 'Full-time' },
    items: {
      en: [
        'Developed backend systems for 4 web applications and 1 mobile application',
        'Designed and implemented backend features, REST APIs, database operations, and business logic',
        'Learned Flutter and shipped a mobile application in under three months',
      ],
      id: [
        'Mengembangkan backend untuk 4 aplikasi web dan 1 aplikasi mobile',
        'Merancang dan mengimplementasikan fitur backend, REST API, operasi database, dan business logic',
        'Mempelajari Flutter dan mengirimkan aplikasi mobile dalam waktu kurang dari tiga bulan',
      ],
    },
  },
  {
    role: { en: 'Web Developer', id: 'Web Developer' },
    org: 'UIN Maulana Malik Ibrahim Malang',
    period: { en: 'Jan 2019 – Dec 2019', id: 'Jan 2019 – Des 2019' },
    type: { en: 'Part-time', id: 'Part-time' },
    items: {
      en: [
        'Built a Single Tuition Fee (UKT) determination information system',
        'Cut data calculation time from 10 minutes to under 2 minutes through query optimization and database normalization',
      ],
      id: [
        'Membangun sistem informasi penentuan Uang Kuliah Tunggal (UKT)',
        'Memangkas waktu kalkulasi data dari 10 menit menjadi di bawah 2 menit melalui optimasi query dan normalisasi database',
      ],
    },
  },
];

export const education = [
  {
    degree: {
      en: 'Master of Artificial Intelligence',
      id: 'Magister Artificial Intelligence',
    } as Bilingual<string>,
    school: 'Universitas Syiah Kuala',
    period: '2021 – 2023',
  },
  {
    degree: { en: 'Bachelor of Informatics', id: 'Sarjana Informatika' } as Bilingual<string>,
    school: 'UIN Maulana Malik Ibrahim Malang',
    period: '2015 – 2020',
  },
];

export interface SkillGroup {
  icon: string;
  title: Bilingual<string>;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    icon: 'dns',
    title: { en: 'Backend & Infrastructure', id: 'Backend & Infrastruktur' },
    items: [
      'PHP (CodeIgniter 3 MVC)',
      'MySQL 8.0',
      'REST API & JSON Integration',
      'Docker & VPS Management',
      'Redis Session & Cache',
      'Bootstrap 4 UI',
    ],
  },
  {
    icon: 'psychology',
    title: { en: 'AI & Machine Learning', id: 'AI & Machine Learning' },
    items: [
      'Natural Language Processing',
      'Sentiment Analysis',
      'LLM (Ollama, Hugging Face, Qwen)',
      'Scikit-learn',
      'TensorFlow',
    ],
  },
  {
    icon: 'medical_services',
    title: { en: 'Healthcare Technology', id: 'Teknologi Kesehatan' },
    items: [
      'SATUSEHAT Integration (FHIR)',
      'Multi-Tenant SaaS Platforms',
      'Clinical EMR & Workflow Systems',
      'Financial & Billing Systems',
      'Healthcare DevOps',
    ],
  },
];
