import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Apps from '../Apps/Apps';
import { useLoaderData } from 'react-router';

const Home = () => {

    const data = useLoaderData()
    cons
    return (
        <div>
            <Banner></Banner>
            <Apps></Apps>
        </div>
    );
};

export default Home;