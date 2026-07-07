import adapterAuto from '@sveltejs/adapter-auto';
import adapterStatic from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapterStatic({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',   // SPA mode for GitHub Pages
			precompress: false,
			strict: false
		}),
		paths: {
			base: dev ? '' : '/cv'     // important for GitHub Pages project site
		}
	}
};

export default config;
