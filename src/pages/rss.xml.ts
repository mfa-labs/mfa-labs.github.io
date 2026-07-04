import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  const posts = (await getCollection('blog'))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Muhammad Fadhil Al Amal — Technical Blog',
    description: 'Reflections on software engineering, AI architecture, and regional language processing.',
    site: 'https://mfa-labs.github.io',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id.replace(/\.mdx?$/, '')}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
