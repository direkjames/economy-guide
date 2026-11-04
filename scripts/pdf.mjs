// Makes downloads/economy-guide.pdf from the same content: `npm run pdf`.
// Needs Microsoft Edge or Google Chrome installed (used in headless mode).
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

execFileSync(process.execPath, ['build.mjs'], { stdio: 'inherit' });

const candidates = [
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
];
const browser = candidates.find(existsSync);
if (!browser) {
  console.error('Could not find Edge or Chrome. Install one, or open dist/print.html and print it to PDF yourself.');
  process.exit(1);
}

mkdirSync('downloads', { recursive: true });
const out = resolve('downloads/economy-guide.pdf');
// A throwaway profile stops the browser from handing the job to an already-open window.
const profile = mkdtempSync(join(tmpdir(), 'economy-pdf-'));
try {
  execFileSync(browser, [
    '--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--virtual-time-budget=20000',
    `--user-data-dir=${profile}`, `--print-to-pdf=${out}`, pathToFileURL(resolve('dist/print.html')).href,
  ], { stdio: 'inherit', timeout: 120000 });
} finally {
  rmSync(profile, { recursive: true, force: true });
}
if (!existsSync(out)) {
  console.error('The browser ran but no PDF was written.');
  process.exit(1);
}
console.log('Wrote', out);
execFileSync(process.execPath, ['build.mjs'], { stdio: 'inherit' }); // rebuild so dist/ includes the new PDF
