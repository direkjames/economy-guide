// Builds the site into dist/. No dependencies: `node build.mjs`.
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { renderMarkdown } from './lib/markdown.mjs';
import { parseFrontMatter, idMaker, esc } from './lib/util.mjs';
import { pageHtml, homeHtml, printHtml, FIGURES } from './lib/templates.mjs';
import { mascot } from './lib/mascot.mjs';

const site = JSON.parse(readFileSync('site.json', 'utf8'));
const slugs = site.nav.flatMap((s) => s.pages);
const pages = new Map();
for (const slug of slugs) {
  const file = join('content', slug + '.md');
  if (!existsSync(file)) throw new Error(`Missing content file: ${file}`);
  const { data, body } = parseFrontMatter(readFileSync(file, 'utf8'));
  if (!data.title) throw new Error(`${file} needs a title in its front matter`);
  pages.set(slug, { slug, title: data.title, desc: data.desc || '', tool: data.tool || '', body });
}

const generate = (kind, name) => {
  if (kind !== 'figure' || !FIGURES[name]) throw new Error(`Unknown generated block {{${kind}:${name}}}`);
  return { parts: [{ html: FIGURES[name] }] };
};

/** Render one page's Markdown. `mode` is "web" (relative URLs) or "print" (in-document anchors). */
function render(page, mode) {
  const root = '../'.repeat(page.slug.split('/').length);
  const pid = page.slug.replace(/\//g, '-');
  const mk = idMaker();
  const ctx = {
    uid: (b) => mk(mode === 'print' ? `${pid}--${b}` : b),
    includePrivate: false,
    generate,
    resolveLink(href) {
      if (/^https?:\/\//.test(href)) return { href, external: true };
      if (href.startsWith('#')) return { href: mode === 'print' ? `#${pid}--${href.slice(1)}` : href };
      const [path, hash] = href.split('#');
      const target = path.replace(/\.md$/, '');
      if (!pages.has(target)) throw new Error(`Broken link "${href}" in ${page.slug}`);
      if (mode === 'print') return { href: hash ? `#${target.replace(/\//g, '-')}--${hash}` : `#${target.replace(/\//g, '-')}` };
      return { href: `${root}${target}/${hash ? '#' + hash : ''}` };
    },
  };
  return renderMarkdown(page.body, ctx);
}

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist', { recursive: true });
cpSync('theme', 'dist', { recursive: true });
writeFileSync('dist/favicon.svg', mascot('happy').replace('class="nugget" ', ''));
if (existsSync('downloads')) cpSync('downloads', 'dist/downloads', { recursive: true });
writeFileSync('dist/.nojekyll', '');

const search = [];
slugs.forEach((slug, i) => {
  const page = pages.get(slug);
  const { html, headings, sections } = render(page, 'web');
  const dir = join('dist', slug);
  mkdirSync(dir, { recursive: true });
  const root = '../'.repeat(slug.split('/').length);
  writeFileSync(
    join(dir, 'index.html'),
    pageHtml({
      site, pages, page, html, headings, root,
      prev: i > 0 ? pages.get(slugs[i - 1]) : null,
      next: i < slugs.length - 1 ? pages.get(slugs[i + 1]) : null,
    }),
  );
  for (const s of sections) {
    search.push({ p: page.title, h: s.heading, u: `${slug}/${s.id ? '#' + s.id : ''}`, x: s.text.slice(0, 1500) });
  }
});
writeFileSync('dist/search.json', JSON.stringify(search));
writeFileSync('dist/index.html', homeHtml({ site, pages }));

// One long page for the PDF.
const parts = new Map();
for (const slug of slugs) {
  const page = pages.get(slug);
  parts.set(slug, { ...page, html: page.tool === 'health' ? render(page, 'print').html + '<p class="note-print">Use the interactive Health Check on the website to run these numbers for you.</p>' : render(page, 'print').html });
}
const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
writeFileSync('dist/print.html', printHtml({ site, parts, date }));

console.log(`Built ${slugs.length} pages + home + print.html (${search.length} search entries).`);
