// OK

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Logo from "../displayMediaQueries/Logo .jsx";


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