import type { Unit } from '../../data/kelas-algoritma/course';

export interface ValidationIssue {
  lesson: string;
  index: number;
  message: string;
}

const KNOWN_TYPES = ['mcq', 'boolean', 'fill', 'order'];

export function validateCourse(course: Unit[]): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const lessonIds = new Set<string>();

  if (course.length === 0) {
    return [{ lesson: '-', index: -1, message: 'Kursus kosong' }];
  }

  course.forEach((unit, unitIndex) => {
    if (!unit.id.trim()) {
      issues.push({ lesson: `unit-${unitIndex}`, index: -1, message: 'Unit tanpa id' });
    }
    if (!unit.title.trim()) {
      issues.push({ lesson: `unit-${unit.id}`, index: -1, message: 'Unit tanpa judul' });
    }
    if (unit.lessons.length === 0) {
      issues.push({ lesson: `unit-${unit.id}`, index: -1, message: 'Unit tanpa pelajaran' });
    }

    unit.lessons.forEach((lesson) => {
      if (lessonIds.has(lesson.id)) {
        issues.push({ lesson: lesson.id, index: -1, message: 'id pelajaran duplikat' });
      }
      lessonIds.add(lesson.id);

      if (!lesson.id.trim()) {
        issues.push({ lesson: '(tanpa id)', index: -1, message: 'Pelajaran tanpa id' });
      }
      if (!lesson.title.trim()) {
        issues.push({ lesson: lesson.id, index: -1, message: 'Judul pelajaran kosong' });
      }
      if (lesson.questions.length === 0) {
        issues.push({ lesson: lesson.id, index: -1, message: 'Pelajaran tanpa soal' });
      }

      lesson.questions.forEach((question, qi) => {
        const where = { lesson: lesson.id, index: qi };
        const kind = (question as { type: string }).type;

        if (!KNOWN_TYPES.includes(kind)) {
          issues.push({ ...where, message: `Tipe soal tidak dikenal: ${kind}` });
          return;
        }
        if (!question.prompt.trim()) {
          issues.push({ ...where, message: 'Pertanyaan kosong' });
        }
        if (!question.explanation || !question.explanation.trim()) {
          issues.push({ ...where, message: 'Tanpa penjelasan jawaban' });
        }

        if (question.type === 'mcq') {
          if (question.options.length < 2) {
            issues.push({ ...where, message: 'Pilihan ganda butuh minimal 2 opsi' });
          }
          if (new Set(question.options).size !== question.options.length) {
            issues.push({ ...where, message: 'Ada opsi pilihan ganda yang duplikat' });
          }
          if (
            !Number.isInteger(question.answer) ||
            question.answer < 0 ||
            question.answer >= question.options.length
          ) {
            issues.push({ ...where, message: 'Indeks jawaban pilihan ganda di luar rentang' });
          }
        } else if (question.type === 'boolean') {
          if (typeof question.answer !== 'boolean') {
            issues.push({ ...where, message: 'Jawaban benar/salah bukan boolean' });
          }
        } else if (question.type === 'fill') {
          if (question.answers.length === 0) {
            issues.push({ ...where, message: 'Soal isian tanpa jawaban' });
          }
          if (question.answers.some((answer) => !String(answer).trim())) {
            issues.push({ ...where, message: 'Ada jawaban isian yang kosong' });
          }
        } else if (question.type === 'order') {
          if (question.items.length < 2) {
            issues.push({ ...where, message: 'Soal susun butuh minimal 2 item' });
          }
          if (new Set(question.items).size !== question.items.length) {
            issues.push({ ...where, message: 'Ada item susun yang duplikat' });
          }
        }
      });
    });
  });

  return issues;
}
