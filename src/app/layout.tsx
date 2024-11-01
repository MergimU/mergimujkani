import type { Metadata } from 'next';
import './globals.css';
import '@/app/styles/index.scss';

export const metadata: Metadata = {
  title: 'Mergim Ujkani',
  description: 'My name is Mergim Ujkani, a Front-End Engineer from Kosovo ✋',
  keywords:
    'Front-End Engineer, Software Engineer, React, React Native, NextJS, Styled Components, CSS, SCSS, VueJS, UI, Front End, Web Developer, Front End Web Developer, Website, Web-app, SVG, Animations, Responsive, Web Design, Codepen, Netlify',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link
          rel='manifest'
          href='/favicon/site.webmanifest'
        />
        <link
          rel='mask-icon'
          href='/favicon/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <meta
          name='msapplication-TileColor'
          content='#da532c'
        />
        <meta
          name='theme-color'
          content='#ffffff'
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
