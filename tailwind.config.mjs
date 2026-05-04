/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Country club palette — keep these stable; tune via tokens here.
        fairway: {
          DEFAULT: '#0B3D2E', // primary deep green
          dark: '#072A20',
          light: '#0F4F3C',
          mist: '#1A6048',
        },
        cream: {
          DEFAULT: '#FAF7F0',
          deep: '#F5EFE2',
          paper: '#FBF8F2',
        },
        charcoal: {
          DEFAULT: '#1A1A1A',
          soft: '#2A2A2A',
          muted: '#52525B',
        },
        gold: {
          DEFAULT: '#C9A961',
          soft: '#D9BC78',
          deep: '#A68744',
        },
      },
      fontFamily: {
        // Loaded via @import in global.css.
        display: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.32em',
      },
      boxShadow: {
        card: '0 1px 2px rgba(11, 61, 46, 0.04), 0 8px 24px -12px rgba(11, 61, 46, 0.18)',
        'card-hover': '0 2px 4px rgba(11, 61, 46, 0.06), 0 18px 40px -16px rgba(11, 61, 46, 0.28)',
        gold: '0 0 0 1px rgba(201, 169, 97, 0.45)',
      },
      backgroundImage: {
        'fairway-grain':
          'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        grain: '4px 4px',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.9s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
