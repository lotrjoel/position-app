import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        paths: {
            // Only set the base path if not in development mode
            base: dev ? '' : '/position-app', // Replace 'position-app' with your actual repository name
        },
        prerender: {
            entries: ['/', '/about', '/gameplay', '/scoreboard'], // Ensure all routes are listed here
        }
    },
    preprocess: vitePreprocess(),
};

export default config;