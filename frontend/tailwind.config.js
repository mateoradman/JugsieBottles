module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['"Modern Era"', 'system-ui', '-apple-system', '"Segoe UI"',
        'Roboto', 'Ubuntu', 'Cantarell', '"Noto Sans"', 'sans-serif']
    },
    extend: {

      animation: {
        marquee: 'marquee 20s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': {transform: 'translateX(0%)'},
          '100%': {transform: 'translateX(-100%)'},
        },
        marquee2: {
          '0%': {transform: 'translateX(100%)'},
          '100%': {transform: 'translateX(0%)'},
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
