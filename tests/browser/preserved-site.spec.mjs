import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { readdir, mkdir } from 'node:fs/promises';
import path from 'node:path';
const entries=await readdir('dist',{recursive:true,withFileTypes:true});
const routes=entries.filter(e=>e.isFile()&&e.name==='index.html').map(e=>'/'+path.relative('dist',e.parentPath).replaceAll(path.sep,'/')).sort();
const sampled=['/','/studio','/services','/pricing','/engineers','/contact'];
const shots=process.env.QA_SCREENSHOTS || '../screenshots/preserved-local';
for(const width of [390,1440]) test(`original routes render at ${width}px`,async({page})=>{
 await page.setViewportSize({width,height:width===390?844:1000});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 for(const route of routes){
  const response=await page.goto(route,{waitUntil:'load'});expect(response.status(),route).toBe(200);
  await expect(page.locator('h1'),route).toHaveCount(1);
  await expect(page.locator('h1'),route).not.toBeEmpty();
  await page.evaluate(()=>document.fonts.ready);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),route).toBe(true);
  if(sampled.includes(route)){
   const scan=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();expect(scan.violations,route).toEqual([]);
   await page.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=700){scrollTo(0,y);await new Promise(r=>setTimeout(r,35));}scrollTo(0,0);});
   await page.waitForTimeout(200);
   await mkdir(shots,{recursive:true});
   const name=route==='/'?'home':route.slice(1);const device=width===390?'mobile':'desktop';
   await page.screenshot({path:path.join(shots,`${name}-${device}.png`),fullPage:true});
   if(route==='/')await page.screenshot({path:path.join(shots,`home-${device}-viewport.png`)});
  }
 }
 expect(routes).toHaveLength(35);expect(errors).toEqual([]);
});
for(const width of [320,768,1024])test(`original homepage reflows at ${width}px`,async({page})=>{
 await page.setViewportSize({width,height:900});await page.goto('/');
 await expect(page.getByRole('heading',{name:'Record Your Legacy',exact:true})).toBeVisible();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBe(true);
});
test('mobile menu supports keyboard focus, Tab wrapping and Escape',async({page})=>{
 await page.setViewportSize({width:390,height:844});await page.goto('/');
 const toggle=page.getByRole('button',{name:'Toggle menu'});await toggle.focus();await page.keyboard.press('Enter');
 await expect(toggle).toHaveAttribute('aria-expanded','true');
 const panel=page.locator('#legacy-mobile-navigation');await expect(panel.locator('a').first()).toBeFocused();
 await panel.locator('a').last().focus();await page.keyboard.press('Tab');await expect(toggle).toBeFocused();
 await page.keyboard.press('Shift+Tab');await expect(panel.locator('a').last()).toBeFocused();
 await page.keyboard.press('Escape');await expect(toggle).toHaveAttribute('aria-expanded','false');await expect(toggle).toBeFocused();
});
test('mobile home link closes the open menu without changing its design',async({page})=>{
 await page.setViewportSize({width:390,height:844});await page.goto('/contact');await page.getByRole('button',{name:'Toggle menu'}).click();
 await page.getByRole('link',{name:'Legacy Music Group home'}).click();
 await expect(page.getByRole('heading',{name:'Record Your Legacy',exact:true})).toBeVisible();
 await expect(page.getByRole('button',{name:'Toggle menu'})).toHaveAttribute('aria-expanded','false');
});
test('booking and contact remain actual studio handoffs',async({page})=>{
 await page.goto('/contact');
 await expect(page.getByRole('link',{name:'Open contact page',exact:true})).toHaveAttribute('href','https://legacymusicgroup.com/contacts/');
 await expect(page.getByRole('link',{name:'Open booking page',exact:true})).toHaveAttribute('href','https://legacymusicgroup.com/service-plus/');
 expect(await page.locator('a[href="mailto:info@legacymusicgroup.com"]').count()).toBeGreaterThan(0);
 await expect(page.locator('form')).toHaveCount(0);
});
test('FAQ and keyboard skip link work',async({page})=>{
 await page.goto('/faq');await page.keyboard.press('Tab');await expect(page.getByRole('link',{name:'Skip to main content'})).toBeFocused();
 await page.keyboard.press('Enter');await expect(page.locator('main')).toBeFocused();
 const first=page.locator('details').first();await first.locator('summary').click();await expect(first).toHaveAttribute('open','');
 await expect(first.locator('p')).toBeVisible();
});
test('analytics remains off on this host after consent and navigation',async({page})=>{
 const tracking=[];page.on('request',r=>{if(/googletagmanager|google-analytics|connect\.facebook|facebook\.com\/tr/.test(r.url()))tracking.push(r.url());});
 await page.goto('/');await page.getByRole('button',{name:'Allow analytics',exact:true}).click();await page.goto('/services');
 await expect(page.locator('h1')).toBeVisible();expect(tracking).toEqual([]);
});
test('original entrance and pinned gallery motion remain enabled',async({page})=>{
 await page.emulateMedia({reducedMotion:'no-preference'});await page.goto('/');
 await expect(page.locator('.hero-headline')).toHaveCSS('opacity','1',{timeout:8000});
 await expect(page.locator('.pin-spacer')).toHaveCount(1);
 await expect(page.locator('.hero-headline')).toHaveText('Record Your Legacy');
});
test('false search metadata is removed without changing visible content',async({page})=>{
 await page.goto('/');await expect(page.locator('#jsonld-home-website')).toBeAttached();
 const schema=JSON.parse(await page.locator('#jsonld-home-website').textContent());
 expect(schema.name).toBe('Legacy Music Group');expect(schema.potentialAction).toBeUndefined();
});
test('deep links, historical aliases, real 404 and noindex headers survive',async({request})=>{
 const missing=await request.get('/not-a-real-legacy-page');expect(missing.status()).toBe(404);
 const old=await request.get('/engineers/1',{maxRedirects:0});expect(old.status()).toBe(301);expect(old.headers().location).toContain('/engineers/matthew');
 const deep=await request.get('/blog/inside-legacy-studio/');expect(deep.status()).toBe(200);expect(await deep.text()).toMatch(/src="\/assets\/index-/);
 expect(deep.headers()['x-robots-tag']).toContain('noindex');expect(deep.headers()['x-content-type-options']).toBe('nosniff');
});
