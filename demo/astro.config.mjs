import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import solid from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
import expressiveCode from "astro-expressive-code";
/** @type {import('astro-expressive-code').AstroExpressiveCodeOptions} */
const astroExpressiveCodeOptions = {
  // Example: Change the theme to "dracula"
  theme: 'dracula',
 
  
}

// https://astro.build/config
export default defineConfig({
  // Enable many frameworks to support all different kinds of components.
  integrations: [preact(), react(), svelte(), vue(), solid(), tailwind(),  expressiveCode(astroExpressiveCodeOptions),mdx()],
 output: 'hybrid',
});