// HTML templates: the page layout, the home page, the tools and the print document.
import { esc } from './util.mjs';
import { mascot } from './mascot.mjs';

const ICONS = {
  compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
  pencil: '<path d="M4 20l1-4 11-11 3 3L8 19z"/><path d="M14 7l3 3"/>',
  drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
  flame: '<path d="M12 3c1 3 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z"/>',
  trend: '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
  store: '<path d="M4 9l1.5-5h13L20 9"/><path d="M4 9a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0A2.7 2.7 0 0 0 20 9"/><path d="M5 12v8h14v-8"/>',
  scale: '<path d="M12 4v16M6 20h12M5 7h14"/><path d="M5 7l-3 7a3 3 0 0 0 6 0z"/><path d="M19 7l-3 7a3 3 0 0 0 6 0z"/>',
  cubes: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12L4 7.5M12 12v9"/>',
  toolbox: '<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"/>',
  moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  download: '<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
};
export const icon = (name, cls = 'ico') =>
  `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ''}</svg>`;

// ---------------------------------------------------------------- figures (used by {{figure:name}})

export const FIGURES = {
  tank: `<figure class="fig"><svg viewBox="0 0 640 300" role="img" aria-labelledby="tank-t tank-d">
<title id="tank-t">The economy as a tank</title>
<desc id="tank-d">A faucet drips coins into a tank called the money supply. A drain on the right removes coins. If more flows in than out, the level rises and prices climb. If more flows out than in, the level falls and players run out of money.</desc>
<path d="M30 40 H330 V76" class="pipe pipe-in"/><circle cx="130" cy="40" r="13" class="valve"/>
<circle cx="330" cy="92" r="6" class="coin-drop d1"/><circle cx="330" cy="92" r="6" class="coin-drop d2"/><circle cx="330" cy="92" r="6" class="coin-drop d3"/>
<rect x="240" y="84" width="180" height="186" rx="14" class="tank"/>
<path d="M242 150 q22 -10 44 0 t44 0 t44 0 t38 0 V268 H242z" class="water"/>
<path d="M420 236 H610" class="pipe pipe-out"/><rect x="500" y="222" width="12" height="28" rx="3" class="gate"/>
<circle cx="440" cy="236" r="6" class="coin-out o1"/><circle cx="440" cy="236" r="6" class="coin-out o2"/>
<text x="30" y="20" class="lbl lbl-in">Faucets: money in</text>
<text x="330" y="212" text-anchor="middle" class="lbl lbl-mid">Money supply</text>
<text x="610" y="212" text-anchor="end" class="lbl lbl-out">Sinks: money out</text>
<text x="436" y="108" class="lbl lbl-note">Level too high: prices climb</text>
<text x="436" y="262" class="lbl lbl-note" opacity="0">.</text>
<text x="30" y="290" class="lbl lbl-note">Level too low: players are broke and give up</text>
</svg><figcaption>Your whole job: keep the level steady while the server grows.</figcaption></figure>`,
};

// ---------------------------------------------------------------- tools

const FIELDS = [
  ['players', 'Active players this week', 'Players who logged in at least once this week.'],
  ['playersPrev', 'Active players last week', 'Same count, one week earlier.'],
  ['supply', 'Total money in circulation now', 'Add up every balance. Many economy plugins show this total.'],
  ['supplyPrev', 'Total money one week ago', 'Write the total down every week so you have this.'],
  ['faucets', 'Money created per day', 'Average per day from jobs, shop sales, rewards, crates and so on.'],
  ['sinks', 'Money removed per day', 'Average per day from taxes, fees, rent, shop spending and so on.'],
  ['top10', 'Share held by the richest 10% (optional)', 'In percent. Leave empty if you do not know it.'],
];

