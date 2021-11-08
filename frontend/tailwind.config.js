const personalizationColor = '#C0C0C0';
const personalizationColorDarker = 'rgb(134,134,134)'

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bottle: {
          green: '#4E6636',
          turquoise: '#72F2E5',
          lilac: '#E6ACE6',
          hotpink: '#FF4AA1',
          black: '#000000',
          blue: '#3B82F6',
          white: '#FFFFFF',
        },
        personalization: {
          'standard': personalizationColor,
          'dark': personalizationColorDarker,
        },
        bottleBg: {
          black: '#4b4b4b',
          blue: '#4fa3da',
          green: '#607464',
          hotpink: '#fb87a9',
          lilac: '#d6c5db',
          turquoise: '#c5dad7',
          white: '#d7d7d7',
          },
      },
      fill: {
        personalization: {
          'standard': personalizationColor,
          'dark': personalizationColorDarker,
        },
      },
      margin: {
        '22%': '22%',
        '15%': '15%',
        '12%': '12%'
      },
      fontFamily: {
        'sans': ['"Modern Era"', 'system-ui', '-apple-system', '"Segoe UI"',
          'Roboto', 'Ubuntu', 'Cantarell', '"Noto Sans"', 'sans-serif']
      },
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      maxHeight: {
        '120': '30rem',
      },
      width: {
        '2/7': '28.5714286%',
      },
      height: {
        '120': '30rem',
        '160': '40rem',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        marquee2: 'marquee2 30s linear infinite',
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
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    themes: [
      'cupcake',
      'emerald'
    ],
    base: true,
    utils: true,
    logs: false,
    rtl: false,
  },
}
