import React, { useState } from "react";
import { useLoaderData } from "react-router";
import App from "../App/App";

const AllApps = () => {

    const [input, setInput] = useState('');

  const appsData = useLoaderData();
  // console.log(appsData)

  
    const searchApp = appsData.filter(app => app.title.toLowerCase().includes(input.toLocaleLowerCase()));
    // console.log(searchApp)

  const handleOnChange = (e) => {
    // console.log(e.target.value)
    setInput(e.target.value);
  };

  return (
    <div className="bg-[linear-gradient(180deg,#EEF0F5_0%,#F8F9FC_100%)]">
      <div className="max-w-350 mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center">Our All Applications</h2>
        <p className="text-gray-500 text-center mt-6 mb-10">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>

        <div className="flex justify-between flex-col-reverse lg:flex-row text-center lg:text-left">
          <h2 className="font-bold text-xl">({searchApp.length}) Apps Found</h2>
          <label className="input mx-auto lg:mx-0 mb-4 lg:mb-0">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="search Apps"  onChange={handleOnChange}/>
          </label>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
                    {searchApp.map(app => <App key={app.id} app={app}></App>)}
                </div>
      </div>
    </div>
  );
};

export default AllApps;