const TOOLS = {
  health: () => `
<form id="health" class="tool" novalidate>
  <fieldset>
    <legend>Your server, this week</legend>
    <div class="fields">
      ${FIELDS.map(
        ([id, label, hint]) =>
          `<div class="field"><label for="f-${id}">${label}</label><input id="f-${id}" name="${id}" type="number" inputmode="decimal" min="0" step="any" autocomplete="off"><p class="hint" id="h-${id}">${hint}</p></div>`,
      ).join('')}
    </div>
  </fieldset>
  <div class="tool-actions"><button class="btn" type="submit">Check my economy</button><button class="btn btn-ghost" type="button" id="health-example">Fill with an example</button></div>
  <p class="form-error" id="health-error" role="alert" hidden></p>
</form>
<section id="health-out" class="tool-out" aria-live="polite" hidden>
  <div class="verdict">
    <div class="verdict-face"><span data-mood="happy">${mascot('happy', 'nugget-lg')}</span><span data-mood="worried" hidden>${mascot('worried', 'nugget-lg')}</span><span data-mood="party" hidden>${mascot('party', 'nugget-lg')}</span></div>
    <div><h2 id="verdict-title" class="verdict-title"></h2><p id="verdict-text"></p></div>
  </div>
  <ul class="results" id="results"></ul>
  <p class="fine">Numbers are rules of thumb. A brand-new server grows faster than a mature one, and that is normal.</p>
</section>`,
  checklist: () => `
<div class="cl-bar" id="cl-bar">
  <div class="cl-face"><span data-mood="happy">${mascot('happy', 'nugget-md')}</span><span data-mood="party" hidden>${mascot('party', 'nugget-md')}</span></div>
  <div class="cl-main"><p class="cl-text" id="cl-text">Tick things off as you go. Your progress stays in this browser.</p><progress id="cl-progress" max="100" value="0" aria-label="Checklist progress"></progress></div>
  <button class="btn btn-ghost" type="button" id="cl-reset">Start a new week</button>
</div>`,
};

// ---------------------------------------------------------------- shared chrome

const head = (site, title, desc, root) => `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="theme-color" content="#F2B01E">
<link rel="icon" href="${root}favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Figtree:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="${root}style.css">`;

const themeBoot = `<script>try{var t=localStorage.getItem('theme');if(!t)t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='light'}</script>`;

function header(site, root) {
  return `<header class="top">
  <button class="iconbtn burger" id="burger" aria-label="Open menu" aria-controls="side" aria-expanded="false">${icon('menu')}</button>
  <a class="brand" href="${root}">${mascot('happy', 'brand-mark')}<span>${esc(site.title)}</span></a>
  <div class="top-actions">
    <button class="searchbtn" id="open-search" type="button" aria-label="Search the guide">${icon('search')}<span>Search</span><kbd>/</kbd></button>
    <a class="iconbtn" href="${root}downloads/economy-guide.pdf" aria-label="Download the PDF guide" title="Download the PDF">${icon('download')}</a>
    <button class="iconbtn" id="theme" type="button" aria-label="Switch between light and dark mode"><span class="when-light">${icon('moon')}</span><span class="when-dark">${icon('sun')}</span></button>
  </div>
</header>`;
}

function sidebar(site, pages, current, root) {
  return `<nav class="side" id="side" aria-label="Guide sections">
${site.nav
  .map(
    (sec) => `<div class="side-sec${sec.kind ? ' k-' + sec.kind : ''}">
  <p class="side-title">${icon(sec.icon)}<span>${esc(sec.title)}</span></p>
  <ul>${sec.pages
    .map((slug) => `<li><a href="${root}${slug}/"${slug === current ? ' aria-current="page"' : ''}>${esc(pages.get(slug).title)}</a></li>`)
    .join('')}</ul>
</div>`,
  )
  .join('\n')}
</nav>`;
}

const searchDialog = `<dialog id="search-dialog" aria-label="Search the guide">
  <form method="dialog" class="search-box">
    <input id="search-input" type="search" placeholder="Search: tax, inflation, jobs, oneblock…" autocomplete="off" aria-label="Search the guide">
    <button class="iconbtn" aria-label="Close search" value="close">×</button>
  </form>
  <ul id="search-results" class="search-results"></ul>
</dialog>`;

const footer = (site) => `<footer class="foot"><p>Made by ${esc(site.author)} for server owners and staff. Every number here is a starting point: test it on your own server, then tune it.</p><p><a href="https://github.com/${esc(site.repo)}">Source and issues on GitHub</a></p></footer>`;

