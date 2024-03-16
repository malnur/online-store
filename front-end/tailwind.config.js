/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        primary: '#114e46',
        secondary: '#baac6f',
        neutral: '#efdad2',
        highlight: '#efdad2',
        green: '#77a464',
        gray: '#f6f8f8',
        red: {
          DEFAULT: '#edd7d7',
          dark: '#a94442'
        },
        disable: {
          DEFAULT: '#e1e1e1',
          dark: '#949494'
        }
      }
    }
  },
  plugins: []
}
