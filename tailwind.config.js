// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          primary: '#3692FF',
          secondary: '#F9FAFB',
        },
      },
    },
  },
  plugins: [],
};
