/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

// function withOpacity(variableName) {
//   return ({ opacityValue }) => {
//     if (opacityValue !== undefined) {
//       return `rgba(var(${variableName}), ${opacityValue})`;
//     }
//     return `rgb(var(${variableName}))`;
//   };
// }

module.exports = {
  // corePlugins: {
  //   preflight: false,
  // },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // important: '#__next',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-estedad)', ...fontFamily.sans],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
