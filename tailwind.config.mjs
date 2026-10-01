/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Clean warm-white main background
        paper: '#FCFBF8',
      
        // Soft blue-gray sidebar
        panel: '#EEF2F3',
      
        // Pale blue active navigation / project backgrounds
        highlight: '#E3EEF0',
      
        // Deep navy-purple headings
        ink: '#1D1830',
      
        // Softer slate body text
        muted: '#5B6072',
      
        // Stronger teal accent
        accent: '#2F9FB3',
      
        // Soft accent badge
        badge: '#DCEFF2',
      
        // Subtle borders
        line: '#DDE3E5',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      borderRadius: {
        xl2: '1rem',
      },
    },
  },
  plugins: [],
};
