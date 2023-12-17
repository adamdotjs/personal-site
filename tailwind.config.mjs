const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			base: {
				"03": "#002b36",
				"02": "#073642",
				"01": "#586e75",
				"00": "#657b83",
				0: "#839496",
				1: "#93a1a1",
				2: "#eee8d5",
				3: "#fdf6e3",
			},
			red: "#dc322f",
			orange: "#cb4b16",
			yellow: "#b58900",
			green: "#859900",
			cyan: "#2aa198",
			blue: "#268bd2",
			purple: "#6c71c4",
			violet: "#d33682",
		},
		extend: {
			fontFamily: {
				jetbrains: ["Jetbrains Mono", ...defaultTheme.fontFamily.mono],
			},
			keyframes: {
				blink: {
					"0%, 100%": { opacity: 1 },
					"50%": { opacity: 0 },
				},
			},
			animation: {
				blink: "blink 1s ease-in-out infinite",
			},
		},
	},
	plugins: [],
}
