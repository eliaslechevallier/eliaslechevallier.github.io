/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm off-white main background
        paper: '#F8F6F3',
        // Slightly darker warm gray for the sidebar
        panel: '#EAE5E1',
        // Beige highlight for the active nav item
        highlight: '#E4DED8',
        // Deep purple-black for headings
        ink: '#1F1330',
        // Muted gray-purple for body text
        muted: '#57516A',
        // Teal accent used for timeline dots / links
        accent: '#4CB3C9',
        // Soft pink used for small tag badges
        badge: '#F4A9CE',
        // Hairline borders/dividers
        line: '#DED7D0',
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
