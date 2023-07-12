import LocalFont from 'next/font/local';
const estedadFont = LocalFont({
  src: [
    {
      path: '../../public/fonts/estedad/Estedad-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/estedad/Estedad-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/estedad/Estedad-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/estedad/Estedad-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/estedad/Estedad-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/estedad/Estedad-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/estedad/Estedad-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/estedad/Estedad-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/estedad/Estedad-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-estedad',
  style: 'normal',
  display: 'block',
});

export default estedadFont;
