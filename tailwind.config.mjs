/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          text: 'rgb(var(--text-primary))',
        },
        secondary: {
          text: 'rgb(var(--text-secondary))',
        },
        accent: 'rgb(var(--accent))',
      },
    },
  },
  plugins: [],
};
