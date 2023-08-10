/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: 'hsl(229, 25%, 31%)',
        score: 'hsl(229, 64%, 46%)',
        outline: 'hsl(217, 16%, 45%)',
      },
      backgroundImage: {
        'bg-gr': 'linear-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
        'scissors-gr': 'linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
        'paper-gr': 'linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
        'rock-gr': 'linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
        'lizartd-gr': 'linear-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%))',
        'cyan-gr': 'linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%))',
      },
      fontFamily: {
        barlow: ['Barlow Semi Condensed', 'sans-serif', 'roboto'],
      },
    },
  },
  plugins: [],
};
