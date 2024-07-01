/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        secondary: ['Rubik', 'sans-serif']
      },
      colors: {
        main: '#6738ba',
        input: '#eeeced',
        warning: '#ffccd5',
        secondary: '#efebf9',
        profile: '#bf83ff'
      }
    }
  },
  plugins: []
}
