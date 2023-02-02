const _ = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    spacing: {
      3: '0.5rem',
      10: '1.5rem',
      13: '2.813rem',
    },
    fontFamily: {
      sans: [
        'Pretendard',
        '"Noto Sans KR"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        '"Fira Sans"',
        '"Droid Sans"',
        '"Helvetica Neue"',
        '"Malgun Gothic"',
        'sans-serif',
      ],
    },
    fontSize: {
      lg: ['1.5rem', {
        lineHeight: '1.813rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }],
    },
    colors: {
      white: {
        100: '#ffffff',
      },
      gray: {
        300: '#e9e9e9',
        500: '#b5b5b5',
      },
      blue: {
        300: '#5191b6',
        500: '#00a3ff',
        900: '#0500ff',
      },
    },
    dropShadow: {
      elevated: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      activated: '0px 0px 4px 1px #0500FF',
    },
    borderRadius: {
      full: '9999px',
    },
    extend: {},
  },
  plugins: [],
};

module.exports = _;
