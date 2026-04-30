// Programmatic Lighthouse audit. Avoids the CLI flag-parsing complexity.
// Usage: node scripts/lh-programmatic.mjs http://localhost:3001/
import { writeFile } from 'node:fs/promises';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

const url = process.argv[2] ?? 'http://localhost:3001/';
const chrome = await chromeLauncher.launch({
  chromeFlags: ['--headless=new', '--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
});

const options = {
  logLevel: 'error',
  output: 'json',
  port: chrome.port,
  formFactor: 'mobile',
  screenEmulation: {
    mobile: true,
    width: 412,
    height: 823,
    deviceScaleFactor: 1.75,
    disabled: false,
  },
  throttling: {
    cpuSlowdownMultiplier: 4,
    rttMs: 150,
    throughputKbps: 1638.4,
    requestLatencyMs: 562.5,
    downloadThroughputKbps: 1474.56,
    uploadThroughputKbps: 675,
  },
  onlyCategories: ['performance', 'accessibility', 'seo', 'best-practices'],
};

const runnerResult = await lighthouse(url, options);
await chrome.kill();

const lhr = runnerResult.lhr;
const summary = {
  url,
  performance: Math.round(lhr.categories.performance.score * 100),
  accessibility: Math.round(lhr.categories.accessibility.score * 100),
  seo: Math.round(lhr.categories.seo.score * 100),
  bestPractices: Math.round(lhr.categories['best-practices'].score * 100),
};
console.log(JSON.stringify(summary, null, 2));
await writeFile('/tmp/lh-home.json', runnerResult.report);
