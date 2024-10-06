import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div id="content-page" className="content-page">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
