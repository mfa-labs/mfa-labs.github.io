import { course } from '../src/data/kelas-algoritma/course.ts';
import { validateCourse } from '../src/lib/kelas-algoritma/validate.ts';

const lessonCount = course.reduce((total, unit) => total + unit.lessons.length, 0);
const questionCount = course.reduce(
  (total, unit) => total + unit.lessons.reduce((sum, lesson) => sum + lesson.questions.length, 0),
  0,
);

const issues = validateCourse(course);

if (issues.length > 0) {
  console.error(`✗ Validasi kursus gagal: ${issues.length} masalah`);
  for (const issue of issues) {
    console.error(`  - [${issue.lesson} soal #${issue.index + 1}] ${issue.message}`);
  }
  process.exit(1);
}

console.log(
  `✓ Kursus valid: ${course.length} unit, ${lessonCount} pelajaran, ${questionCount} soal`,
);
