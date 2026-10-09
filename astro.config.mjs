import { defineConfig } from 'astro/config';

export const previewOrigin = process.env.SITE_ORIGIN || 'https://lfnyc-audit-2026-10-09--legacy-music-group.netlify.app';
const parsed = new URL(previewOrigin);
if (parsed.protocol !== 'https:' || !parsed.hostname.endsWith('--legacy-music-group.netlify.app') || parsed.pathname !== '/') {
  throw new Error('This candidate must use an explicit HTTPS draft origin for legacy-music-group. Production is not enabled.');
}

export default defineConfig({
  site: previewOrigin,
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  build: { inlineStylesheets: 'never' },
  vite: { build: { sourcemap: false } },
});
