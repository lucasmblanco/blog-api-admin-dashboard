/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        newsreader: ['var(--font-newsreader)']
      },
      colors: {
        beige: 'hsl(32, 45%, 76%)',
        'light-beige': 'hsla(32, 45%, 95%, 1)',
        'black-brown': 'hsl(300, 3%, 12%)',
        tan: 'hsl(31, 65%, 65%)',
        'light-brown': 'hsl(300, 5%, 17%)',
        'light-yellow': 'hsl(25, 75%, 97%)',
        'soft-brown': 'hsl(300, 2%, 40%)',
        crimson: 'hsl(348, 83%, 47%)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [require('tailwindcss-animated'), require('@tailwindcss/forms')]
};
