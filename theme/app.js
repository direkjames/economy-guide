import { check } from './calc.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* private mode: it still works, it just won't be remembered */ } },
};
const root = document.body.dataset.root || './';

// ---------- theme + mobile menu ----------
$('#theme')?.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  store.set('theme', next);
});
const burger = $('#burger');
const setNav = (open) => { document.body.classList.toggle('nav-open', open); burger?.setAttribute('aria-expanded', String(open)); };
burger?.addEventListener('click', () => setNav(!document.body.classList.contains('nav-open')));
document.addEventListener('click', (e) => { if (document.body.classList.contains('nav-open') && !e.target.closest('#side, #burger')) setNav(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setNav(false); });

// ---------- search ----------
const dialog = $('#search-dialog');
const input = $('#search-input');
const list = $('#search-results');
let index = null;
const loadIndex = () => (index ??= fetch(root + 'search.json').then((r) => r.json()).catch(() => []));

function show(results, q) {
  list.replaceChildren();
  if (!q) return;
  if (!results.length) {
    const li = document.createElement('li');
    li.className = 'empty';
    li.textContent = `Nothing found for "${q}". Try a simpler word, like tax or jobs.`;
    list.append(li);
    return;
  }
  for (const r of results) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = root + r.u;
    const t = document.createElement('strong');
    t.textContent = r.h && r.h !== r.p ? `${r.p}: ${r.h}` : r.p;
    const s = document.createElement('small');
    const at = r.x.toLowerCase().indexOf(r.terms[0]);
    s.textContent = (at > 40 ? '…' : '') + r.x.slice(Math.max(0, at - 40), Math.max(0, at - 40) + 130) + '…';
    a.append(t, s);
    li.append(a);
    list.append(li);
  }
}

async function runSearch() {
  const q = input.value.trim().toLowerCase();
  const terms = q.split(/\s+/).filter(Boolean);
  if (!terms.length) return show([], '');
  const data = await loadIndex();
  const scored = [];
  for (const e of data) {
    const title = `${e.p} ${e.h}`.toLowerCase();
    const body = e.x.toLowerCase();
    let score = 0;
    let all = true;
    for (const t of terms) {
      const inTitle = title.includes(t);
      const inBody = body.includes(t);
      if (!inTitle && !inBody) { all = false; break; }
      score += (inTitle ? 10 : 0) + (inBody ? 2 : 0);
    }
    if (all) scored.push({ ...e, score, terms });
  }
  scored.sort((a, b) => b.score - a.score);
  show(scored.slice(0, 8), q);
}
const openSearch = () => { if (!dialog) return; dialog.showModal(); input.select(); loadIndex(); };
$('#open-search')?.addEventListener('click', openSearch);
input?.addEventListener('input', runSearch);
dialog?.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
list?.addEventListener('click', (e) => { if (e.target.closest('a')) dialog.close(); });
document.addEventListener('keydown', (e) => {
  const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName);
  if ((e.key === '/' && !typing) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) { e.preventDefault(); openSearch(); }
});

// ---------- "on this page" highlight ----------
const tocLinks = $$('.toc a');
if (tocLinks.length && 'IntersectionObserver' in window) {
  const byId = new Map(tocLinks.map((a) => [a.getAttribute('href').slice(1), a]));
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) {
      if (!en.isIntersecting) continue;
      tocLinks.forEach((a) => a.classList.remove('on'));
      byId.get(en.target.id)?.classList.add('on');
    }
  }, { rootMargin: '-70px 0px -70% 0px' });
  byId.forEach((_, id) => { const h = document.getElementById(id); if (h) io.observe(h); });
}

