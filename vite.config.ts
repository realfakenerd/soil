import { sveltekit } from '@sveltejs/kit/vite';
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import lightningcss from 'vite-plugin-lightningcss';

export default defineConfig({
	plugins: [
		sveltekit(),
		lightningcss({
			targets: browserslistToTargets(browserslist('last 2 versions, not dead'))
		}),
		viteCompression({
			algorithm: 'brotliCompress',
			verbose: false,
			threshold: 512,
			compressionOptions: {
				level: 3
			}
		})
	],
	build: {
		cssMinify: 'esbuild',
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				arrows: true,
				dead_code: true,
				drop_debugger: true,
				pure_getters: true,
				keep_infinity: true,
				ie8: false
			},
			module: true,
			parse: {
				html5_comments: false
			},
			output: {
				comments: false
			},
			ecma: 2020,
			ie8: false,
			mangle: true,
			safari10: false
		}
	}
});
