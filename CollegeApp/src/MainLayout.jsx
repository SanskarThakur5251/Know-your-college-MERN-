import React from 'react';
import Navbar from './PageElements/Navbar';
import Footer from './PageElements/Footer';
import Searchbar from './PageElements/Searchbar';


import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      
      
      <Outlet />

      <Footer />
    </div>
  );
};

export default MainLayout;
