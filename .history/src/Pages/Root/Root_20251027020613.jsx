import React from 'react';
import Navbar from '../../Components/Header/Footer/Header';
import { Outlet } from 'react-router';
import Footer from '../../Components/Header/Footer/Footer';
import Header from '../../Components/Header/Footer/Header';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar <Header></Header>/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;