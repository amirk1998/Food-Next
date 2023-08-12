'use client';

import estedadFont from '@/constants/localFonts';

export default function RootLayout({ children }) {
  return (
    <html lang='fa' dir='rtl'>
      <body className={`${estedadFont.variable} font-sans`}>{children}</body>
    </html>
  );
}
