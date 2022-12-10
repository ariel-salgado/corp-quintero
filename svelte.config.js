import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	kit: {
		adapter: adapter({
			out: 'build',
			precompress: true
		}),
		alias: {
			$src: './src',
			$utils: './src/utils',
			$build: './build'
		}
	},

	preprocess: [vitePreprocess()]
};

export default config;
