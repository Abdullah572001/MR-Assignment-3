import React from "react";
import downloadImage from "../../assets/icon-downloads.png";
import starImage from "../../assets/icon-ratings.png";
import { formatNumber } from "../../utility/formatNumber";

const InstalledApps = ({ app, handleUninstallBtn }) => {
  return (
    <div className="p-4 bg-white rounded-2xl shadow mb-4 flex justify-between items-center flex-col md:flex-row">
      <div className="flex items-center">
        <img
          className="p-2 bg-gray-100 rounded-2xl mr-4"
          src={app.image}
          alt=""
        />
        <div className="space-y-3">
          <h2 className="text-xl font-bold">{app.title}</h2>
          <div className="flex gap-3 items-center">
            <div className="flex gap-1 items-center">
              <img className="w-4 h-4" src={downloadImage} alt="" />
              <p className="text-sm text-[#00D390]">
                {formatNumber(app.downloads)}
              </p>
            </div>

            <div className="flex gap-1 items-center">
              <img className="w-4 h-4" src={starImage} alt="" />
              <p className="text-sm text-[#FF8811]">{app.ratingAvg}</p>
            </div>

            <p className="text-sm text-gray-500">{app.size} MB</p>
          </div>
        </div>
      </div>

      <button
        onClick={() => handleUninstallBtn(app.id)}
        className="btn bg-[#00D390] text-white mt-8 md:mt-0"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledApps;
