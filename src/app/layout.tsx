import type { Metadata } from "next";
import "./globals.css";
import '@/app/styles/index.scss';

export const metadata: Metadata = {
  title: "Mergim Ujkani",
  description: "My name is Mergim Ujkani, a Software Engineer from Kosovo ✋",
  keywords: "Software Engineer, React, React Native, NextJS, Styled Components, CSS, SCSS, VueJS, UI, Front End, Web Developer, Front End Web Developer, Website, Web-app, SVG, Animations, Responsive, Web Design, Codepen, Netlify"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
