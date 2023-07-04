/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#d8bfd8',
          secondary: '#6868ac',
          // Agrega más colores aquí
        },
        dark: {
          primary: '#1A202C',
          secondary: '#d8bfd8',
          // Agrega más colores aquí
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
