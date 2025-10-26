import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Apps from '../Apps/Apps';
import { useLoaderData } from 'react-router';

const Home = () => {

    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <Banner></Banner>
            <Apps data ={}></Apps>
        </div>
    );
};

export default Home;