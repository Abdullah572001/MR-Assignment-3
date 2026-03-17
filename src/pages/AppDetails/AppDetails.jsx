import React from "react";
import { useLoaderData, useParams } from "react-router";
import { formatNumber } from "../../utility/formatNumber";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import likeIcon from "../../assets/icon-review.png";
import RatingsChart from "../RatingChart/RatingChart";


const AppDetails = () => {

  const appsData = useLoaderData();

  const { id } = useParams();
  // console.log(id)
  const app = appsData.find((single) => single.id === parseInt(id));
  // console.log(app)
  const {ratings} = app;

  return (
    <div className="bg-[linear-gradient(180deg,#EEF0F5_0%,#F8F9FC_100%)]">
      <div className="max-w-350 mx-auto px-4 py-20">
        <div className="lg:flex gap-10">
          <img
            className="bg-white p-10 shadow-xl lg:w-1/3 md:h-1/2 mb-6 lg:mb-0"
            src={app.image}
            alt=""
          />
          <div className="space-y-4 w-full lg:w-2/3 md:h-1/2">
            <h2 className="text-4xl font-bold">{app.title}</h2>
            <p className="text-gray-500">
              Developed by{" "}
              <span className="font-semibold bg-[linear-gradient(180deg,#632EE3_0%,#9F62F2_100%)] bg-clip-text text-transparent">
                {app.companyName}
              </span>
            </p>
            <hr className="border-gray-300" />
            <div className="-ml-6">
              <div className="stats">
                <div className="stat">
                  <img className="mb-2" src={downloadIcon} alt="" />
                  <div className="stat-title">Downloads</div>
                  <div className="stat-value">
                    {formatNumber(app.downloads)}
                  </div>
                </div>
              </div>

              <div className="stats">
                <div className="stat">
                  <img className="mb-2" src={ratingIcon} alt="" />
                  <div className="stat-title">Average Ratings</div>
                  <div className="stat-value">{app.ratingAvg}</div>
                </div>
              </div>

              <div className="stats">
                <div className="stat">
                  <img className="mb-2" src={likeIcon} alt="" />
                  <div className="stat-title">Total Reviews</div>
                  <div className="stat-value">{formatNumber(app.reviews)}</div>
                </div>
              </div>
            </div>

            <button className="btn bg-[#00D390] text-white">
              Install Now ({app.size}MB)
            </button>
          </div>
        </div>

        <hr className="border-gray-300 my-8" />

        <div className="">
          <RatingsChart ratings={ratings}></RatingsChart>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
