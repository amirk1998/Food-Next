/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  // corePlugins: {
  //   preflight: false,
  // },
  content: [
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-react/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // important: '#__next',
  theme: {
    extend: {
      colors: {
        primary: {
          800: withOpacity('--color-primary-800'),
          700: withOpacity('--color-primary-700'),
          600: withOpacity('--color-primary-600'),
          500: withOpacity('--color-primary-500'),
          400: withOpacity('--color-primary-400'),
          300: withOpacity('--color-primary-300'),
          200: withOpacity('--color-primary-200'),
          100: withOpacity('--color-primary-100'),
        },
        secondary: {
          900: withOpacity('--color-secondary-900'),
          800: withOpacity('--color-secondary-800'),
          700: withOpacity('--color-secondary-700'),
          600: withOpacity('--color-secondary-600'),
          500: withOpacity('--color-secondary-500'),
          400: withOpacity('--color-secondary-400'),
          300: withOpacity('--color-secondary-300'),
          200: withOpacity('--color-secondary-200'),
          100: withOpacity('--color-secondary-100'),
        },
        shade: {
          700: withOpacity('--color-shade-700'),
          600: withOpacity('--color-shade-600'),
          500: withOpacity('--color-shade-500'),
          400: withOpacity('--color-shade-400'),
          300: withOpacity('--color-shade-300'),
          200: withOpacity('--color-shade-200'),
          100: withOpacity('--color-shade-100'),
        },
        success: withOpacity('--color-success'),
        successLight: withOpacity('--color-success-light'),
        successExtraLight: withOpacity('--color-success-extraLight'),

        error: withOpacity('--color-error'),
        errorLight: withOpacity('--color-error-light'),
        errorExtraLight: withOpacity('--color-error-extraLight'),

        warning: withOpacity('--color-warning'),
        warningLight: withOpacity('--color-warning-light'),
        warningExtraLight: withOpacity('--color-warning-extraLight'),

        background: withOpacity('--background-app-rgb'),
      },
      fontFamily: {
        sans: ['var(--font-estedad)', ...fontFamily.sans],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
