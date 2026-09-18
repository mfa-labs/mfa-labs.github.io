import type { Bilingual } from '../lib/i18n';

export interface Workstream {
  tag: Bilingual<string>;
  title: Bilingual<string>;
  desc: Bilingual<string>;
  items: Bilingual<string[]>;
  tags: string[];
  /** Slug artikel studi kasus di /blog/. */
  link?: string;
  /** Ditekankan di homepage sebagai 4 kartu terpilih. */
  featured?: boolean;
}

export const workstreams: Workstream[] = [
  {
    featured: true,
    tag: {
      en: 'Performance Engineering · Financial Systems · ~44 commits · Jun 2021–Mar 2025',
      id: 'Performance Engineering · Sistem Keuangan · ~44 komit · Jun 2021–Mar 2025',
    },
    title: {
      en: 'Financial Reporting & Jasa Medis System',
      id: 'Sistem Laporan Keuangan & Jasa Medis',
    },
    desc: {
      en: 'Multi-role financial reporting with server-side processing, Excel/PDF export, and complex medical fee-splitting (Jasa Medis) calculations across clinic, private practice, owner, and BPJS dashboards.',
      id: 'Laporan keuangan multi-role dengan server-side processing, export Excel/PDF, dan perhitungan fee dokter (Jasa Medis) yang kompleks di dashboard klinik, praktik pribadi, owner, dan BPJS.',
    },
    items: {
      en: [
        'Multi-role reports: clinic, private practice, owner, BPJS financial dashboards',
        'Jasa Medis fee splitting — per-procedure doctor fee calculation; fixed date-31 edge case in reports',
        'Laporan Dinkes (local health dept): SKP doctor reports, inpatient reports',
        'Owner revenue breakdown — per-clinic income detail for multi-clinic owners',
        'Excel (PhpSpreadsheet) & PDF (Dompdf) export with non-technical-readable formatting',
        'Server-side DataTable pagination for large transaction tables (daily, monthly, yearly)',
        'Custom date range filters across all reports; cancelled patient tracking with created_by',
      ],
      id: [
        'Laporan multi-role: dashboard keuangan klinik, praktik pribadi, owner, dan BPJS',
        'Jasa Medis fee splitting — perhitungan fee dokter per tindakan; memperbaiki edge case tanggal 31 pada laporan',
        'Laporan Dinkes: laporan SKP dokter dan laporan rawat inap',
        'Breakdown pendapatan owner — detail pendapatan per klinik untuk pemilik multi-klinik',
        'Export Excel (PhpSpreadsheet) & PDF (Dompdf) dengan format yang mudah dibaca non-teknis',
        'Server-side DataTable untuk tabel transaksi besar (harian, bulanan, tahunan)',
        'Filter rentang tanggal kustom di semua laporan; pelacakan pasien batal beserta created_by',
      ],
    },
    tags: ['PHP', 'CodeIgniter', 'MySQL', 'PhpSpreadsheet', 'Dompdf'],
    link: '/blog/financial-reporting-jasmedis',
  },
  {
    featured: true,
    tag: {
      en: 'Healthcare Interoperability / API Integration · ~34 commits · Aug 2023–May 2025',
      id: 'Interoperabilitas Kesehatan / Integrasi API · ~34 komit · Agu 2023–Mei 2025',
    },
    title: {
      en: 'SATUSEHAT Integration — National Health Data Platform',
      id: 'Integrasi SATUSEHAT — Platform Data Kesehatan Nasional',
    },
    desc: {
      en: "Integrated the clinic system with SATUSEHAT, the Indonesian Ministry of Health's national health data exchange platform — a separate database for logs and tokens, enabling hundreds of clinics to submit electronic medical records to the national system.",
      id: 'Mengintegrasikan sistem klinik dengan SATUSEHAT, platform pertukaran data kesehatan nasional Kemenkes RI — dengan database terpisah untuk log dan token, memungkinkan ratusan klinik mengirim data RME ke sistem nasional.',
    },
    items: {
      en: [
        'REST API client for SATUSEHAT endpoints (OAuth2 auth, CRUD patient, practitioner, organization, location)',
        'Patient IHS lookup & registration with duplicate detection, no-IHS-not-found handling, error recovery',
        'SDMK practitioner (doctor, nurse) verification against the national SDMK database',
        'Organization & Location — facility and practice room registration via API; configurable staging/production environment',
        'RME encounter submission with ICD-10 diagnosis and ICD-9 procedures',
        'ICD-9 procedure code mapping for clinic actions; doctor checkout with ICD-9 codes',
        'Logging & error tracking with dedicated log tables, per-transaction error detail, resend queue for failed submissions',
        'Configurable SATUSEHAT key per tenant from the admin panel (not hardcoded)',
        'Per-role menus — SATUSEHAT available in clinic, doctor, and admin dashboards with different context',
      ],
      id: [
        'REST API client untuk endpoint SATUSEHAT (auth OAuth2, CRUD pasien, practitioner, organization, location)',
        'Patient IHS lookup & registrasi dengan deteksi duplikat, penanganan IHS tidak ditemukan, dan error recovery',
        'Verifikasi practitioner SDMK (dokter, perawat) ke database SDMK nasional',
        'Organization & Location — registrasi fasilitas dan ruang praktik via API; environment staging/production yang dapat dikonfigurasi',
        'Pengiriman encounter RME dengan diagnosis ICD-10 dan tindakan ICD-9',
        'Pemetaan kode tindakan ICD-9 untuk aksi klinik; checkout dokter dengan kode ICD-9',
        'Logging & pelacakan error dengan tabel log khusus, detail error per transaksi, dan antrean kirim ulang untuk pengiriman yang gagal',
        'Kunci SATUSEHAT per tenant yang dapat dikonfigurasi dari panel admin (tidak hardcoded)',
        'Menu per role — SATUSEHAT tersedia di dashboard klinik, dokter, dan admin dengan konteks berbeda',
      ],
    },
    tags: ['REST API', 'OAuth2', 'JSON', 'ICD-10', 'ICD-9', 'FHIR'],
    link: '/blog/satusehat-integration',
  },
  {
    featured: true,
    tag: {
      en: 'System Architecture / Authorization · 12 roles · 2021–2026',
      id: 'Arsitektur Sistem / Otorisasi · 12 role · 2021–2026',
    },
    title: {
      en: 'Multi-Tenant & Role-Based Architecture',
      id: 'Arsitektur Multi-Tenant & 12 Role',
    },
    desc: {
      en: 'Multi-tenant architecture with 12 user roles, hash-based data isolation (klinikKey, praktikKey), role-based controller routing, shared clinic groups, and session + OTP auth for device security.',
      id: 'Arsitektur multi-tenant dengan 12 role pengguna, isolasi data berbasis hash (klinikKey, praktikKey), routing controller per role, grup klinik berbagi, serta auth session + OTP untuk keamanan perangkat.',
    },
    items: {
      en: [
        'Data isolation — every query scoped by klinikKey and praktikKey (128-char hash)',
        '12 roles: Clinic, Doctor, Clinic Admin, Owner, Partner, Super Admin, Private Practice, BPJS Clinic, General, General Clinic, General Clinic Doctor, General Clinic Admin',
        'Shared clinic groups — several partner clinics share record sets with a limited scope',
        'Auth routing: login → role detection → redirect to role-specific dashboard; session + OTP for new devices',
        'CRUD role management for super admin with per-tenant user and access control',
      ],
      id: [
        'Isolasi data — setiap query dibatasi klinikKey dan praktikKey (hash 128 karakter)',
        '12 role: Klinik, Dokter, Admin Klinik, Owner, Partner, Super Admin, Praktik Pribadi, Klinik BPJS, Umum, Klinik Umum, Dokter Klinik Umum, Admin Klinik Umum',
        'Grup klinik berbagi — beberapa klinik mitra berbagi rekam medis dengan cakupan terbatas',
        'Auth routing: login → deteksi role → redirect ke dashboard sesuai role; session + OTP untuk perangkat baru',
        'CRUD manajemen role untuk super admin dengan kontrol akses dan user per tenant',
      ],
    },
    tags: ['PHP', 'CodeIgniter', 'MySQL', 'RBAC', 'Multi-Tenant'],
    link: '/blog/multi-tenant-role-architecture',
  },
  {
    featured: true,
    tag: {
      en: 'Automation System / CRM · ~28 commits · May 2021–Jul 2026',
      id: 'Sistem Otomasi / CRM · ~28 komit · Mei 2021–Jul 2026',
    },
    title: {
      en: 'WhatsApp Notification & CRM System',
      id: 'Sistem Notifikasi WhatsApp & CRM',
    },
    desc: {
      en: 'End-to-end WhatsApp notification system for appointment reminders, OTP login, and invoice delivery — spanning a legacy cron architecture (2021–2025) and a modern CRM module (2026).',
      id: 'Sistem notifikasi WhatsApp end-to-end untuk pengingat janji temu, OTP login, dan pengiriman invoice — dari arsitektur cron legacy (2021–2025) hingga modul CRM modern (2026).',
    },
    items: {
      en: [
        'Legacy cron-based delivery: H-1 reminders, same-day reminders, birthday greetings, daily clinic reports per doctor',
        'CRM module with device management (CRUD via the provider API, QR scan display, status polling via AJAX, logout)',
        'Template engine — 4 trigger types (H-1, Same-Day, Birthday, Invoice) with dynamic variables: {nama}, {hari}, {tanggal}, {jam}, {dokter}, {invoice}, {nominal}',
        'Centralised model layer for device and template queries, with shared trigger-id validation',
        'Rate limiting — 8s minimum poll interval per user via session cooldown',
        'WhatsApp OTP for two-factor authentication on new device login; trusted-device cookie',
        'Webhook-based WhatsApp bot for admin commands',
        'Bulk save via sequential AJAX; test send to the owner number; toggle all without changing content',
        'Critical bug fixes: undefined variable on API failure, foreach null, variable scope, empty trigger type, API key duplication',
      ],
      id: [
        'Pengiriman berbasis cron legacy: pengingat H-1, pengingat hari yang sama, ucapan ulang tahun, laporan klinik harian per dokter',
        'Modul CRM dengan manajemen device (CRUD via API penyedia, tampilan QR scan, polling status via AJAX, logout)',
        'Template engine — 4 tipe trigger (H-1, Same-Day, Birthday, Invoice) dengan variabel dinamis: {nama}, {hari}, {tanggal}, {jam}, {dokter}, {invoice}, {nominal}',
        'Lapisan model terpusat untuk query device dan template, dengan validasi trigger-id yang dipakai bersama',
        'Rate limiting — interval polling minimum 8 detik per user via session cooldown',
        'WhatsApp OTP untuk autentikasi dua faktor saat login dari perangkat baru; cookie device terpercaya',
        'Bot WhatsApp berbasis webhook untuk command admin',
        'Bulk save via AJAX berurutan; uji kirim ke nomor owner; toggle semua tanpa mengubah konten',
        'Perbaikan bug kritis: undefined variable saat API gagal, foreach null, scope variabel, tipe trigger kosong, duplikasi API key',
      ],
    },
    tags: ['PHP', 'JavaScript', 'WhatsApp API', 'AJAX', 'CRON'],
    link: '/blog/whatsapp-notification-crm',
  },
  {
    tag: {
      en: 'Clinical Information Systems / EMR · ~42 commits · Jul 2021–Jun 2026',
      id: 'Sistem Informasi Klinik / EMR · ~42 komit · Jul 2021–Jun 2026',
    },
    title: {
      en: 'Medical Records & Clinical Workflow',
      id: 'Rekam Medis Elektronik & Alur Kerja Klinik',
    },
    desc: {
      en: 'Electronic medical records system for general and dental clinics — including digital odontogram charting, ICD-10/ICD-9 coding, 5-status checkout progression, appointment booking, and multi-clinic record sharing.',
      id: 'Sistem rekam medis elektronik untuk klinik umum dan gigi — termasuk odontogram digital, coding ICD-10/ICD-9, progres checkout 5 status, booking appointment, dan berbagi data multi-klinik.',
    },
    items: {
      en: [
        'Odontogram digital dental chart for tooth condition charting',
        'ICD-10 multi-diagnosis support & ICD-9 procedure code mapping at checkout',
        '5-status checkout progression tracking for patient visits from start to finish',
        'Booking & appointment system for all roles (admin, clinic, private, general)',
        'Combined records for shared clinic groups; record sharing across clinic groups',
        'General & dental examination workflows with inline billing from the record view',
        'Bug fix: empty dental data crashing the odontogram for certain doctor accounts',
      ],
      id: [
        'Odontogram digital untuk pencatatan kondisi setiap gigi',
        'Dukungan multi-diagnosis ICD-10 & pemetaan kode tindakan ICD-9 saat checkout',
        'Pelacakan progres checkout 5 status untuk kunjungan pasien dari awal sampai selesai',
        'Sistem booking & appointment untuk semua role (admin, klinik, pribadi, umum)',
        'Rekam medis gabungan untuk grup klinik berbagi; sharing rekam medis antar grup klinik',
        'Alur pemeriksaan umum & gigi dengan billing langsung dari tampilan rekam medis',
        'Perbaikan bug: data gigi kosong membuat odontogram error di akun dokter tertentu',
      ],
    },
    tags: ['PHP', 'CodeIgniter', 'MySQL', 'ICD-10', 'ICD-9', 'Odontogram'],
    link: '/blog/medical-records-clinical-workflow',
  },
  {
    tag: {
      en: 'Payment Systems / Billing · ~33 commits · Aug 2021–Mar 2025',
      id: 'Sistem Pembayaran / Billing · ~33 komit · Agu 2021–Mar 2025',
    },
    title: { en: 'Billing & Kasir System', id: 'Sistem Pembayaran & Kasir' },
    desc: {
      en: 'Multi-method payment system with invoice generation, debt/piutang tracking, multi-level discounts, and server-side DataTable processing across all user roles.',
      id: 'Sistem pembayaran multi-metode dengan generate invoice, pelacakan hutang/piutang, diskon bertingkat, dan server-side DataTable di semua role pengguna.',
    },
    items: {
      en: [
        'Multi-method payments: cash, transfer, debit/credit card, BPJS, debt',
        'Multi-level discount system — per-procedure and multi-tier discounts with bug fixes',
        'PDF invoice via Dompdf, diagnosis printed on the invoice, thermal printer support',
        'Debt/piutang tracking — payment status monitoring per transaction',
        'Server-side DataTable for all roles (admin, clinic, private, general)',
        'Consistent Rupiah formatting (no space) across all roles and views',
        'Payment detail — amount paid, payment status, payment method',
      ],
      id: [
        'Pembayaran multi-metode: tunai, transfer, kartu debit/kredit, BPJS, hutang',
        'Sistem diskon bertingkat — diskon per tindakan dan multi-level beserta perbaikan bug',
        'Invoice PDF via Dompdf, diagnosis tercetak di invoice, dukungan thermal printer',
        'Pelacakan hutang/piutang — pemantauan status pembayaran per transaksi',
        'Server-side DataTable untuk semua role (admin, klinik, pribadi, umum)',
        'Format Rupiah yang konsisten (tanpa spasi) di semua role dan tampilan',
        'Detail pembayaran — nominal dibayar, status pembayaran, metode pembayaran',
      ],
    },
    tags: ['PHP', 'CodeIgniter', 'MySQL', 'Dompdf'],
    link: '/blog/billing-kasir',
  },
  {
    tag: {
      en: 'Legacy Modernization · ~13 commits · Nov–Dec 2024',
      id: 'Modernisasi Legacy · ~13 komit · Nov–Des 2024',
    },
    title: {
      en: 'PHP 7 → PHP 8 Migration (No Downtime)',
      id: 'Migrasi PHP 7 → PHP 8 (Tanpa Downtime)',
    },
    desc: {
      en: 'Migrated the entire platform from PHP 7 to PHP 8.1 without downtime — fixing deprecated functions, type errors, and compatibility issues across every module with manual regression testing.',
      id: 'Migrasi seluruh platform dari PHP 7 ke PHP 8.1 tanpa downtime — memperbaiki fungsi deprecated, type error, dan masalah kompatibilitas di setiap modul dengan regression testing manual.',
    },
    items: {
      en: [
        'Dompdf upgrade from a legacy version to 2.0 for PHP 8 compatibility',
        'Fixed deprecated functions, type errors, each() removal, null handling across the codebase',
        'Fixed report calculations (daily, jasmed) affected by the stricter PHP 8 type system',
        'Fixed PHPMailer compatibility for email invoice delivery',
        'Fixed bugs: patient detail view/edit, add new patient, general doctor examination flow',
        'HTACCESS configuration update for PHP 8.1 settings and security headers',
        'Manual regression testing across every module post-migration',
      ],
      id: [
        'Upgrade Dompdf dari versi legacy ke 2.0 untuk kompatibilitas PHP 8',
        'Memperbaiki fungsi deprecated, type error, penghapusan each(), dan penanganan null di seluruh kode',
        'Memperbaiki perhitungan laporan (harian, jasmed) yang terdampak sistem tipe PHP 8 yang lebih ketat',
        'Memperbaiki kompatibilitas PHPMailer untuk pengiriman invoice via email',
        'Memperbaiki bug: lihat/ubah detail pasien, tambah pasien baru, alur pemeriksaan dokter umum',
        'Pembaruan konfigurasi HTACCESS untuk PHP 8.1 dan security headers',
        'Regression testing manual di setiap modul pasca-migrasi',
      ],
    },
    tags: ['PHP', 'CodeIgniter', 'Migration'],
    link: '/blog/php7-to-php8-migration',
  },
  {
    tag: {
      en: 'System Administration / Infrastructure · ~33 commits · 2021–2026',
      id: 'Administrasi Sistem / Infrastruktur · ~33 komit · 2021–2026',
    },
    title: { en: 'Infrastructure & DevOps', id: 'Infrastruktur & DevOps' },
    desc: {
      en: 'Managed production server infrastructure, hosting migration, Docker containerization, and configuration management for a SaaS platform serving hundreds of clinics.',
      id: 'Manajemen server produksi, migrasi hosting, containerization Docker, dan manajemen konfigurasi untuk platform SaaS yang melayani ratusan klinik.',
    },
    items: {
      en: [
        'Docker Compose: PHP 8.1 Apache + MySQL 8.0 + phpMyAdmin; Dockerfile for a reproducible dev environment',
        'Hosting migration from shared hosting to a managed VPS with post-migration validation and live monitoring',
        'HTACCESS rewrite rules, PHP settings, security headers; updated for PHP 8.1',
        'Redis configuration (unix socket) for encrypted sessions and caching',
        'Configuration management: database credentials, Redis config, and SATUSEHAT environment per tenant — credentials read from a gitignored config file',
        'Error logging — PHP error log management and log rotation',
      ],
      id: [
        'Docker Compose: PHP 8.1 Apache + MySQL 8.0 + phpMyAdmin; Dockerfile untuk environment dev yang reproducible',
        'Migrasi hosting dari shared hosting ke VPS terkelola dengan validasi pasca-migrasi dan pemantauan langsung',
        'Rewrite rules HTACCESS, pengaturan PHP, security headers; diperbarui untuk PHP 8.1',
        'Konfigurasi Redis (unix socket) untuk session terenkripsi dan caching',
        'Manajemen konfigurasi: kredensial database, konfigurasi Redis, dan environment SATUSEHAT per tenant — kredensial dibaca dari file config yang gitignored',
        'Error logging — manajemen PHP error log dan rotasi log',
      ],
    },
    tags: ['Linux', 'Docker', 'VPS', 'Redis', 'MySQL'],
    link: '/blog/infrastructure-devops',
  },
  {
    tag: {
      en: 'Database Engineering / Performance · ~18 commits · 2021–2026',
      id: 'Rekayasa Database / Performa · ~18 komit · 2021–2026',
    },
    title: {
      en: 'Database & Performance Optimization',
      id: 'Optimasi Database & Performa',
    },
    desc: {
      en: 'Query optimization, indexing strategy, and performance tuning for a database managing millions of healthcare transactions across hundreds of clinics.',
      id: 'Optimasi query, strategi indexing, dan performance tuning untuk database yang mengelola jutaan transaksi kesehatan dari ratusan klinik.',
    },
    items: {
      en: [
        'Server-side DataTable with pagination, sorting, and filtering for large tables (patients, payments, reports)',
        'Indexing optimization for appointment and checkout queries',
        'Slow query refactoring for reports, patient search, and appointment listing',
        'Memory leak fix — resolved a patient-creation failure caused by loading every patient into memory',
        '7 SQL migration files for schema evolution across 5 years',
      ],
      id: [
        'Server-side DataTable dengan pagination, sorting, dan filtering untuk tabel besar (pasien, pembayaran, laporan)',
        'Optimasi indexing untuk query appointment dan checkout',
        'Refactoring slow query untuk laporan, pencarian pasien, dan daftar appointment',
        'Perbaikan memory leak — menyelesaikan kegagalan tambah pasien akibat memuat seluruh data pasien ke memory',
        '7 file migrasi SQL untuk evolusi skema selama 5 tahun',
      ],
    },
    tags: ['MySQL', 'Query Optimization', 'Indexing', 'Performance'],
    link: '/blog/database-performance-optimization',
  },
];

