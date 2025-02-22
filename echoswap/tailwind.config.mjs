/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
	  extend: {
		colors: {
		  primary: "#03045E",
		  secondary: "#023E8A",
		  accent: "#0077B6",
		  highlight: "#0096C7",
		  background: "#CAF0F8",
		},
	  },
	},
	plugins: [],
  };
  