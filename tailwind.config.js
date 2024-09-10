/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jua: ['Jua', 'sans-serif'] // Jua 폰트 추가
      },
      colors: {
        customPink: {
          light: '#ff66e0',
          DEFAULT: '#fe00d2',
          dark: '#c000a1'
        },
        customBlue: {
          light: '#66d8f0',
          DEFAULT: '#02acd9',
          dark: '#00799d'
        },
        customYellow: {
          light: '#fce957',
          DEFAULT: '#fae813',
          dark: '#c6b200'
        }
      }
    }
  },
  plugins: []
};
