import React from 'react';
import Header from './Header';
import Footer from './Footer';

type props = {
  children: JSX.Element;
};
const Layout = ({ children }:props) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
