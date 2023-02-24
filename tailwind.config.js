module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Inter',
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '70%',
      '16': '4rem',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    colors: {
      orange: {
        DEFAULT: '#F4A574',
        100: '#FFEFE5',
        200: '#FFB081',
        hover: '#FF9454',
      },
      green: {
        DEFAULT: '#258675',
        100: '#D4EEE9',
        200: '#94CAC0',
        300: '#45A090',
      },
      yellow: '#EDC988',
      pink: {
        DEFAULT: 'FF7D6B',
        100: '#FFE9E4',
        200: '#FEAEA3',
      },
      heading: '#2b2b2b',
      paragraph: '#584F49',
      grey: '#565656',
      stroke: {
        1: '#B0B4C0',
        2: '#CFCFCF',
        3: '#F4F5F7',
      },
      section: '#F5F6F9',
      shape: '#E8EEF0',
      white: '#FFFFFF',
      transparent: 'transparent',
    },
    extend: {
      backgroundImage: {
        contour: "url('/src/assets/img/hero/bg.png')",
        thumb1: "url('/src/assets/img/videos/thumb1.png')",
        thumb2: "url('/src/assets/img/videos/thumb2.png')",
        thumb3: "url('/src/assets/img/videos/thumb3.png')",
        thumb4: "url('/src/assets/img/videos/thumb4.png')",
        fashion1: "url('/src/assets/img/collect/fashion1.png')",
        fashion2: "url('/src/assets/img/collect/fashion2.png')",
        // contact: "url('/src/assets/img/contact/bg.png')",
      },
      boxShadow: {
        primary: '0px 18px 36px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
