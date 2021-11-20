module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dashboard: {
          light: '#313541',
          dark: '#282C37',
          blue: '#72CDD2',
        },
        light: {
          50: '#F4F7FA',
          100: '#FEFEFE',
          200: '#8298A0',
          300: '#768B94',
          button: '#A9ABAF',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
