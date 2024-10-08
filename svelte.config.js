// import adapter from "@sveltejs/adapter-auto";
// import adapter from "@sveltejs/adapter-netlify";
import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({}),
    },

    vite: {
        optimizeDeps: {
            include: ["lodash.get", "lodash.isequal", "lodash.clonedeep"],
        },
    },
};

export default config;
