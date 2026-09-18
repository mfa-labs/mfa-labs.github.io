export type Lang = 'en' | 'id';

export interface Bilingual<T> {
  en: T;
  id: T;
}

export function pick<T>(pair: Bilingual<T>, lang: Lang): T {
  return pair[lang];
}

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'id' : 'en';
}

/** Path apa pun di-prefix dengan /id bila bahasanya Indonesia. */
export function localePath(path: string, lang: Lang): string {
  if (lang === 'en') return path;
  if (path === '/') return '/id/';
  return `/id${path}`;
}

/** URL pasangan bahasa lain untuk sebuah path. */
export function alternateHref(path: string, lang: Lang): string {
  return localePath(path, otherLang(lang));
}

export function homeHref(lang: Lang): string {
  return localePath('/', lang);
}
