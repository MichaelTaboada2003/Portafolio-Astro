/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
	  extend: {
		keyframes: {
		  slideInRight: {
			from: {
			  opacity: '0',
			  transform: 'translateX(-50px)',
			},
			to: {
			  opacity: '1',
			  transform: 'translateX(0)',
			},
		  },
		},
		animation: {
		  slideInRight: 'slideInRight 1.5s ease-out forwards',
		},
	  },
	},
	plugins: [],
  }
  
