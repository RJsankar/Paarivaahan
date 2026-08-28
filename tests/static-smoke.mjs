import assert from 'node:assert/strict';
import { readFile, access, readdir } from 'node:fs/promises';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const read = name => readFile(new URL(name, root), 'utf8');

const [html, css, app, worker, manifest] = await Promise.all([
  read('index.html'),
  read('styles.css'),
  read('app.js'),
  read('sw.js'),
  read('manifest.webmanifest')
]);

new vm.Script(app, { filename: 'app.js' });
new vm.Script(worker, { filename: 'sw.js' });

const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
assert.deepEqual([...new Set(duplicateIds)], [], 'index.html contains duplicate IDs');

for (const requiredId of [
  'view-home',
  'view-documents',
  'view-alerts',
  'view-companion',
  'view-services',
  'view-help',
  'prototypeInfoModal',
  'alertToggle',
  'judgePanel',
  'privacyModal',
  'privacyDownload',
  'privacyClearChat',
  'privacyClearOffline',
  'privacyDeleteProfile'
]) {
  assert(ids.includes(requiredId), `Missing required UI element #${requiredId}`);
}

assert.match(html, /Independent hackathon prototype/i, 'Missing visible independent-prototype disclosure');
assert.match(html, /No real payments/i, 'Missing visible payment simulation disclosure');
assert.match(html, /data-language="en"/);
assert.match(html, /data-language="hi"/);
assert.doesNotMatch(html, /data-language="ta"/, 'Tamil must not appear as an available interface language');
assert.match(html, /<meta name="viewport"/);
assert.match(html, /<meta name="description"/);
assert.match(html, /property="og:title"/);
assert.match(html, /rel="manifest"/);

const cssVersion = html.match(/styles\.css\?v=([^"']+)/)?.[1];
const appVersion = html.match(/app\.js\?v=([^"']+)/)?.[1];
assert(cssVersion && appVersion, 'Versioned CSS and JavaScript references are required');
assert.equal(cssVersion, appVersion, 'CSS and JavaScript build versions differ');
assert(worker.includes(`styles.css?v=${cssVersion}`), 'Service-worker CSS version is stale');
assert(worker.includes(`app.js?v=${appVersion}`), 'Service-worker JavaScript version is stale');

for (const match of html.matchAll(/<a\b([^>]*)target="_blank"([^>]*)>/gi)) {
  const attributes = `${match[1]} ${match[2]}`;
  assert.match(attributes, /rel="[^"]*noreferrer[^"]*"/i, 'External target=_blank link must use rel=noreferrer');
}

for (const asset of [
  'assets/vehicles/honda-city-white-v1.png',
  'assets/vehicles/tvs-jupiter-white-v1.png',
  'assets/brand/favicon.svg',
  'assets/brand/icon-192.png',
  'assets/brand/icon-512.png',
  'assets/brand/og-card.png'
]) {
  await access(new URL(asset, root));
  assert(worker.includes(`./${asset}`), `${asset} is missing from the service-worker shell`);
}

const parsedManifest = JSON.parse(manifest);
assert.equal(parsedManifest.name, 'Parivahan Sarathi');
assert.equal(parsedManifest.display, 'standalone');
assert(parsedManifest.icons?.length >= 2, 'Manifest must provide installable icons');
assert.match(app, /const judgeMode = pageParams\.get\('judge'\) === '1'/, 'Judge mode URL trigger is missing');
assert.match(app, /function clearDemoStorage/, 'Repeatable demo reset is missing');
assert.match(app, /function openPrivacyControls/, 'Working privacy controls are missing');
assert.match(app, /function decorateSourceFreshness/, 'Dynamic source freshness is missing');

assert(!/\.master-toggle input\s*\{[^}]*display\s*:\s*none/i.test(css), 'Alert switch cannot hide the checkbox with display:none');
assert.match(css, /\.master-toggle input:focus-visible \+ i/, 'Alert switch needs a visible keyboard-focus style');

const summary = await read('docs/SUMMARY-250-WORDS.md');
const summaryBody = summary.split('\n').filter(line => line && !line.startsWith('#') && !line.startsWith('**Word count:')).join(' ');
const summaryWords = summaryBody.trim().split(/\s+/).filter(Boolean).length;
assert(summaryWords <= 250, `Submission summary is ${summaryWords} words; limit is 250`);

async function collectMarkdown(directory, prefix = '') {
  const files = [];
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const relativePath = `${prefix}${entry.name}`;
    if (entry.isDirectory()) {
      files.push(...await collectMarkdown(new URL(`${entry.name}/`, directory), `${relativePath}/`));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(relativePath);
    }
  }
  return files;
}

const rootEntries = await readdir(root, { withFileTypes: true });
const rootMarkdown = rootEntries
  .filter(entry => entry.isFile() && entry.name.endsWith('.md'))
  .map(entry => entry.name);
const docsMarkdown = await collectMarkdown(new URL('docs/', root), 'docs/');
const markdownFiles = [...rootMarkdown, ...docsMarkdown];
for (const markdownFile of markdownFiles) {
  const markdown = await read(markdownFile);
  for (const match of markdown.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
    const target = match[1].replace(/^<|>$/g, '').split('#')[0];
    if (!target || /^(?:https?:|mailto:)/i.test(target)) continue;
    await access(new URL(target, new URL(markdownFile, root)));
  }
}

console.log(`Static smoke test passed for build ${appVersion}: ${ids.length} unique IDs, ${markdownFiles.length} documents, ${summaryWords}-word summary.`);
