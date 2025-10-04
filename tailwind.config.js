/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#faf8f5',
          100: '#f0ebe3',
          200: '#ddd3c4',
          300: '#c9b8a1',
          400: '#b39b7d',
          500: '#9d7f5e',
          600: '#8a6b4a',
          700: '#6f563d',
          800: '#5a4532',
          900: '#453629',
        },
        terracotta: {
          50: '#fdf6f3',
          100: '#f9e5dc',
          200: '#f4cbb9',
          300: '#eca788',
          400: '#e38360',
          500: '#d96742',
          600: '#c45135',
          700: '#a1402d',
          800: '#83362a',
          900: '#6b3027',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
