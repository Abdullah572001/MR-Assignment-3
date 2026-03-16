import React from "react";
import playStore from '../../assets/Group.png';
import appStore from '../../assets/fi_5977575.png';
import bannerImage from '../../assets/hero.png'

const Banner = () => {
  return (
    <div className="bg-[linear-gradient(180deg,#EEF0F5_0%,#F8F9FC_100%)]">
      <div className="max-w-350 mx-auto pt-24 text-center px-4">
        <h2 className="text-6xl font-bold">
          We Build{" "}
          <span
            className="bg-[linear-gradient(180deg,#632EE3_0%,#9F62F2_100%)] 
    bg-clip-text text-transparent"
          >
            <br className="hidden md:block" />
            Productive
          </span>{" "}
          Apps
        </h2>
        <p className="text-sm text-gray-500 mt-6">
          At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br className="hidden md:block" /> Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>
        <div className="mt-8">
          <button className="btn btn-outline border-gray-300 mr-4"><img className="w-6 h-6" src={playStore} alt="" />Google Play</button>
          <button className="btn btn-outline border-gray-300"><img className="w-6 h-6" src={appStore} alt="" />App Store</button>
        </div>
        <img className="w-auto mx-auto mt-8" src={bannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
