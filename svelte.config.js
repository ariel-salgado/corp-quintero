import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	kit: {
		adapter: adapter({
			fallback: 'index.html',
			precompress: true,
			strict: true
		}),
		alias: {
			$src: './src',
			$utils: './src/utils'
		},
		prerender: {
			enabled: true
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
