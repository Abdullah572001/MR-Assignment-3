import React from "react";

const History = () => {
  return (
    <div className="bg-[linear-gradient(138deg,#632EE3_0%,#9F62F2_100%)]">
      <div className="max-w-350 mx-auto px-4 py-20 text-white">
        <h2 className="text-center text-4xl font-bold">
          Trusted by Millions, Built for You
        </h2>

        <div className="text-center md:flex justify-center items-center mt-10">
          <div className="stats">
            <div className="stat">
              <div className="stat-title text-gray-300">Total Downloads</div>
              <div className="stat-value">29.6M</div>
              <div className="stat-desc text-gray-300">21% more than last month</div>
            </div>
          </div>

          <div className="stats">
            <div className="stat">
              <div className="stat-title text-gray-300">Total Reviews</div>
              <div className="stat-value">906K</div>
              <div className="stat-desc text-gray-300">46% more than last month</div>
            </div>
          </div>

          <div className="stats stats-vertical lg:stats-horizontal items-center">
          <div className="stat">
            <div className="stat-title text-gray-300">Active Apps</div>
            <div className="stat-value">132+</div>
            <div className="stat-desc text-gray-300">31 more will Launch</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default History;
