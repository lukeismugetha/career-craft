/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          50: '#f5f7ff',
          100: '#e9efff',
          200: '#cfdbff',
          300: '#a2c2ff',
          400: '#6b97ff',
          500: '#345bff',
          600: '#2b4ed9',
          700: '#213aa6',
          800: '#172673',
          900: '#0c133f'
        },
        neon: {
          pink: '#ff4dce',
          purple: '#8f48ff',
          cyan: '#00f0ff',
        },
        surface: {
          DEFAULT: "#0b1220",
          muted: "#071021"
        }
      },
      boxShadow: {
        'neon-md': '0 10px 30px rgba(51,102,255,0.12), 0 0 30px rgba(143,72,255,0.06)',
      },
      keyframes: {
        floaty: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 6px rgba(143,72,255,0.08)' },
          '50%': { boxShadow: '0 0 18px rgba(143,72,255,0.22)' },
          '100%': { boxShadow: '0 0 6px rgba(143,72,255,0.08)' },
        }
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
