import React from 'react';
import Navbar from '../../Components/Header/Footer/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Header/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;