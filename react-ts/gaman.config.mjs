import { defineConfig } from '@gaman/core';
import { ReactEngine, site } from '@gaman/site';
import autoprefixer from 'autoprefixer';

export default defineConfig({
	build: {
		rootdir: 'src',
		outdir: 'dist',
		includes: ['src/**/*.{ts,js,tsx,jsx,vue,css,sass,scss}'],
	},
	integrations: [
		site(ReactEngine, {
			postcss: [autoprefixer()],
		}),
	],
});