// ---------------------------------------------------------------- pages

export function pageHtml({ site, pages, page, html, headings, prev, next, root }) {
  const sec = site.nav.find((s) => s.pages.includes(page.slug));
  const toc = headings.filter((h) => h.level <= 3);
  const tool = page.tool && TOOLS[page.tool] ? TOOLS[page.tool]() : '';
  return `<!doctype html>
<html lang="en">
<head>${head(site, `${page.title} · ${site.title}`, page.desc || site.tagline, root)}${themeBoot}</head>
<body data-root="${root}">
<a class="skip" href="#main">Skip to content</a>
${header(site, root)}
<div class="shell">
${sidebar(site, pages, page.slug, root)}
<main id="main" tabindex="-1">
<article class="prose${page.tool === 'checklist' ? ' checklist-page' : ''}${sec && sec.kind ? ' k-' + sec.kind : ''}">
  <p class="crumb">${sec ? `${icon(sec.icon)}${esc(sec.title)}` : ''}</p>
  <h1>${esc(page.title)}</h1>
  ${page.desc ? `<p class="lede">${esc(page.desc)}</p>` : ''}
  ${tool}
  ${html}
</article>
<nav class="pager" aria-label="Previous and next page">
  ${prev ? `<a class="prev" href="${root}${prev.slug}/"><span>Previous</span>${esc(prev.title)}</a>` : '<span></span>'}
  ${next ? `<a class="next" href="${root}${next.slug}/"><span>Next</span>${esc(next.title)}</a>` : '<span></span>'}
</nav>
</main>
${
  toc.length > 2
    ? `<aside class="toc" aria-label="On this page"><p>On this page</p><ul>${toc
        .map((h) => `<li class="l${h.level}"><a href="#${h.id}">${esc(h.text)}</a></li>`)
        .join('')}</ul></aside>`
    : '<div></div>'
}
</div>
${footer(site)}
${searchDialog}
<script type="module" src="${root}app.js"></script>
</body>
</html>`;
}

