module.exports = {
  // purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        goldendark: {
          DEFAULT: '#E6DACE'
        },
        goldenlight: {
          DEFAULT: '#F4ECE6'
        },
        blueaccent: {
          DEFAULT: '#0050FF'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
