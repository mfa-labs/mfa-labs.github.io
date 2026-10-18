export const STORAGE_KEY = 'mfa.algodasar.v2';
export const MAX_HEARTS = 5;
export const HEART_REFILL_MS = 30 * 60 * 1000;

export type Stars = 0 | 1 | 2 | 3;

export interface LessonProgress {
  completed: boolean;
  stars: Stars;
  bestXP: number;
  lastCompletedAt?: string;
}

export interface Progress {
  version: 1;
  totalXP: number;
  streak: number;
  lastCompletedDay: string | null;
  hearts: number;
  heartsLastRefill: number;
  lessons: Record<string, LessonProgress>;
}

export function defaultProgress(now: number = Date.now()): Progress {
  return {
    version: 1,
    totalXP: 0,
    streak: 0,
    lastCompletedDay: null,
    hearts: MAX_HEARTS,
    heartsLastRefill: now,
    lessons: {},
  };
}

function isProgress(value: unknown): value is Progress {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as Record<string, unknown>;
  return (
    candidate.version === 1 &&
    typeof candidate.totalXP === 'number' &&
    typeof candidate.hearts === 'number' &&
    typeof candidate.lessons === 'object' &&
    candidate.lessons !== null
  );
}

export function loadProgress(now: number = Date.now()): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress(now);
    const parsed: unknown = JSON.parse(raw);
    if (!isProgress(parsed)) return defaultProgress(now);
    return parsed;
  } catch {
    return defaultProgress(now);
  }
}

export function saveProgress(progress: Progress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // localStorage bisa tidak tersedia (mode privat / penuh) — abaikan.
  }
}

export function clearProgress(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // abaikan
  }
}

export function localDayKey(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function refillHearts(progress: Progress, now: number = Date.now()): Progress {
  if (progress.hearts >= MAX_HEARTS) {
    progress.hearts = MAX_HEARTS;
    progress.heartsLastRefill = now;
    return progress;
  }
  const elapsed = now - progress.heartsLastRefill;
  if (elapsed < HEART_REFILL_MS) return progress;

  const gained = Math.floor(elapsed / HEART_REFILL_MS);
  const hearts = Math.min(MAX_HEARTS, progress.hearts + gained);
  progress.hearts = hearts;
  progress.heartsLastRefill =
    hearts >= MAX_HEARTS ? now : progress.heartsLastRefill + gained * HEART_REFILL_MS;
  return progress;
}

export function isLessonUnlocked(
  index: number,
  orderedLessonIds: string[],
  progress: Progress,
): boolean {
  if (index <= 0) return true;
  const previousId = orderedLessonIds[index - 1];
  if (!previousId) return false;
  return Boolean(progress.lessons[previousId]?.completed);
}

export function computeStars(accuracy: number): Stars {
  if (accuracy >= 0.9) return 3;
  if (accuracy >= 0.7) return 2;
  if (accuracy >= 0.5) return 1;
  return 0;
}

export function awardXP(correctCount: number, completed: boolean): number {
  return correctCount * 10 + (completed ? 15 : 0);
}

export function updateStreak(progress: Progress, now: Date = new Date()): number {
  const today = localDayKey(now);
  if (progress.lastCompletedDay === today) return progress.streak;

  const yesterday = localDayKey(new Date(now.getTime() - 24 * 60 * 60 * 1000));
  progress.streak = progress.lastCompletedDay === yesterday ? progress.streak + 1 : 1;
  progress.lastCompletedDay = today;
  return progress.streak;
}
