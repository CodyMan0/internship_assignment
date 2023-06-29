/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				main: "#03006E",
				background: "#FFF9EF",
				beige: "#FAF0E1",
				lightGray: "#D9D9D9",
				gray: "#999",
				success: "#4785FF",
				fail: "#ff3131",
				white: "#fff",
			},
			spacing: {
				28: "7rem",
			},
			letterSpacing: {
				tighter: "-.04em",
			},
			lineHeight: {
				tight: 1.2,
			},
			fontSize: {
				"5xl": "2.5rem",
				"6xl": "2.75rem",
				"7xl": "4.5rem",
				"8xl": "6.25rem",
			},
		},
	},
	plugins: [],
};
