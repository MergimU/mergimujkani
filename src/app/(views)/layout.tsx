// import BackgroundAnimation from '../_components/BackgroundAnimation';
import Navigation from '../_components/Navigation';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />
      {/* <BackgroundAnimation /> */}
      {children}
    </>
  );
}