export const impactMetrics = [
  { value: '75s → ~5s', en: 'Page load (93% faster)', id: 'Waktu muat halaman (93% lebih cepat)' },
  { value: 'Hundreds', en: 'Clinics served', id: 'Klinik terlayani' },
  { value: '12', en: 'User roles', id: 'Role pengguna' },
  { value: 'Multi-tenant', en: 'Architecture', id: 'Arsitektur' },
  { value: 'SATUSEHAT/FHIR', en: 'National integration', id: 'Integrasi nasional' },
] as { value: string; en: string; id: string }[];

export const gitStats = [
  { value: '646', en: 'Total Commits', id: 'Total Komit' },
  { value: '444', en: 'Non-Merge', id: 'Non-Merge' },
  { value: '10.252', en: 'Files Touched', id: 'File Tersentuh' },
  { value: '204', en: 'Controllers', id: 'Controller' },
  { value: '36', en: 'Models', id: 'Model' },
  { value: '7', en: 'DB Migrations', id: 'Migrasi DB' },
] as { value: string; en: string; id: string }[];

export const timeline = [
  {
    year: '2021',
    commits: 125,
    en: 'Foundation: WA notifications, auth/OTP, financial reports, booking, dashboards',
    id: 'Fondasi: notifikasi WA, auth/OTP, laporan keuangan, booking, dashboard',
  },
  {
    year: '2022',
    commits: 40,
    en: 'Clinic reports, WA API, fullcalendar, rates, per-role dashboards',
    id: 'Laporan klinik, WA API, fullcalendar, tarif, dashboard per role',
  },
  {
    year: '2023',
    commits: 84,
    en: 'SATUSEHAT integration (IHS, encounter, SDMK), server-side DataTable',
    id: 'Integrasi SATUSEHAT (IHS, encounter, SDMK), server-side DataTable',
  },
  {
    year: '2024',
    commits: 104,
    en: 'PHP 8.1 migration, Dompdf upgrade, ICD-9 mapping, SATUSEHAT hardening',
    id: 'Migrasi PHP 8.1, upgrade Dompdf, pemetaan ICD-9, hardening SATUSEHAT',
  },
  {
    year: '2025',
    commits: 61,
    en: 'Shared clinic groups, health dept reports, ICD-9 checkout, bug fixes',
    id: 'Grup klinik berbagi, laporan dinkes, ICD-9 checkout, perbaikan bug',
  },
  {
    year: '2026',
    commits: 30,
    en: 'CRM module, Docker setup, WA template engine, base salary',
    id: 'Modul CRM, setup Docker, template engine WA, gaji pokok',
  },
];
