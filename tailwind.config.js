/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#2E3E31',      // Primary — ground (60%)
          tan: '#CEB08A',        // Secondary — signature (10%)
          cream: '#F4EFE6',      // Paper — surface (30%)
          ink: '#1A211C',        // Ink — text on cream
          stone: '#9C9080',      // Muted — captions, rules
          'tan-soft': 'rgba(206, 176, 138, 0.28)',
          'tan-line': 'rgba(206, 176, 138, 0.55)',
          'green-dark': '#1E2B21',
          'green-light': '#3A4D3D',
        }
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Archivo', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.28em',
        wider: '.18em',
        tightest: '-.02em',
      },
      maxWidth: {
        measure: '66ch',
      }
    },
  },
  plugins: [],
}
