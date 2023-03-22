'use client';
import './globals.css';

import Footer from '../src/components/layout/footer/footer';
import Header from '../src/components/layout/header/header';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='ru'>
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};
export default RootLayout;
