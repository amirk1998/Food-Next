'use client';

import estedadFont from '@/constants/localFonts';
import './globals.css';

import NavBar from './Header';
import Footer from './Footer';
import Providers from './Providers';

export default function RootLayout({ children }) {
  return (
    <html lang='fa' dir='rtl'>
      <head>
        <title>Create Next App</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body id='__next' className={`${estedadFont.variable} font-sans`}>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
