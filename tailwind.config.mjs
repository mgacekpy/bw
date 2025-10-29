/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/layouts/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/sections/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',  
  ],
  theme: {
    extend: {
      colors: {
        'background': '#111111',
        'surface': '#1E1E1E',
        'primary': '#E2E2E2',
        'secondary': '#A1A1A1',
        'accent-start': '#3B82F6',
        'accent-end': '#8B5CF6',
      },
    },
  },
  plugins: [],
}