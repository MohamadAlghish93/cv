import adapterAuto from '@sveltejs/adapter-auto';
import adapterStatic from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapterStatic({
			// this folder will be committed to your Pages branch
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: false
		}),

		// IMPORTANT: base path for GitHub Pages project site
		paths: {
			base: dev ? '' : '/cv'   // 'cv' must match repo name
		},

		// Ensure everything is pre-rendered as static HTML
		prerender: {
			default: true
		}
	}
};

export default config;
