import type { Bilingual } from '../lib/i18n';

export const researchTagline: Bilingual<string> = {
  en: 'NLP · Regional Languages · Applied AI',
  id: 'NLP · Bahasa Daerah · Applied AI',
};

export const researchFocus: Bilingual<string[]> = {
  en: [
    'Regional Language NLP',
    'Transformer Models',
    'Indonesian Language Technology',
    'Applied AI',
  ],
  id: [
    'NLP Bahasa Daerah',
    'Model Transformer',
    'Teknologi Bahasa Indonesia',
    'Applied AI',
  ],
};

export interface Publication {
  title: string;
  venue: string;
  year: number;
  doi: string;
  url: string;
  authors: string;
}

export const publications: Publication[] = [
  {
    title: 'Hybrid Transformer-RNN Model for Classification of Indonesian Regional Language',
    venue: '2025 International Conference on ICT for Smart Society (ICISS)',
    year: 2025,
    doi: '10.1109/ICISS66954.2025.11389462',
    url: 'https://ieeexplore.ieee.org/document/11389462/',
    authors: 'Muhammad Fadhil Al Amal',
  },
];

export interface ResearchProject {
  title: Bilingual<string>;
  desc: Bilingual<string>;
  tags: string[];
  /** Publikasi pendukung bila sudah terbit. */
  published?: boolean;
}

export const researchProjects: ResearchProject[] = [
  {
    published: true,
    title: {
      en: 'Hybrid Transformer-RNN Model for Regional Language Classification',
      id: 'Model Hybrid Transformer-RNN untuk Klasifikasi Bahasa Daerah',
    },
    desc: {
      en: 'Hybrid transformer–recurrent architecture for classifying Indonesian regional languages. Published in an international proceedings (IEEE ICISS 2025).',
      id: 'Arsitektur hybrid transformer–recurrent untuk klasifikasi bahasa daerah Indonesia. Terbit di prosiding internasional (IEEE ICISS 2025).',
    },
    tags: ['ML Research', 'Deep Learning', 'Transformer', 'RNN'],
  },
  {
    title: {
      en: 'Sentiment Analysis of Acehnese Language',
      id: 'Analisis Sentimen Bahasa Aceh',
    },
    desc: {
      en: 'NLP research on sentiment classification for Acehnese regional language texts, including corpus preparation and low-resource model comparison.',
      id: 'Riset NLP untuk klasifikasi sentimen teks bahasa daerah Aceh, mencakup penyiapan korpus dan perbandingan model low-resource.',
    },
    tags: ['Python', 'Scikit-learn', 'IndoBERT', 'Qwen'],
  },
  {
    title: {
      en: 'Agentic AI Research',
      id: 'Riset Agentic AI',
    },
    desc: {
      en: 'Research on generative AI and LLMs using multi-step reasoning workflows and self-refinement pipelines.',
      id: 'Riset generative AI dan LLM menggunakan alur penalaran multi-langkah dan pipeline self-refinement.',
    },
    tags: ['Qwen', 'Ollama', 'Agentic AI'],
  },
];
