/** @type {import('tailwindcss').Config} */

/* 
When using Tailwind UI components, modify them like this:
- Replace default grays/indigos with mocha, blush, or rose
- Add font-serif to headings, and optionally font-script for intimate or romantic details
- Use soft shadows and high rounded-xl or rounded-2xl for buttons/cards
- Use ample white space and padding (py-16, gap-10, etc.)
- Accent interactive elements (buttons, focus rings) with gold or plum
*/

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1.2s ease-out forwards',
      },
      colors: {
        blush: '#fdf4f5',           // background light pink
        rose: '#e8cfcf',            // secondary soft rose
        mocha: '#4a3b36',           // dark brown/black for text
        lace: '#fffafc',            // off white, soft
        gold: '#c9a66b',            // accent (matching hardware/ribbon tones)
        plum: '#5a3d47',            // deep romantic alt
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'], // Elegant headlines
        body: ['"Inter"', 'sans-serif'],         // Clean body text
        script: ['"Dancing Script"', 'cursive']  // Optional accents (e.g., "intimates")
      },
      borderRadius: {
        DEFAULT: '1rem',           // soft, rounded corners
        xl: '2rem',
      },
      boxShadow: {
        soft: '0 4px 30px rgba(0, 0, 0, 0.05)',
        subtle: '0 2px 8px rgba(74, 59, 54, 0.1)',
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide"),],
  daisyui: {
    themes: [
      {
        afterhours: {
          primary: "#5a3d47",     // plum
          secondary: "#e8cfcf",   // rose
          accent: "#c9a66b",      // gold
          neutral: "#4a3b36",     // mocha
          "base-100": "#fdf4f5",  // blush background
          info: "#a5a5d7",
          success: "#a3e635",
          warning: "#facc15",
          error: "#f87171",
        },
      },
      "light", // fallback themes
      "dark"
    ],
  },
};