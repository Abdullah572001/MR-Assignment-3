import React from 'react';
import appError from '../../assets/App-Error.png'
import { Link } from 'react-router';

const ErrorPage2 = () => {
    return (
        <div className='grid justify-center items-center mt-10'>
            <img className="ml-4 lg:ml-12" src={appError} alt="" />
            <h2 className='text-4xl font-bold mt-6 text-center'>OPPS!! APP NOT FOUND</h2>
            <p className='text-gray-500 mt-6 text-center'>The App you are requesting is not found on our system.  please try another apps</p>

            <div className='flex justify-center'>
                <a href='/apps'><button className='btn bg-[linear-gradient(138deg,#632EE3_0%,#9F62F2_100%)] text-white mt-8'>Go Back!</button></a>
            </div>
        </div>
    );
};

export default ErrorPage2;