export function homeHtml({ site, pages }) {
  const root = './';
  const first = site.nav[0].pages[0];
  return `<!doctype html>
<html lang="en">
<head>${head(site, `${site.title}: run a fair Minecraft economy`, 'A plain-words guide to balancing a Minecraft server economy: faucets, sinks, taxes, inflation and fair play.', root)}${themeBoot}</head>
<body data-root="${root}" class="home">
<a class="skip" href="#main">Skip to content</a>
${header(site, root)}
<main id="main" tabindex="-1">
<section class="hero">
  <div class="hero-text">
    <p class="eyebrow">A guide for server owners and staff</p>
    <h1>Keep the coins flowing and the prices fair.</h1>
    <p class="hero-lede">Everything you need to balance a Minecraft economy: where money comes from, where it should go, how to spot inflation early and how to keep it fair for every player.</p>
    <div class="hero-cta"><a class="btn btn-dark" href="${root}${first}/">Start with the basics ${icon('arrow')}</a><a class="btn btn-light" href="${root}toolkit/health-check/">Run a health check</a></div>
  </div>
  <div class="hero-art" aria-hidden="false"><span class="spark s1"></span><span class="spark s2"></span><span class="spark s3"></span><div class="coin">${mascot('happy', 'nugget-hero')}</div></div>
</section>

<section class="band"><div class="wrap">
  <h2 class="band-title">The whole guide fits in one picture</h2>
  <div class="band-fig">${FIGURES.tank}<div class="band-copy"><p><strong>Money comes in through faucets.</strong> Jobs, shop sales, rewards and crates all create coins out of nothing.</p><p><strong>Money leaves through sinks.</strong> Taxes, fees, rent and purchases destroy coins for good.</p><p>When the two stay close, prices stay calm and a coin still means something next month. This guide shows you how to keep them close.</p></div></div>
</div></section>

<section class="wrap numbers"><h2 class="sr-only">Rules of thumb at a glance</h2>
  ${site.numbers.map((n) => `<div class="num"><p class="big">${esc(n.big)}</p><p class="small">${esc(n.small)}</p></div>`).join('')}
</section>

<section class="wrap paths"><h2>Pick your path</h2>
  <div class="path-list">
  ${site.nav
    .map(
      (s) => `<a class="path${s.kind ? ' k-' + s.kind : ''}" href="${root}${s.pages[0]}/">${icon(s.icon, 'ico ico-lg')}<span class="path-t"><strong>${esc(s.title)}</strong><span>${esc(s.blurb)}</span></span>${icon('arrow', 'ico go')}</a>`,
    )
    .join('')}
  </div>
</section>

<section class="wrap modes"><h2>Built for three kinds of server</h2>
  <div class="mode-row">
    <a class="mode m1" href="${root}modes/oneblock/"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 6l15 8.5v17L24 40 9 31.5v-17z" fill="#F2B01E" stroke="#2A1B05" stroke-width="2.5" stroke-linejoin="round"/><path d="M24 23l15-8.5M24 23L9 14.5M24 23v17" stroke="#2A1B05" stroke-width="2.5"/></svg><h3>Oneblock</h3><p>One block, endless drops. Price by clicks per hour and tame auto-clickers.</p></a>
    <a class="mode m2" href="${root}modes/survival/"><svg viewBox="0 0 48 48" aria-hidden="true"><rect x="21" y="26" width="6" height="16" fill="#8A5A00"/><circle cx="24" cy="18" r="12" fill="#0E8F7E" stroke="#2A1B05" stroke-width="2.5"/></svg><h3>Survival</h3><p>A huge world and farms that never sleep. Cap what machines can sell.</p></a>
    <a class="mode m3" href="${root}modes/cobblemon/"><svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="16" fill="#fff" stroke="#2A1B05" stroke-width="2.5"/><path d="M8 24a16 16 0 0 1 32 0z" fill="#E4572E" stroke="#2A1B05" stroke-width="2.5"/><path d="M8 24h32" stroke="#2A1B05" stroke-width="2.5"/><circle cx="24" cy="24" r="5" fill="#fff" stroke="#2A1B05" stroke-width="2.5"/></svg><h3>Cobblemon</h3><p>Modpack economies run on mods. Balance catching, battling and trading.</p></a>
  </div>
</section>
</main>
${footer(site)}
${searchDialog}
<script type="module" src="${root}app.js"></script>
</body>
</html>`;
}

// ---------------------------------------------------------------- print (PDF)

export function printHtml({ site, parts, date }) {
  return `<!doctype html>
<html lang="en"><head>${head(site, `${site.title} (PDF)`, site.tagline, './').replace(/<link rel="stylesheet" href="\.\/style\.css">/, '<link rel="stylesheet" href="./print.css">')}</head>
<body class="print">
<section class="cover">${mascot('happy', 'cover-mark')}<p class="eyebrow">Minecraft server economy handbook</p><h1>${esc(site.title)}</h1><p class="cover-sub">${esc(site.tagline)}</p><p class="cover-meta">By ${esc(site.author)} · ${esc(date)}<br>Online version: github.com/${esc(site.repo)}</p></section>
<section class="toc-page"><h2>Contents</h2>
${site.nav
  .map(
    (sec) =>
      `<h3>${esc(sec.title)}</h3><ul>${sec.pages
        .map((slug) => `<li><a href="#${slug.replace(/\//g, '-')}">${esc(parts.get(slug).title)}</a></li>`)
        .join('')}</ul>`,
  )
  .join('')}
<p class="toc-note">The interactive Health Check lives on the website. The same checks are written out in the Spotting Inflation and Tracking chapters.</p></section>
${site.nav
  .map(
    (sec) =>
      `<section class="chapter"><p class="chapter-no">${esc(sec.title)}</p><p class="chapter-blurb">${esc(sec.blurb)}</p></section>` +
      sec.pages
        .map((slug) => {
          const p = parts.get(slug);
          return `<article class="prose${p.tool === 'checklist' ? ' checklist-page' : ''}"><h1 id="${slug.replace(/\//g, '-')}">${esc(p.title)}</h1>${p.desc ? `<p class="lede">${esc(p.desc)}</p>` : ''}${p.html}</article>`;
        })
        .join(''),
  )
  .join('\n')}
</body></html>`;
}
