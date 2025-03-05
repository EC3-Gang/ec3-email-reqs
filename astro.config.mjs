// @ts-check
import { defineConfig } from 'astro/config';

import alpinejs from '@astrojs/alpinejs';
import vue from '@astrojs/vue';
import icon from 'astro-icon';

import node from '@astrojs/node';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://email-req.ec3.dev',
	output: 'server',
	integrations: [
		alpinejs({
			entrypoint: 'src/alpine',
		}),
		vue(),
		icon(),
	],
	adapter: node({
		mode: 'standalone',
	}),
	security: {
		checkOrigin: false,
		checkOrigin: false,
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
