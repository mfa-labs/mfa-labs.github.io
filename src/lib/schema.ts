import { SITE, profile } from '../data/profile';
import { publications } from '../data/research';
import type { Lang } from './i18n';

export function personSchema(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    alternateName: profile.alternateName,
    jobTitle: profile.jobTitle[lang],
    description: profile.metaDescription[lang],
    url: `${SITE}${lang === 'id' ? '/id/' : '/'}`,
    image: profile.image,
    sameAs: [profile.socials.linkedin, profile.socials.scholar, profile.socials.github],
    knowsAbout: profile.knowsAbout,
    address: { '@type': 'PostalAddress', ...profile.address },
    alumniOf: profile.alumniOf.map((name) => ({ '@type': 'CollegeOrUniversity', name })),
    worksFor: profile.worksFor.map((name) => ({ '@type': 'Organization', name })),
  };
}

export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: `${SITE}${item.href}`,
    })),
  };
}

export function publicationSchema() {
  return publications.map((p) => ({
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: p.title,
    author: { '@type': 'Person', name: p.authors, url: SITE },
    datePublished: String(p.year),
    publisher: { '@type': 'Organization', name: p.venue },
    identifier: `https://doi.org/${p.doi}`,
    url: p.url,
  }));
}
