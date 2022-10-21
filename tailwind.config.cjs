/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				lightprimary: 'rgb(var(--light-primary) / <alpha-value>)',
				lightsecondary: 'rgb(var(--light-secondary) / <alpha-value>)',
				darkprimary: 'rgb(var(--dark-primary) / <alpha-value>)',
				darksecondary: 'rgb(var(--dark-secondary) / <alpha-value>)',
				neutralorange: 'rgb(var(--orange-neutral) / <alpha-value>)',
				lightorange: 'rgb(var(--orange-light) / <alpha-value>)',
				darkorange: 'rgb(var(--orange-dark;) / <alpha-value>)',
				neutralgreen: 'rgb(var(--green-neutral) / <alpha-value>)',
				lightgreen: 'rgb(var(--green-light) / <alpha-value>)',
				darkgreen: 'rgb(var(--green-dark;) / <alpha-value>)',
				neutralyellow: 'rgb(var(--yellow-neutral) / <alpha-value>)',
				lightyellow: 'rgb(var(--yellow-light) / <alpha-value>)',
				darkyellow: 'rgb(var(--yellow-dark) / <alpha-value>)',
				neutralblue: 'rgb(var(--blue-neutral) / <alpha-value>)',
				lightblue: 'rgb(var(--blue-light) / <alpha-value>)',
				darkblue: 'rgb(var(--blue-dark) / <alpha-value>)'
			},
			fontFamily: {
				josefin: "'Josefin Sans', sans-serif"
			}
		}
	},
	plugins: []
};
