import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Apps from '../Apps/Apps';
import { useLoaderData } from 'react-router';

const Home = () => {
  const data = useLoaderData(); // data from loader

  return (
    <div>
      <Banner />
      <Apps data={data} />
    </div>
  );
};

export default Home;