import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests/browser', timeout: 120000, fullyParallel: true, workers: 2, retries: 0,
  reporter: [['list'], ['json', { outputFile: '../evidence/preserved-browser-results.json' }]],
  use: { baseURL: process.env.QA_BASE_URL || 'http://127.0.0.1:52765', channel: 'chrome', headless: true, reducedMotion: 'reduce', trace: 'retain-on-failure', screenshot: 'only-on-failure' },
  webServer: process.env.QA_BASE_URL ? undefined : { command: 'npm run preview', url: 'http://127.0.0.1:52765', reuseExistingServer: false, timeout: 15000 },
});
