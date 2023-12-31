/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./node_modules/nrsystemtools/dist/vite/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				gray: colors.zinc,
			},
		},
	},
	plugins: [],
}
