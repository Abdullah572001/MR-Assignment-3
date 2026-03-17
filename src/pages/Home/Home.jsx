import React from 'react';
import Banner from '../../components/Banner/Banner'
import History from '../History/History';
import TrendingApps from '../TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router';

const Home = () => {

    const appsData = useLoaderData();
    // console.log(appsData)

    return (
        <div>
            <Banner></Banner>
            <History></History>
            <TrendingApps appsData={appsData}></TrendingApps>
        </div>
    );
};

export default Home;