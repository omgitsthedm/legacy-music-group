import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { mkdir } from 'node:fs/promises';

const routes = ['/', '/services/', '/services/recording/', '/services/mixing-mastering/', '/services/production/', '/services/artist-development/', '/studio/', '/pricing/', '/engineers/', '/gear/', '/reviews/', '/faq/', '/book/', '/contact/', '/privacy/', '/terms/', '/policies/'];
const screenshots = process.env.QA_SCREENSHOTS || '../screenshots/after-local';

for (const width of [320, 390, 768, 1024, 1440]) {
  test(`all routes render cleanly at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width < 600 ? 844 : 1000 });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
    const failed = [];
    page.on('response', response => { if (response.status() >= 400) failed.push(`${response.status()} ${response.url()}`); });
    for (const route of routes) {
      const response = await page.goto(route, { waitUntil: 'networkidle' });
      expect(response.status()).toBe(200);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page).toHaveTitle(/Legacy Music Group$/);
      await page.evaluate(() => document.fonts.ready);
      for (const img of await page.locator('img[loading="lazy"]').all()) {
        await img.scrollIntoViewIfNeeded();
        await expect.poll(() => img.evaluate(el => el.complete && el.naturalWidth > 0)).toBe(true);
      }
      await page.evaluate(() => window.scrollTo(0, 0));
      const layout = await page.evaluate(() => ({ width: document.documentElement.scrollWidth, viewport: innerWidth, missing: [...document.images].filter(i => !i.complete || !i.naturalWidth).map(i => i.src), smallest: Math.min(...[...document.querySelectorAll('p,a,label,summary,button,input,textarea,select')].filter(e => e.getClientRects().length).map(e => parseFloat(getComputedStyle(e).fontSize))) }));
      expect(layout.width, `${route} overflow`).toBeLessThanOrEqual(layout.viewport);
      expect(layout.missing).toEqual([]);
      expect(layout.smallest).toBeGreaterThanOrEqual(16);
      if (width === 390 || width === 1440) {
        const scan = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
        expect(scan.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) })), route).toEqual([]);
        await mkdir(screenshots, { recursive: true });
        const name = route === '/' ? 'home' : route.replace(/^\/|\/$/g, '').replaceAll('/', '-');
        await page.screenshot({ path: `${screenshots}/${name}-${width === 390 ? 'mobile' : 'desktop'}.png`, fullPage: true });
        if (route === '/') await page.screenshot({ path: `${screenshots}/home-${width === 390 ? 'mobile' : 'desktop'}-viewport.png` });
      }
    }
    expect(errors).toEqual([]); expect(failed).toEqual([]);
  });
}

test('mobile menu is keyboard usable and Escape restores focus', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const menu = page.locator('.mobile-menu summary');
  await menu.focus(); await page.keyboard.press('Enter');
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
  await page.keyboard.press('Tab'); await expect(page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link').first()).toBeFocused();
  await page.keyboard.press('Escape'); await expect(menu).toBeFocused();
  await expect(page.locator('.mobile-menu')).not.toHaveAttribute('open');
});

test('contact validates input, prepares an unsent draft and resets stale results', async ({ page }) => {
  await page.goto('/contact/?service=recording');
  await expect(page.getByLabel('What do you need?')).toHaveValue('recording');
  await page.getByRole('button', { name: 'Prepare my email' }).click();
  await expect(page.locator('#brief-result')).toBeHidden();
  await page.getByLabel('Your name').fill('Alex Example');
  await page.getByLabel('Your email').fill('alex@example.com');
  await page.getByLabel('Tell us about your project').fill('A test brief with <script>alert(1)</script> & a website question.');
  const submissions = [];
  page.on('request', request => { if (request.method() !== 'GET') submissions.push(request.url()); });
  await page.getByRole('button', { name: 'Prepare my email' }).click();
  await expect(page.locator('#brief-result')).toBeVisible();
  await expect(page.locator('#draft-text')).toBeFocused();
  await expect(page.locator('#draft-text')).toContainText('<script>alert(1)</script>');
  const href = await page.locator('#draft-link').getAttribute('href');
  expect(new URL(href).pathname).toBe('info@legacymusicgroup.com');
  expect(new URL(href).searchParams.get('subject')).toContain('A recording session');
  expect(submissions).toEqual([]);
  await page.getByLabel('Tell us about your project').fill('Updated brief');
  await expect(page.locator('#brief-result')).toBeHidden();
});

test('clipboard denial has an accessible copy fallback', async ({ page }) => {
  await page.addInitScript(() => Object.defineProperty(navigator, 'clipboard', { value: { writeText: async () => { throw new Error('Permission denied'); } } }));
  await page.goto('/contact/');
  await page.getByLabel('Your name').fill('Alex Example'); await page.getByLabel('Your email').fill('alex@example.com'); await page.getByLabel('Tell us about your project').fill('Help with a website.');
  await page.getByRole('button', { name: 'Prepare my email' }).click();
  await page.getByRole('button', { name: 'Copy brief' }).click();
  await expect(page.locator('#copy-status')).toContainText('Select and copy');
  await expect(page.locator('#draft-text')).toBeFocused();
});

test('FAQ disclosure works and is exposed to assistive technology', async ({ page }) => {
  await page.goto('/faq/');
  const summary = page.locator('.faq-list summary').first(); await summary.focus(); await page.keyboard.press('Enter');
  await expect(page.locator('.faq-list details').first()).toHaveAttribute('open');
  await expect(page.locator('.faq-list details').first().locator('p')).toBeVisible();
});

test('core content, navigation and contact work with JavaScript disabled', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, baseURL, viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto('/'); await expect(page.locator('h1')).toContainText('Your legacy');
  await page.locator('.mobile-menu summary').click(); await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Contact' }).click();
  await expect(page.getByRole('heading', { name: 'Email works, too.' })).toBeVisible();
  await expect(page.locator('main a[href="mailto:info@legacymusicgroup.com"]').first()).toBeVisible();
  await context.close();
});

test('missing paths return real 404 and historical studio paths have honest handoff', async ({ request }) => {
  const missing = await request.get('/this-page-does-not-exist/'); expect(missing.status()).toBe(404); expect(await missing.text()).toContain('Legacy Music Group');
  const old = await request.get('/booking', { maxRedirects: 0 }); expect(old.status()).toBe(302); expect(old.headers().location).toContain('/book/');
});

test('studio identity, security headers and asset cache rules are present', async ({ request }) => {
  const home = await request.get('/');
  expect(home.headers()['x-robots-tag']).toContain('noindex');
  expect(home.headers()['content-security-policy']).toContain("form-action 'none'");
  expect(home.headers()['x-content-type-options']).toBe('nosniff');
  const release = await request.get('/release.json');
  expect((await release.json()).siteId).toBe('d04515bf-0eb2-45ae-b71b-2a08dc92391a');
  expect(release.headers()['cache-control']).toContain('no-store');
});

test('200 percent magnification reflows content and preserves contact access', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  for (const route of ['/', '/services/recording/', '/contact/']) {
    await page.goto(route);
    await page.evaluate(() => { document.documentElement.style.zoom = '2'; });
    const size = await page.evaluate(() => ({ content: document.documentElement.scrollWidth, viewport: document.documentElement.clientWidth }));
    expect(size.content, route).toBeLessThanOrEqual(size.viewport);
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('footer a[href="mailto:info@legacymusicgroup.com"]')).toBeVisible();
  }
});

test('booking uses the studio destination and contact never uses agency details', async ({ page }) => {
  await page.goto('/book/');
  await expect(page.locator('main .booking-handoff')).toHaveAttribute('href', 'https://legacymusicgroup.com/service-plus/');
  await expect(page.locator('main')).toContainText('does not reserve a time');
  await page.goto('/contact/');
  await expect(page.locator('main')).not.toContainText('Little Fight');
  await expect(page.locator('main a[href="mailto:info@legacymusicgroup.com"]').first()).toBeVisible();
});
