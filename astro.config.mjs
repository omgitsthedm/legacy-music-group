import { defineConfig } from 'astro/config';

export const previewOrigin = process.env.SITE_ORIGIN || 'https://legacy-audit-2026-10-09--legacy-music-group.netlify.app';
const parsed = new URL(previewOrigin);
const production = process.env.RELEASE_MODE === 'production';
const approved = production && process.env.APPROVED_SITE_ID === 'd04515bf-0eb2-45ae-b71b-2a08dc92391a';
const allowedHost = production ? approved && parsed.hostname === 'legacy-music-group.netlify.app' : parsed.hostname.endsWith('--legacy-music-group.netlify.app');
if (parsed.protocol !== 'https:' || !allowedHost || parsed.pathname !== '/' || parsed.search || parsed.hash || parsed.port) {
  throw new Error('Use the explicit project draft origin. Production requires the exact approved site ID and existing Netlify production hostname.');
}

export default defineConfig({
  site: previewOrigin,
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  build: { inlineStylesheets: 'never' },
  vite: { build: { sourcemap: false, assetsInlineLimit: 0 } },
});
