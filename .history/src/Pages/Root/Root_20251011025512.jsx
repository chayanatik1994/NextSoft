import React from 'react';
import Navbar from '../../Components/Header/Footer/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet>
            <Footer/>
        </div>
    );
};

export default Root;