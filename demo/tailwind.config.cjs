/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"~/src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
	],
	theme: {
		fontFamily: {
			Estedad: ["Estedad"],
			"Estedad-EN": ["Estedad-EN"],
			Pelak: ["Pelak"],
		},
		extend: {
			animation: {
				"move-left": "marquee 30s infinite linear;",
			},
			keyframes: {
				marquee: {
					"0%": { transform: "translate3d(0, 0, 0)" },
					"100%": { transform: "translate3d(0, -1500px, 0);" },
				},
			},
		},
	},
}