// ---------- Health Check ----------
const form = $('#health');
if (form) {
  const KEY = 'health-v1';
  const ids = ['players', 'playersPrev', 'supply', 'supplyPrev', 'faucets', 'sinks', 'top10'];
  const field = (id) => form.elements[id];
  try { const saved = JSON.parse(store.get(KEY) || '{}'); ids.forEach((id) => { if (saved[id] !== undefined) field(id).value = saved[id]; }); } catch { /* ignore bad saved data */ }

  const run = () => {
    const v = {};
    ids.forEach((id) => { const raw = field(id).value.trim(); v[id] = raw === '' ? NaN : Number(raw); });
    store.set(KEY, JSON.stringify(Object.fromEntries(ids.map((id) => [id, field(id).value]))));
    const err = $('#health-error');
    const out = $('#health-out');
    const res = check(v);
    err.hidden = !res.error;
    if (res.error) { err.textContent = res.error; out.hidden = true; return; }
    $$('[data-mood]', out).forEach((el) => { el.hidden = el.dataset.mood !== res.mood; });
    $('#verdict-title').textContent = res.title;
    $('#verdict-text').textContent = res.text;
    const ul = $('#results');
    ul.replaceChildren();
    const names = { good: 'Good', watch: 'Watch', act: 'Act' };
    for (const it of res.items) {
      const li = document.createElement('li');
      li.className = `res res-${it.level}`;
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.textContent = names[it.level];
      const box = document.createElement('div');
      const strong = document.createElement('strong');
      strong.textContent = it.label;
      const p = document.createElement('p');
      p.append(it.text + ' ');
      const a = document.createElement('a');
      a.href = root + it.link[0];
      a.textContent = it.link[1];
      p.append(a);
      box.append(strong, p);
      li.append(chip, box);
      ul.append(li);
    }
    out.hidden = false;
    out.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };
  form.addEventListener('submit', (e) => { e.preventDefault(); run(); });
  $('#health-example')?.addEventListener('click', () => {
    const ex = { players: 120, playersPrev: 115, supply: 4800000, supplyPrev: 4300000, faucets: 260000, sinks: 150000, top10: 62 };
    ids.forEach((id) => { field(id).value = ex[id]; });
    run();
  });
}

// ---------- weekly checklist ----------
const bar = $('#cl-bar');
if (bar) {
  const KEY = 'checklist-v1';
  let done = {};
  try { done = JSON.parse(store.get(KEY) || '{}'); } catch { done = {}; }
  const items = $$('.checklist-page .prose > ul > li, .checklist-page ul:not(.results) > li').filter((li, i, all) => !all.some((o) => o !== li && o.contains(li)));
  const boxes = items.map((li, i) => {
    const text = li.textContent.trim();
    const key = `${i}:${text.slice(0, 40)}`;
    const label = document.createElement('label');
    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.checked = !!done[key];
    const span = document.createElement('span');
    while (li.firstChild) span.append(li.firstChild);
    label.append(cb, span);
    li.append(label);
    li.classList.add('cl-item');
    cb.addEventListener('change', () => { done[key] = cb.checked; if (!cb.checked) delete done[key]; store.set(KEY, JSON.stringify(done)); update(); });
    return { cb, key };
  });
  const msgs = [[0, 'Tick things off as you go. Your progress stays in this browser.'], [1, 'Good start. Keep going.'], [50, 'Halfway there. You are doing great.'], [100, 'All done. See you next week!']];
  function update() {
    const n = boxes.filter((b) => b.cb.checked).length;
    const pct = boxes.length ? Math.round((n / boxes.length) * 100) : 0;
    $('#cl-progress').value = pct;
    $('#cl-text').textContent = `${n} of ${boxes.length} done. ${[...msgs].reverse().find(([t]) => pct >= t)[1]}`;
    $$('[data-mood]', bar).forEach((el) => { el.hidden = el.dataset.mood !== (pct === 100 ? 'party' : 'happy'); });
  }
  $('#cl-reset').addEventListener('click', () => { boxes.forEach((b) => { b.cb.checked = false; }); done = {}; store.set(KEY, '{}'); update(); });
  update();
}
