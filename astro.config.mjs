// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

// Map of blog slug → last content date, read from frontmatter so the sitemap
// only carries lastmod values that come from a real source of truth.
const blogDir = new URL('./src/content/blog/', import.meta.url);
const postDates = new Map();

for (const file of readdirSync(blogDir)) {
  if (!/\.mdx?$/.test(file)) continue;
  const frontmatter = readFileSync(new URL(file, blogDir), 'utf8').split('---')[1] ?? '';
  const date = frontmatter.match(/^updatedDate:\s*(.+)$/m)?.[1] ?? frontmatter.match(/^pubDate:\s*(.+)$/m)?.[1];
  if (date) postDates.set(file.replace(/\.mdx?$/, ''), new Date(date.trim()).toISOString());
}

// https://astro.build/config
export default defineConfig({
  site: 'https://mfa-labs.github.io',
  markdown: {
    shikiConfig: {
      // "pseudocode" bukan bahasa sungguhan, jadi didaftarkan sebagai bahasa
      // kosong: tanpa pewarnaan, tetapi tetap punya nama sendiri sehingga
      // blok pseudocode tidak diperlakukan sebagai blok kutipan polos.
      langs: [
        {
          name: 'pseudocode',
          scopeName: 'source.pseudocode',
          patterns: [],
        },
      ],
    },
  },
  integrations: [
    mdx(),
    sitemap({
      // /en/ hanya stub redirect ke root — jangan pernah masuk sitemap.
      filter: (page) => !/\/en\/?$/.test(new URL(page).pathname),
      customPages: [
        'https://mfa-labs.github.io/materi/workshop-ai-sekre.html',
        'https://mfa-labs.github.io/materi/workshop-ai-tendik-sesi2.html',
      ],
      serialize(item) {
        const slug = new URL(item.url).pathname.match(/^\/blog\/([^/]+)\/$/)?.[1];
        const lastmod = slug ? postDates.get(slug) : undefined;
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
  ],
});
