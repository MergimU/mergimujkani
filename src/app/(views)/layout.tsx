import BackgroundAnimation from '../_components/BackgroundAnimation';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BackgroundAnimation />
      {children}
    </>
  );
}
