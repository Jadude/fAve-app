// OK

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";


const MainLayout = () => {
    return (
        <div className="main-layout ">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;