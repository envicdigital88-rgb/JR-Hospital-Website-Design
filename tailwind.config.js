export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        jr: {
          green: '#1F7A45',
          'green-dark': '#12522F',
          'green-soft': '#E9F3ED',
          red: '#B01229',
          'red-dark': '#5A1020',
          'red-soft': '#FBEBED',
          cream: '#FBF8F4',
          ink: '#16211C',
          muted: '#5B6B63',
          line: '#E2E8E4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'preloader-bar': {
          '0%': { width: '0%' },
          '60%': { width: '80%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'preloader-bar': 'preloader-bar 0.8s ease-out forwards',
      },
    },
  },
}
