export type TheoryBlock =
  | { kind: 'text'; content: string }
  | { kind: 'code'; lang?: string; content: string };

export type Question =
  | { type: 'mcq'; prompt: string; options: string[]; answer: number; explanation?: string }
  | { type: 'boolean'; prompt: string; answer: boolean; explanation?: string }
  | { type: 'fill'; prompt: string; answers: string[]; explanation?: string }
  | { type: 'order'; prompt: string; items: string[]; explanation?: string };

export type Lesson = {
  id: string;
  title: string;
  theory: TheoryBlock[];
  questions: Question[];
};

export type Unit = {
  id: string;
  title: string;
  subtitle?: string;
  lessons: Lesson[];
};

export const course: Unit[] = [
  {
    id: '1',
    title: 'Dasar Algoritma',
    subtitle: 'Konsep, notasi, dan tiga struktur dasar pemrograman.',
    lessons: [
      {
        id: '1-1',
        title: 'Apa itu Algoritma?',
        theory: [
          {
            kind: 'text',
            content:
              'Algoritma adalah urutan langkah logis dan terbatas untuk menyelesaikan suatu masalah. Setiap langkah harus jelas, berurutan, dan pada akhirnya berhenti.',
          },
          {
            kind: 'text',
            content:
              'Analoginya seperti resep masakan: kita punya input (bahan), serangkaian langkah, lalu output (masakan jadi). Algoritma yang baik selalu punya input, proses, dan output yang terdefinisi.',
          },
          {
            kind: 'code',
            lang: 'text',
            content: 'MULAI\n  BACA angka\n  luas ← angka × angka\n  TAMPILKAN luas\nSELESAI',
          },
        ],
        questions: [
          {
            type: 'mcq',
            prompt: 'Manakah definisi paling tepat dari algoritma?',
            options: [
              'Urutan langkah logis dan terbatas untuk menyelesaikan masalah',
              'Bahasa pemrograman tertentu seperti Python atau Java',
              'Program yang sudah jadi dan siap dipakai',
              'Kumpulan data yang tersimpan di komputer',
            ],
            answer: 0,
            explanation:
              'Algoritma adalah urutan langkah logis yang terbatas — bahasa pemrograman hanyalah salah satu cara menuangkannya.',
          },
          {
            type: 'boolean',
            prompt:
              'Algoritma harus memiliki jumlah langkah yang terbatas dan pasti berakhir (tidak boleh berjalan tanpa henti).',
            answer: true,
            explanation:
              'Salah satu syarat algoritma adalah finiteness: langkahnya terbatas dan prosesnya berhenti.',
          },
          {
            type: 'order',
            prompt: 'Susun langkah “menyalakan lampu belajar” dalam urutan yang benar.',
            items: [
              'Ambil posisi di meja belajar',
              'Hubungkan colokan ke sumber listrik',
              'Tekan saklar ke posisi ON',
              'Lampu menyala, mulai belajar',
            ],
            explanation:
              'Urutan penting: posisi dan koneksi listrik harus siap sebelum saklar ditekan.',
          },
          {
            type: 'fill',
            prompt:
              'Algoritma menerima masukan yang disebut input, dan menghasilkan keluaran yang disebut ______ (satu kata, bahasa Indonesia atau Inggris).',
            answers: ['output', 'keluaran', 'hasil'],
            explanation: 'Keluaran algoritma disebut output (atau keluaran).',
          },
          {
            type: 'mcq',
            prompt: 'Manakah yang BUKAN ciri algoritma yang baik?',
            options: [
              'Langkah-langkahnya ambigu dan bisa ditafsirkan berbeda',
              'Jumlah langkahnya terbatas',
              'Menghasilkan output yang benar',
              'Terstruktur dan efisien',
            ],
            answer: 0,
            explanation:
              'Algoritma yang baik harus jelas (tidak ambigu). Langkah ambigu melanggar sifat definiteness.',
          },
        ],
      },
      {
        id: '1-2',
        title: 'Pseudocode & Flowchart',
        theory: [
          {
            kind: 'text',
            content:
              'Pseudocode adalah cara menuliskan algoritma memakai bahasa yang mirip kode program, tetapi tidak terikat aturan sintaks bahasa tertentu. Tujuannya agar alur mudah dibaca manusia.',
          },
          {
            kind: 'text',
            content:
              'Flowchart menggambarkan alur dengan simbol: persegi panjang = proses, belah ketupat = keputusan (percabangan), jajar genjang = input/output, dan oval = mulai/selesai.',
          },
          {
            kind: 'code',
            lang: 'text',
            content:
              'MULAI\n  BACA panjang\n  BACA lebar\n  luas ← panjang × lebar\n  TAMPILKAN luas\nSELESAI',
          },
        ],
        questions: [
          {
            type: 'boolean',
            prompt: 'Pseudocode terikat pada satu bahasa pemrograman tertentu.',
            answer: false,
            explanation:
              'Justru sebaliknya: pseudocode netral bahasa dan fokus pada alur logika.',
          },
          {
            type: 'mcq',
            prompt: 'Simbol belah ketupat pada flowchart biasanya menyatakan …',
            options: [
              'Keputusan / percabangan',
              'Proses perhitungan',
              'Input atau output',
              'Mulai atau selesai',
            ],
            answer: 0,
            explanation: 'Belah ketupat = keputusan (decision), tempat alur bercabang.',
          },
          {
            type: 'fill',
            prompt:
              'Pada contoh pseudocode di atas, perintah untuk menampilkan hasil ke layar adalah ______.',
            answers: ['tampilkan', 'print', 'cetak'],
            explanation: 'TAMPILKAN (atau print/cetak) adalah perintah output.',
          },
          {
            type: 'order',
            prompt: 'Susun pseudocode menghitung luas persegi panjang dengan urutan yang benar.',
            items: [
              'MULAI',
              'BACA panjang',
              'BACA lebar',
              'luas ← panjang × lebar',
              'TAMPILKAN luas',
              'SELESAI',
            ],
            explanation:
              'Input dibaca dulu, baru dihitung, lalu hasilnya ditampilkan, dan diakhiri dengan SELESAI.',
          },
          {
            type: 'mcq',
            prompt:
              'Pada flowchart, perhitungan “luas ← panjang × lebar” digambarkan dengan simbol …',
            options: [
              'Persegi panjang (proses)',
              'Belah ketupat (keputusan)',
              'Jajar genjang (input/output)',
              'Lingkaran (konektor)',
            ],
            answer: 0,
            explanation: 'Perhitungan adalah proses, digambarkan dengan persegi panjang.',
          },
        ],
      },
      {
        id: '1-3',
        title: 'Struktur Dasar: Urutan, Percabangan, Perulangan',
        theory: [
          {
            kind: 'text',
            content:
              'Ada tiga struktur dasar algoritma: urutan (sequence), percabangan (selection/if), dan perulangan (iteration/loop). Hampir semua program tersusun dari ketiganya.',
          },
          {
            kind: 'text',
            content:
              'Percabangan memilih salah satu jalur berdasarkan kondisi. Perulangan mengulang aksi selama kondisi terpenuhi.',
          },
          {
            kind: 'code',
            lang: 'text',
            content: 'untuk i dari 1 sampai 5:\n    cetak "Baris " + i',
          },
        ],
        questions: [
          {
            type: 'mcq',
            prompt: 'Struktur yang mengeksekusi langkah satu per satu secara berurutan disebut …',
            options: ['Urutan / sequence', 'Percabangan / selection', 'Perulangan / iteration', 'Rekursi'],
            answer: 0,
            explanation: 'Urutan (sequence) menjalankan instruksi secara berurutan dari atas ke bawah.',
          },
          {
            type: 'boolean',
            prompt: 'Perulangan (loop) dipakai ketika kita ingin mengulang sebuah aksi beberapa kali.',
            answer: true,
            explanation: 'Loop mengulang aksi, umumnya selama kondisi masih terpenuhi.',
          },
          {
            type: 'fill',
            prompt:
              'Perhatikan contoh di atas. Perulangan “untuk i dari 1 sampai 5” akan mencetak “Baris” sebanyak ______ kali.',
            answers: ['5', 'lima'],
            explanation: 'Nilai i berjalan 1,2,3,4,5 — jadi total 5 kali.',
          },
          {
            type: 'order',
            prompt:
              'Susun pseudocode yang menampilkan status kelulusan (nilai ≥ 75 lulus) dengan urutan yang benar.',
            items: [
              'BACA nilai',
              'JIKA nilai ≥ 75 MAKA',
              '    TAMPILKAN "LULUS"',
              'SELAIN ITU',
              '    TAMPILKAN "TIDAK LULUS"',
            ],
            explanation:
              'Kondisi dibaca lebih dulu, lalu jalur benar (MAKA) dan jalur alternatif (SELAIN ITU).',
          },
          {
            type: 'mcq',
            prompt: 'Struktur yang memilih salah satu jalur berdasarkan kondisi disebut …',
            options: ['Percabangan / selection', 'Urutan / sequence', 'Perulangan / iteration', 'Variabel'],
            answer: 0,
            explanation: 'Percabangan (selection) memilih jalur sesuai kondisi benar/salah.',
          },
        ],
      },
    ],
  },
];
