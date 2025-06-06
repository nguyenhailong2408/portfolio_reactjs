/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
      },
      keyframes: {
        drawTopLeft: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        drawBottomRight: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        drawTopLeft: 'drawTopLeft 1.5s forwards ease',
        drawBottomRight: 'drawBottomRight 1.5s forwards ease',
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
      },
      transformOrigin: {
        'top-left': 'top left',
        'bottom-right': 'bottom right',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
