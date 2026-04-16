import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./PageElements/Navbar.jsx";
import Searchbar from "./PageElements/Searchbar.jsx";
import Notices from "./PageElements/Notices.jsx";
import Imageslider1 from "./PageElements/Imageslider1.jsx";
import Footer from "./PageElements/Footer.jsx";
import MainLayout from "./MainLayout.jsx";
import Home from "./PageElements/Home.jsx";
import WishlistPage from './PageElements/WishlistPage.jsx';
import Searchpage from "./PageElements/SearchPage.jsx";
import LoginPage from "./PageElements/LoginPage.jsx";
import SignUpPage from "./PageElements/SignUpPage.jsx";
import CollegePage from "./PageElements/CollegePage.jsx";
import ContactPage from "./PageElements/ContactSection.jsx";
import ToolsPage from "./PageElements/ToolsPage.jsx";

import ProtectedRoute from "./PageElements/ProtectRoute.jsx";
import AllNotices from "./PageElements/AllNotices.jsx";

export default function App() {
  return (
    <Routes>
      
      <Route path="/" element={<MainLayout />}>

        <Route index element={<Home />} />  
        {/* <Route path="/tools" element={<Compare />} /> */}
        <Route path="/wishlist" element={<ProtectedRoute><WishlistPage /></ProtectedRoute>} />
        <Route path="/colleges" element={<Searchpage />} />
        <Route path="/college/:id" element={<CollegePage />} />
        <Route path="/contactPage" element={<ContactPage />} />
        <Route path="/notices" element={<AllNotices/>} />
        <Route path="/tools" element={<ProtectedRoute><ToolsPage /></ProtectedRoute>} />


        <Route path="*" element={<h1>404 Not Found</h1>} />

        
      </Route>

      <Route path="/login" element={<LoginPage/>}/>
       <Route path="/signup" element={<SignUpPage/>}/>
    </Routes>
 
  );
}
