import React from 'react';
import App from '../App/App';
import { Link } from 'react-router';

const TrendingApps = ({appsData}) => {

    // console.log(appsData)
    const hightRatingApps = appsData.sort((a, b)=> b.ratingAvg - a.ratingAvg).slice(0, 8);
    // console.log(hightRatingApps);

    return (
        <div className='bg-[linear-gradient(180deg,#EEF0F5_0%,#F8F9FC_100%)]'>
            <div className="max-w-350 mx-auto px-4 py-20 text-center">
                <h2 className='text-4xl font-bold'>Trending Apps</h2>
                <p className='text-sm text-gray-500 mt-5 mb-5'>Explore All Trending Apps on the Market developed by us</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {hightRatingApps.map(app => <App key={app.id} app={app}></App>)}
                </div>

                <Link to='/apps'><button className='btn bg-[linear-gradient(138deg,#632EE3_0%,#9F62F2_100%)] text-white mt-8'>Show All</button></Link>

            </div>
        </div>
    );
};

export default TrendingApps;