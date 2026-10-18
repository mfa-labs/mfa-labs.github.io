export type TheoryBlock =
  | { kind: 'text'; content: string }
  | { kind: 'code'; lang?: string; content: string }
  | { kind: 'image'; src: string; alt: string };

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

const IMG = '/kuliah/algoritma-dan-pemrograman-1/2026-2027-ganjil/img';

export const course: Unit[] = [
  {
    id: '1',
    title: 'Fondasi',
    subtitle: 'Pekan 1–4: apa itu algoritma, cara berpikirnya, dan dua cara menuangkannya.',
    lessons: [
      {
        id: '1-1',
        title: 'Pengenalan Algoritma dan Pemrograman',
        theory: [
          {
            kind: 'text',
            content:
              'Algoritma adalah urutan langkah yang jelas dan terbatas untuk menyelesaikan sebuah masalah. Kata “algoritma” berasal dari nama Al-Khwarizmi, matematikawan abad ke-9.',
          },
          {
            kind: 'text',
            content:
              'Lima ciri algoritma: jelas (tidak ambigu), punya masukan dan keluaran, terbatas (pasti berhenti), efektif (bisa dikerjakan), dan umum (berlaku untuk semua kasus sejenis).',
          },
          {
            kind: 'text',
            content:
              'Pemrograman adalah kegiatan menuliskan algoritma dalam bahasa yang bisa dijalankan komputer, lalu memastikan hasilnya benar. Algoritma adalah idenya, program adalah wujudnya.',
          },
        ],
        questions: [
          {
            type: 'mcq',
            prompt: 'Manakah definisi algoritma yang paling tepat?',
            options: [
              'Urutan langkah yang jelas dan terbatas untuk menyelesaikan masalah',
              'Bahasa pemrograman tertentu seperti Python atau Java',
              'Program yang sudah jadi dan siap dipakai',
              'Kumpulan data yang tersimpan di komputer',
            ],
            answer: 0,
            explanation:
              'Algoritma adalah urutan langkah yang jelas dan terbatas — bahasa pemrograman hanyalah salah satu cara menuangkannya.',
          },
          {
            type: 'boolean',
            prompt:
              'Sebuah algoritma harus punya masukan dan keluaran, serta berhenti setelah sejumlah langkah yang terbatas.',
            answer: true,
            explanation:
              'Dua ciri itu termasuk lima ciri algoritma: punya masukan/keluaran dan terbatas (finiteness).',
          },
          {
            type: 'mcq',
            prompt:
              'Ciri algoritma yang mengharuskan setiap langkah hanya punya satu tafsir (tidak ambigu) disebut …',
            options: ['Jelas', 'Efektif', 'Umum', 'Terbatas'],
            answer: 0,
            explanation:
              'Kalau dua orang mengerjakan langkah yang sama dengan cara berbeda, langkah itu belum jelas.',
          },
          {
            type: 'fill',
            prompt:
              'Kata “algoritma” berasal dari nama matematikawan abad ke-9, yaitu ______ (satu kata).',
            answers: ['al-khwarizmi', 'alkhwarizmi', 'khwarizmi', 'al khwarizmi'],
            explanation: 'Al-Khwarizmi memperkenalkan prosedur sistematis untuk berhitung.',
          },
          {
            type: 'order',
            prompt: 'Susun langkah prosedur menarik uang di ATM dalam urutan yang benar.',
            items: [
              'Masukkan kartu',
              'Masukkan PIN',
              'Pilih nominal',
              'Ambil uang',
              'Ambil kartu',
            ],
            explanation:
              'Urutan penting: kartu dan PIN harus siap sebelum transaksi, dan kartu diambil paling akhir.',
          },
        ],
      },
      {
        id: '1-2',
        title: 'Computational Thinking',
        theory: [
          {
            kind: 'text',
            content:
              'Computational thinking adalah proses berpikir untuk merumuskan masalah dan solusinya, sehingga solusi itu dapat dijalankan secara efektif oleh pengolah informasi (Jeannette Wing, 2006).',
          },
          {
            kind: 'text',
            content:
              'Empat pilarnya: dekomposisi (memecah masalah), pengenalan pola (mencari keteraturan), abstraksi (membuang detail yang tidak relevan), dan perancangan algoritma (menyusun langkahnya).',
          },
          {
            kind: 'text',
            content:
              'Computational thinking adalah proses berpikir, bukan menulis program — ia terjadi sebelum satu baris kode pun ditulis, dan tidak memerlukan komputer.',
          },
        ],
        questions: [
          {
            type: 'mcq',
            prompt: 'Empat pilar computational thinking adalah …',
            options: [
              'Dekomposisi, pengenalan pola, abstraksi, perancangan algoritma',
              'Mengetik, menguji, men-debug, merilis',
              'Variabel, tipe data, operator, ekspresi',
              'Masukan, proses, keluaran, penyimpanan',
            ],
            answer: 0,
            explanation: 'Keempat pilar itulah yang dijabarkan sepanjang pekan 2.',
          },
          {
            type: 'mcq',
            prompt: 'Memecah masalah besar menjadi bagian-bagian kecil yang lebih mudah diselesaikan disebut …',
            options: ['Dekomposisi', 'Abstraksi', 'Pengenalan pola', 'Iterasi'],
            answer: 0,
            explanation: 'Dekomposisi memecah masalah besar menjadi bagian kecil.',
          },
          {
            type: 'boolean',
            prompt: 'Computational thinking hanya bisa dilakukan jika kita memakai komputer.',
            answer: false,
            explanation:
              'Ia adalah proses berpikir; pemrograman hanyalah salah satu cara mewujudkan hasilnya.',
          },
          {
            type: 'mcq',
            prompt:
              'Membuang detail yang tidak relevan dan menyisakan yang benar-benar penting disebut …',
            options: ['Abstraksi', 'Dekomposisi', 'Pengenalan pola', 'Perancangan algoritma'],
            answer: 0,
            explanation:
              'Peta membuang hampir semua detail dunia nyata — itulah contoh abstraksi.',
          },
          {
            type: 'fill',
            prompt:
              'Kegiatan mencari kesamaan atau keteraturan yang berulang disebut pengenalan ______.',
            answers: ['pola', 'pattern'],
            explanation: 'Pengenalan pola membuat satu solusi bisa dipakai berulang.',
          },
        ],
      },
      {
        id: '1-3',
        title: 'Pseudocode',
        theory: [
          {
            kind: 'text',
            content:
              'Pseudocode adalah cara menuliskan algoritma memakai struktur yang menyerupai bahasa pemrograman, tetapi dengan kata-kata yang bisa dibaca manusia. Ia tidak bisa dijalankan komputer.',
          },
          {
            kind: 'text',
            content:
              'Kerangkanya BEGIN … END. Notasi dasar: ← penugasan, READ membaca masukan, WRITE menampilkan keluaran, dan # komentar.',
          },
          {
            kind: 'code',
            lang: 'pseudocode',
            content: 'BEGIN\n  READ panjang, lebar\n  luas ← panjang × lebar\n  WRITE luas\nEND',
          },
        ],
        questions: [
          {
            type: 'boolean',
            prompt: 'Pseudocode dapat langsung dijalankan oleh komputer.',
            answer: false,
            explanation:
              'Pseudocode hanya bentuk penulisan yang tertata, bukan bahasa yang bisa dieksekusi mesin.',
          },
          {
            type: 'mcq',
            prompt: 'Notasi ← pada pseudocode berarti …',
            options: [
              'Penugasan: hitung sisi kanan, lalu simpan ke variabel di kiri',
              'Bertanya apakah kedua sisi bernilai sama',
              'Menampilkan nilai ke layar',
              'Menandai awal kumpulan instruksi',
            ],
            answer: 0,
            explanation:
              'Karena itu `luas ← luas + 1` justru masuk akal: ambil nilai luas, tambah satu, simpan kembali.',
          },
          {
            type: 'fill',
            prompt:
              'Pada kerangka pseudocode, blok kumpulan instruksi selalu diakhiri dengan kata kunci ______.',
            answers: ['end'],
            explanation: 'BEGIN membuka dan END menutup.',
          },
          {
            type: 'order',
            prompt: 'Susun pseudocode menghitung luas persegi panjang dengan urutan yang benar.',
            items: [
              'BEGIN',
              'READ panjang, lebar',
              'luas ← panjang × lebar',
              'WRITE luas',
              'END',
            ],
            explanation:
              'Masukan dibaca dulu, baru dihitung, lalu ditampilkan, diakhiri END.',
          },
          {
            type: 'mcq',
            prompt: 'Manakah yang BUKAN ciri pseudocode yang baik?',
            options: [
              'Mencampur tanda kurung kurawal dan titik koma bahasa tertentu',
              'Satu instruksi per baris',
              'Nama variabel menjelaskan isinya',
              'Kata kunci ditulis huruf besar',
            ],
            answer: 0,
            explanation:
              'Munculnya kurung kurawal atau titik koma berarti kamu sudah menulis kode, bukan pseudocode.',
          },
        ],
      },
      {
        id: '1-4',
        title: 'Flowchart',
        theory: [
          {
            kind: 'image',
            src: `${IMG}/01-simbol-standar.svg`,
            alt: 'Lima simbol standar flowchart beserta artinya',
          },
          {
            kind: 'text',
            content:
              'Lima simbol standar: terminator (kapsul) untuk mulai/selesai, persegi panjang untuk proses, jajar genjang untuk masukan/keluaran, belah ketupat untuk keputusan, dan tanda panah sebagai garis alir.',
          },
          {
            kind: 'image',
            src: `${IMG}/02-luas-persegi-panjang.svg`,
            alt: 'Flowchart menghitung luas persegi panjang',
          },
          {
            kind: 'text',
            content:
              'Satu baris pseudocode di dalam BEGIN … END menjadi tepat satu simbol. Jadi jumlah simbol = jumlah baris + dua terminator. Warna tidak punya makna; yang menentukan arti adalah bentuk.',
          },
        ],
        questions: [
          {
            type: 'mcq',
            prompt: 'Simbol belah ketupat pada flowchart menyatakan …',
            options: ['Keputusan / percabangan', 'Proses perhitungan', 'Masukan atau keluaran', 'Mulai atau selesai'],
            answer: 0,
            explanation: 'Belah ketupat adalah titik percabangan dengan dua kemungkinan hasil.',
          },
          {
            type: 'mcq',
            prompt: 'Simbol jajar genjang dipakai untuk …',
            options: ['Masukan atau keluaran', 'Perhitungan', 'Keputusan', 'Awal dan akhir alur'],
            answer: 0,
            explanation: 'READ dan WRITE memakai simbol jajar genjang.',
          },
          {
            type: 'boolean',
            prompt: 'Pada notasi standar, warna sebuah simbol menentukan artinya.',
            answer: false,
            explanation:
              'Yang menentukan arti adalah bentuk simbol, bukan warnanya. Diagram hitam-putih tetap sah.',
          },
          {
            type: 'mcq',
            prompt: 'Perhitungan `luas ← panjang × lebar` digambar dengan simbol …',
            options: ['Persegi panjang (proses)', 'Belah ketupat (keputusan)', 'Jajar genjang (masukan/keluaran)', 'Kapsul (terminator)'],
            answer: 0,
            explanation: 'Perhitungan adalah proses, digambarkan dengan persegi panjang.',
          },
          {
            type: 'order',
            prompt: 'Susun alur flowchart menghitung luas persegi panjang dari atas ke bawah.',
            items: [
              'Mulai (terminator)',
              'Baca panjang, lebar (jajar genjang)',
              'luas ← panjang × lebar (persegi panjang)',
              'Tulis luas (jajar genjang)',
              'Selesai (terminator)',
            ],
            explanation:
              'Alurnya lurus dari atas ke bawah: mulai → masukan → proses → keluaran → selesai.',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'Data & Ekspresi',
    subtitle: 'Pekan 5–7: menyimpan nilai, mengolahnya, lalu memakainya pada satu studi kasus.',
    lessons: [
      {
        id: '2-1',
        title: 'Konsep Data',
        theory: [
          {
            kind: 'text',
            content:
              'Variabel adalah wadah bernama yang isinya bisa berubah. Variabel hanya menyimpan satu nilai pada satu waktu — menyimpan nilai baru berarti menimpa nilai lama.',
          },
          {
            kind: 'text',
            content:
              'Lima tipe data dasar: integer (bilangan bulat), real (pecahan), char (satu karakter), string (rangkaian karakter), dan boolean (benar/salah). Tanda kutip menandakan tipe: 80 bilangan, "80" teks.',
          },
          {
            kind: 'text',
            content:
              'Konstanta adalah wadah bernama yang nilainya tidak berubah (mis. PI), ditulis huruf besar semua. Semua variabel harus dideklarasikan beserta tipenya di blok DEKLARASI.',
          },
        ],
        questions: [
          {
            type: 'mcq',
            prompt: 'Tipe data yang tepat untuk nilai rata-rata yang bisa berpecahan adalah …',
            options: ['real', 'integer', 'char', 'boolean'],
            answer: 0,
            explanation:
              'Pembagian hampir selalu menghasilkan pecahan, jadi hasilnya bertipe real.',
          },
          {
            type: 'mcq',
            prompt: 'Nomor telepon paling tepat disimpan sebagai tipe …',
            options: [
              'string, karena nol di depan harus dipertahankan dan tidak ada perhitungan terhadapnya',
              'integer, karena isinya berupa angka',
              'real, karena bisa berupa pecahan',
              'boolean, karena hanya dua keadaan',
            ],
            answer: 0,
            explanation:
              'Nomor telepon bukan untuk dihitung; nol di depan juga harus dipertahankan.',
          },
          {
            type: 'boolean',
            prompt: 'Nilai `80` dan `"80"` memiliki tipe yang sama.',
            answer: false,
            explanation:
              '`80` adalah bilangan (bisa dihitung), sedangkan `"80"` adalah teks dua karakter.',
          },
          {
            type: 'fill',
            prompt: 'Tipe data yang hanya bernilai benar atau salah adalah ______.',
            answers: ['boolean', 'bool'],
            explanation: 'Boolean dipakai untuk setiap keputusan benar-salah.',
          },
          {
            type: 'mcq',
            prompt: 'Bagian pseudocode yang menyebutkan nama dan tipe setiap variabel disebut …',
            options: ['DEKLARASI', 'BEGIN', 'READ', 'WRITE'],
            answer: 0,
            explanation:
              'Deklarasi tidak dijalankan; ia keterangan tipe untuk pembaca.',
          },
        ],
      },
      {
        id: '2-2',
        title: 'Operator dan Ekspresi',
        theory: [
          {
            kind: 'text',
            content:
              'Operator mengerjakan operasi terhadap operand. Ekspresi adalah gabungan keduanya yang menghasilkan nilai. Tanda ← bukan operator, melainkan penanda instruksi penugasan.',
          },
          {
            kind: 'code',
            lang: 'text',
            content:
              '+  −  ×  ÷      aritmetika dasar\ndiv            hasil bagi bulat (berapa kali pembagi muat penuh)\nmod            sisa bagi\n^              pemangkatan',
          },
          {
            kind: 'text',
            content:
              'Urutan pengerjaan: tanda kurung → pemangkatan → perkalian/pembagian/div/mod → penjumlahan/pengurangan, dan yang setingkat dikerjakan dari kiri ke kanan.',
          },
        ],
        questions: [
          {
            type: 'mcq',
            prompt: 'Hasil dari `17 div 5` adalah …',
            options: ['3', '3.4', '2', '5'],
            answer: 0,
            explanation: 'div mengambil berapa kali 5 muat penuh ke dalam 17, yaitu 3.',
          },
          {
            type: 'mcq',
            prompt: 'Hasil dari `17 mod 5` adalah …',
            options: ['2', '3', '3.4', '5'],
            answer: 0,
            explanation: 'Periksa dengan hubungan: 3 × 5 + 2 = 17, jadi sisanya 2.',
          },
          {
            type: 'mcq',
            prompt: 'Nilai dari ekspresi `2 + 3 × 4` adalah …',
            options: ['14', '20', '24', '9'],
            answer: 0,
            explanation: 'Perkalian dikerjakan lebih dulu: 3 × 4 = 12, lalu 2 + 12 = 14.',
          },
          {
            type: 'mcq',
            prompt: 'Nilai dari `20 − 5 − 3` (kiri ke kanan) adalah …',
            options: ['12', '18', '8', '22'],
            answer: 0,
            explanation:
              'Untuk operator setingkat, hitung kiri ke kanan: 20 − 5 = 15, lalu 15 − 3 = 12.',
          },
          {
            type: 'boolean',
            prompt: 'Untuk `7 ÷ 2`, operator `÷` dan `div` menghasilkan nilai yang sama.',
            answer: false,
            explanation: '`7 ÷ 2` = 3.5, sedangkan `7 div 2` = 3.',
          },
          {
            type: 'fill',
            prompt: 'Operator yang menghasilkan sisa bagi adalah ______.',
            answers: ['mod'],
            explanation: '`mod` mengambil sisa bagi, sedangkan `div` mengambil hasil bagi bulat.',
          },
        ],
      },
      {
        id: '2-3',
        title: 'Studi Kasus: Perhitungan Nilai Akhir',
        theory: [
          {
            kind: 'text',
            content:
              'Empat komponen penilaian dengan bobot berbeda: Tugas 20%, Kuis 20%, UTS 25%, dan UAS 35%. Setiap komponen bernilai 0–100.',
          },
          {
            kind: 'code',
            lang: 'pseudocode',
            content:
              'kontribusi ← tugas × 20 + kuis × 20 + uts × 25 + uas × 35\nnilai_akhir ← kontribusi ÷ 100',
          },
          {
            kind: 'image',
            src: `${IMG}/05-flowchart-nilai-akhir.svg`,
            alt: 'Flowchart menghitung nilai akhir mata kuliah',
          },
        ],
        questions: [
          {
            type: 'mcq',
            prompt:
              'Dengan nilai tugas 80, kuis 75, UTS 70, dan UAS 85, nilai akhirnya adalah …',
            options: ['78,25', '77,50', '80,00', '75,00'],
            answer: 0,
            explanation:
              '(80×20 + 75×20 + 70×25 + 85×35) ÷ 100 = 7825 ÷ 100 = 78,25.',
          },
          {
            type: 'boolean',
            prompt: 'Nilai akhir sebaiknya bertipe `real` karena pembagian bisa menghasilkan pecahan.',
            answer: true,
            explanation:
              'Kalau bertipe integer, bagian pecahannya hilang tanpa peringatan.',
          },
          {
            type: 'fill',
            prompt: 'Total bobot keempat komponen penilaian adalah ______ persen.',
            answers: ['100', 'seratus'],
            explanation: '20 + 20 + 25 + 35 = 100.',
          },
          {
            type: 'mcq',
            prompt:
              'Kalau suatu saat bobot tidak berjumlah 100 (misalnya satu komponen dibatalkan), langkah yang harus diubah adalah …',
            options: [
              'Membagi kontribusi dengan total bobot, bukan angka tetap 100',
              'Mengalikan semua bobot dengan dua',
              'Menghapus komponen yang dibatalkan tanpa mengubah pembagi',
              'Mengubah nilai akhir menjadi integer',
            ],
            answer: 0,
            explanation:
              'Dengan membagi total bobot, algoritma tetap benar meski komposisi bobotnya berubah.',
          },
          {
            type: 'order',
            prompt: 'Susun langkah menghitung nilai akhir dengan urutan yang benar.',
            items: [
              'Baca nilai tugas, kuis, UTS, UAS',
              'kalikan tiap komponen dengan bobotnya, lalu jumlahkan menjadi kontribusi',
              'nilai_akhir ← kontribusi ÷ 100',
              'Tampilkan nilai_akhir',
            ],
            explanation:
              'Masukan dibaca dulu, dihitung kontribusinya, dibagi, lalu ditampilkan.',
          },
        ],
      },
    ],
  },
  {
    id: '3',
    title: 'Seleksi & Iterasi',
    subtitle: 'Pekan 9–11: program mulai memilih dan mengulang, lalu keduanya bertemu pada satu kasus.',
    lessons: [
      {
        id: '3-1',
        title: 'Seleksi',
        theory: [
          {
            kind: 'text',
            content:
              'Operator perbandingan (=, ≠, <, >, ≤, ≥) menghasilkan boolean. Operator logika AND, OR, NOT menggabungkan beberapa pertanyaan. Ingat: = adalah pertanyaan, ← adalah penugasan.',
          },
          {
            kind: 'image',
            src: `${IMG}/06-flowchart-if-else.svg`,
            alt: 'Flowchart percabangan IF-THEN-ELSE',
          },
          {
            kind: 'text',
            content:
              'Struktur IF … THEN … ENDIF, IF … ELSE … ENDIF, dan rantai ELSE IF. Cabang diperiksa dari atas ke bawah — cabang pertama yang benar itulah yang dipakai, sehingga urutan menentukan hasil.',
          },
          {
            kind: 'code',
            lang: 'pseudocode',
            content:
              'IF nilai ≥ 85 THEN\n  huruf ← "A"\nELSE IF nilai ≥ 70 THEN\n  huruf ← "B"\nELSE IF nilai ≥ 60 THEN\n  huruf ← "C"\nELSE\n  huruf ← "D"\nENDIF',
          },
        ],
        questions: [
          {
            type: 'mcq',
            prompt: 'Dengan rantai di atas, nilai 85 mendapat huruf …',
            options: ['A', 'B', 'C', 'D'],
            answer: 0,
            explanation:
              'Cabang `nilai ≥ 85` benar lebih dulu, dan pemakaian ≥ membuat nilai tepat 85 masuk A.',
          },
          {
            type: 'boolean',
            prompt: 'Operator `AND` bernilai benar bila salah satu sisinya benar.',
            answer: false,
            explanation:
              '`AND` benar hanya bila kedua sisi benar. Yang cukup salah satu sisi benar adalah `OR`.',
          },
          {
            type: 'mcq',
            prompt: 'Penulisan syarat “nilai berada di antara 70 dan 85” yang benar adalah …',
            options: [
              'nilai ≥ 70 AND nilai ≤ 85',
              '70 ≤ nilai ≤ 85',
              'nilai ≥ 70 OR nilai ≤ 85',
              'nilai > 70 AND nilai < 85',
            ],
            answer: 0,
            explanation:
              'Pseudocode membandingkan dua nilai sekaligus, jadi kedua batas ditulis lengkap dan disambung AND.',
          },
          {
            type: 'fill',
            prompt: 'Operator logika untuk “tidak” adalah ______.',
            answers: ['not'],
            explanation: 'Contoh: `NOT aktif` adalah cara singkat mengatakan “tidak aktif”.',
          },
          {
            type: 'mcq',
            prompt:
              'Ketika semua kemungkinan dibandingkan terhadap satu nilai yang sama (misalnya pilihan menu), struktur yang lebih rapi adalah …',
            options: ['CASE', 'WHILE', 'FOR', 'REPEAT'],
            answer: 0,
            explanation:
              'CASE menuliskan satu ekspresi lalu membandingkannya dengan daftar pilihan, dengan OTHERWISE seperti ELSE.',
          },
        ],
      },
      {
        id: '3-2',
        title: 'Iterasi',
        theory: [
          {
            kind: 'text',
            content:
              'Setiap pengulangan punya empat bagian: nilai awal, kondisi, badan pengulangan, dan perubahan. Bagian perubahan yang terlupa menyebabkan pengulangan tak berujung.',
          },
          {
            kind: 'image',
            src: `${IMG}/07-flowchart-while.svg`,
            alt: 'Flowchart pengulangan WHILE: kondisi diuji di awal, badan dijalankan, lalu kembali memeriksa kondisi',
          },
          {
            kind: 'text',
            content:
              'WHILE memeriksa kondisi di awal (bisa nol kali). FOR dipakai ketika jumlah putaran sudah pasti. REPEAT memeriksa kondisi di akhir, sehingga badan pasti dijalankan minimal sekali.',
          },
          {
            kind: 'code',
            lang: 'pseudocode',
            content:
              'i ← 1\nWHILE i ≤ 5 DO\n  WRITE i\n  i ← i + 1\nENDWHILE',
          },
        ],
        questions: [
          {
            type: 'mcq',
            prompt:
              'Struktur pengulangan yang memeriksa kondisi di akhir, sehingga badannya pasti dijalankan minimal sekali, adalah …',
            options: ['REPEAT', 'WHILE', 'FOR', 'IF'],
            answer: 0,
            explanation: 'REPEAT … UNTIL memeriksa kondisi setelah badan dijalankan.',
          },
          {
            type: 'boolean',
            prompt: '`FOR` lebih tepat dipakai ketika jumlah putarannya sudah diketahui di awal.',
            answer: true,
            explanation:
              'Nilai awal, kondisi, dan perubahan pencacah sudah tersusun otomatis di dalam FOR.',
          },
          {
            type: 'fill',
            prompt:
              'Jika pencacah tidak pernah diubah (mis. baris `i ← i + 1` dihapus), pengulangan akan berjalan tanpa henti. Keadaan ini disebut pengulangan tak ______.',
            answers: ['berujung', 'berakhir'],
            explanation: 'Kondisinya selalu benar sehingga pengulangan tidak punya jalan keluar.',
          },
          {
            type: 'mcq',
            prompt:
              'Dengan `total` dimulai dari 0 lalu dijumlahkan `i` untuk i = 1 sampai 5, hasil akhir `total` adalah …',
            options: ['15', '5', '21', '10'],
            answer: 0,
            explanation: '1 + 2 + 3 + 4 + 5 = 15.',
          },
          {
            type: 'mcq',
            prompt: 'Akumulator untuk perkalian (misalnya mencari faktorial) sebaiknya dimulai dari nilai …',
            options: ['1', '0', '−1', 'n'],
            answer: 0,
            explanation: 'Memulai akumulator perkalian dari 0 membuat seluruh hasilnya nol.',
          },
          {
            type: 'mcq',
            prompt: 'Pengulangan `FOR i ← 1 TO n` dengan n bernilai 0 akan berjalan …',
            options: ['tidak sama sekali (0 kali)', 'tepat 1 kali', 'tepat 2 kali', 'tak berujung'],
            answer: 0,
            explanation:
              'Karena batasnya (0) lebih kecil daripada nilai awalnya (1), badan tidak pernah dikerjakan.',
          },
        ],
      },
      {
        id: '3-3',
        title: 'Studi Kasus: Transaksi',
        theory: [
          {
            kind: 'text',
            content:
              'Kasir: baca daftar barang, jumlahkan menjadi subtotal, tentukan diskon dari subtotal, hitung total, lalu hitung kembalian. Daftar barang yang jumlahnya diketahui → FOR; penentuan diskon yang bergantung keadaan → IF.',
          },
          {
            kind: 'text',
            content:
              'Pecahan uang dihitung dengan pola yang sama berulang: `div` mengambil berapa lembar yang muat penuh, `mod` menyisakan yang belum terpecah untuk pecahan berikutnya.',
          },
          {
            kind: 'code',
            lang: 'pseudocode',
            content:
              'subtotal ← 0\nFOR i ← 1 TO jumlah_barang DO\n  READ harga, banyak\n  subtotal ← subtotal + (harga × banyak)\nENDFOR\n\nIF subtotal ≥ 500000 THEN\n  diskon ← subtotal × 10 ÷ 100\nELSE IF subtotal ≥ 250000 THEN\n  diskon ← subtotal × 5 ÷ 100\nELSE\n  diskon ← 0\nENDIF',
          },
        ],
        questions: [
          {
            type: 'mcq',
            prompt: 'Untuk subtotal 610000, besar diskon (10% karena subtotal ≥ 500000) adalah …',
            options: ['61000', '30500', '610000', '5'],
            answer: 0,
            explanation: '610000 × 10 ÷ 100 = 61000.',
          },
          {
            type: 'boolean',
            prompt: 'Akumulator `subtotal` harus diberi nilai awal 0 sebelum pengulangan dimulai.',
            answer: true,
            explanation:
              'Kalau diletakkan di dalam pengulangan, subtotal akan direset setiap putaran.',
          },
          {
            type: 'fill',
            prompt:
              'Bagian daftar barang yang jumlahnya sudah diketahui paling tepat memakai pengulangan ______.',
            answers: ['for'],
            explanation: 'Jumlah putarannya sudah pasti, jadi FOR lebih ringkas.',
          },
          {
            type: 'mcq',
            prompt:
              'Jika uang dibayarkan 500000 sedangkan total belanja 549000, program yang baik seharusnya …',
            options: [
              'menyatakan bahwa uang kurang',
              'tetap menampilkan kembalian −49000 sebagai sah',
              'menambahkan kekurangan ke diskon',
              'mengulang transaksi dari awal otomatis',
            ],
            answer: 0,
            explanation:
              'Kembalian negatif menandakan uang kurang; program harus mengatakannya, bukan mendiamkan.',
          },
          {
            type: 'mcq',
            prompt:
              'Kembalian 175000 dipecah menjadi lembar 100rb, 50rb, 20rb, lalu sisa. Hasilnya adalah …',
            options: [
              '1 lembar 100rb, 1 lembar 50rb, 1 lembar 20rb, sisa 5000',
              '1 lembar 100rb, 1 lembar 50rb, 0 lembar 20rb, sisa 25000',
              '0 lembar 100rb, 3 lembar 50rb, 1 lembar 20rb, sisa 5000',
              '1 lembar 100rb, 0 lembar 50rb, 3 lembar 20rb, sisa 15000',
            ],
            answer: 0,
            explanation:
              '175000 → 1×100000 (sisa 75000) → 1×50000 (sisa 25000) → 1×20000 (sisa 5000).',
          },
        ],
      },
    ],
  },
  {
    id: '4',
    title: 'Pemecahan Masalah Terpadu',
    subtitle: 'Pekan 12–14: menghadapi soal cerita, merekap data, dan merancang algoritma lengkap.',
    lessons: [
      {
        id: '4-1',
        title: 'Pemecahan Masalah',
        theory: [
          {
            kind: 'text',
            content:
              'Langkah menghadapi soal cerita: pahami masalah → pisahkan masukan/proses/keluaran → pecah menjadi bagian kecil → pilih struktur kendali → tulis pseudocode → telusuri dan uji kasus batas.',
          },
          {
            kind: 'text',
            content:
              'Pemilihan struktur: semua langkah sekali dan lurus → runtunan; ada langkah bergantung syarat → seleksi; ada langkah berulang → iterasi. Untuk iterasi: jumlah pasti → FOR, bergantung keadaan → WHILE, harus minimal sekali → REPEAT.',
          },
          {
            kind: 'text',
            content:
              'Kasus batas yang wajib diuji: nol, negatif, satu, dan nilai yang tepat di perbatasan syarat. Kasus “tepat di batas” paling sering luput.',
          },
        ],
        questions: [
          {
            type: 'mcq',
            prompt:
              'Untuk masalah “baca nilai sampai penanda berhenti, lalu tampilkan rata-ratanya”, struktur yang tepat adalah …',
            options: ['WHILE', 'FOR', 'CASE', 'Runtunan murni'],
            answer: 0,
            explanation: 'Jumlah nilainya belum diketahui, jadi memakai WHILE.',
          },
          {
            type: 'mcq',
            prompt: 'Pada perhitungan indeks massa tubuh (BMI), tinggi = 0 harus ditangani karena …',
            options: [
              'terjadi pembagian dengan nol',
              'BMI menjadi bilangan negatif',
              'hasilnya selalu bulat',
              'perlu memakai CASE',
            ],
            answer: 0,
            explanation: 'Pembagian dengan nol tidak terdefinisi, jadi masukan itu harus ditolak.',
          },
          {
            type: 'boolean',
            prompt: '`FOR` dengan batas lebih kecil daripada nilai awalnya tetap menjalankan badan minimal satu kali.',
            answer: false,
            explanation:
              'Contoh pada bilangan prima: `FOR i ← 2 TO n − 1` untuk n = 2 menjadi 2 TO 1, sehingga tidak berjalan sama sekali.',
          },
          {
            type: 'fill',
            prompt:
              'Masukan ekstrem seperti nol, negatif, satu, atau nilai tepat di perbatasan syarat disebut kasus ______.',
            answers: ['batas'],
            explanation: 'Menguji kasus batas menemukan kekeliruan yang tidak terlihat pada contoh biasa.',
          },
          {
            type: 'order',
            prompt: 'Susun langkah pemecahan masalah dengan urutan yang benar.',
            items: [
              'Pahami masalahnya',
              'Pisahkan masukan, proses, dan keluaran',
              'Pecah menjadi bagian yang lebih kecil',
              'Pilih struktur kendali',
              'Tulis pseudocode',
              'Telusuri dan uji kasus batas',
            ],
            explanation:
              'Pseudocode baru ditulis setelah empat langkah awal selesai; penelusuran menutup prosesnya.',
          },
        ],
      },
      {
        id: '4-2',
        title: 'Kasus Data Akademik',
        theory: [
          {
            kind: 'text',
            content:
              'Merekap satu kelas dalam satu kali pembacaan data: setiap nilai yang lewat ditambahkan ke akumulator, dibandingkan untuk mencari tertinggi/terendah, atau diperiksa untuk menambah pencacah.',
          },
          {
            kind: 'text',
            content:
              'Nilai tertinggi/terendah sementara tidak perlu menyimpan semua nilai — cukup satu variabel. Agar titik awalnya berasal dari data nyata, nilai pertama dipakai sebagai titik awal (mis. lewat pemeriksaan `i = 1`).',
          },
          {
            kind: 'text',
            content:
              'Semua wadah disiapkan di luar pengulangan. Pemeriksaan `n > 0` mencegah pembagian dengan nol saat kelas kosong, dan pemeriksaan silang (jumlah pencacah = n) memastikan tidak ada data yang terlewat.',
          },
        ],
        questions: [
          {
            type: 'mcq',
            prompt: 'Untuk mencari nilai tertinggi tanpa menyimpan seluruh nilai, kita cukup memakai …',
            options: [
              'satu variabel sementara “tertinggi”',
              'sebuah larik berisi semua nilai',
              'dua variabel per nilai',
              'operator div dan mod',
            ],
            answer: 0,
            explanation:
              'Setiap nilai baru dibandingkan dengan `tertinggi`; kalau lebih besar, nilainya diganti.',
          },
          {
            type: 'boolean',
            prompt: 'Memberi nilai awal `tertinggi` dengan angka 0 selalu aman untuk semua jenis data.',
            answer: false,
            explanation:
              'Aman hanya bila semua data ≥ 0. Kalau semua nilai negatif, hasilnya salah — lebih baik ambil titik awal dari data nyata.',
          },
          {
            type: 'fill',
            prompt:
              'Nilai 90, 55, 72, 88, dan 60 memiliki rata-rata ______.',
            answers: ['73'],
            explanation: 'Totalnya 365, dibagi 5 menghasilkan 73.',
          },
          {
            type: 'mcq',
            prompt:
              'Dengan ambang lulus 60, berapa mahasiswa yang lulus dari nilai 90, 55, 72, 88, dan 60?',
            options: ['4', '3', '5', '2'],
            answer: 0,
            explanation: '90, 72, 88, dan 60 lulus (≥ 60); hanya 55 yang tidak.',
          },
          {
            type: 'mcq',
            prompt: 'Pemeriksaan `n > 0` sebelum `rata_rata ← total ÷ n` diperlukan untuk …',
            options: [
              'mencegah pembagian dengan nol saat kelas kosong',
              'mempercepat pengulangan',
              'mengubah tipe data menjadi real',
              'mengurutkan nilai',
            ],
            answer: 0,
            explanation: 'Kalau jumlah data 0, pembagian tidak terdefinisi.',
          },
        ],
      },
      {
        id: '4-3',
        title: 'Mini Project Desain Algoritma',
        theory: [
          {
            kind: 'text',
            content:
              'Dokumen rancangan memuat enam bagian berurutan: judul dan rumusan masalah, analisis kebutuhan (masukan/proses/keluaran), rancangan langkah, pseudocode, flowchart, dan penelusuran.',
          },
          {
            kind: 'text',
            content:
              'Penelusuran disusun untuk minimal dua contoh masukan, dan salah satunya wajib berupa kasus batas (nol, satu, atau nilai tepat di perbatasan syarat). Asumsi yang diambil perlu dituliskan agar pembaca tidak menebak.',
          },
          {
            kind: 'text',
            content:
              'Pilih masalah yang kecil dan jelas — masalah kecil yang selesai lebih bernilai daripada masalah besar yang setengah jadi. Bagian keterbatasan ditulis jujur, bukan disembunyikan.',
          },
        ],
        questions: [
          {
            type: 'mcq',
            prompt: 'Penelusuran pada dokumen rancangan memuat minimal …',
            options: [
              'dua contoh, salah satunya kasus batas',
              'satu contoh yang mudah',
              'tiga contoh tanpa kasus batas',
              'tidak perlu, cukup pseudocode',
            ],
            answer: 0,
            explanation:
              'Kasus batas membuktikan rancangan tetap bekerja pada keadaan ekstrem.',
          },
          {
            type: 'boolean',
            prompt:
              'Memilih masalah yang besar dan ambisius lebih baik daripada masalah kecil yang dapat diselesaikan.',
            answer: false,
            explanation:
              'Masalah kecil yang selesai jauh lebih bernilai daripada masalah besar yang setengah jadi.',
          },
          {
            type: 'mcq',
            prompt: 'Bagian “keterbatasan” pada dokumen sebaiknya …',
            options: [
              'ditulis jujur menyebut apa yang belum ditangani dan mengapa',
              'dilewati agar rancangan tampak sempurna',
              'diisi pujian terhadap rancangan sendiri',
              'diganti dengan tambahan pseudocode',
            ],
            answer: 0,
            explanation:
              'Menyebut keterbatasan menunjukkan rancangan dipahami sampai ke batasnya.',
          },
          {
            type: 'fill',
            prompt:
              'Asumsi yang dipakai saat merancang perlu ______ agar pembaca tidak menebak sendiri.',
            answers: ['dituliskan', 'ditulis', 'dicatat'],
            explanation: 'Asumsi yang tertulis adalah bagian dari rancangan.',
          },
          {
            type: 'order',
            prompt: 'Susun urutan bagian dokumen rancangan dengan benar.',
            items: [
              'Judul dan rumusan masalah',
              'Analisis kebutuhan',
              'Rancangan langkah',
              'Pseudocode',
              'Flowchart',
              'Penelusuran',
            ],
            explanation:
              'Urutannya mengikuti urutan berpikir: dari masalah, kebutuhan, rancangan, lalu pembuktian.',
          },
        ],
      },
    ],
  },
];
