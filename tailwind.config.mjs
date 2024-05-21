/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "flowbite.content()",
  ],
  theme: {
    extend: {},
    colors: {
      main: "#542BA4",
    },
    fontFamily: {
      normal: ["Poppins", "sans-serif"],
      highlight: ["Barlow Semi Condensed", "sans-serif"],
    },
  },
  plugins: ["flowbite.plugin()"],
};
