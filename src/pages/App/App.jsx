import React from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import starIcon from "../../assets/icon-ratings.png";
import {formatNumber} from '../../utility/formatNumber'
import { Link } from "react-router";

const App = ({ app }) => {

  return (
    <Link to={`/home/${app.id}`} className="p-6 bg-white rounded-xl shadow-md space-y-4">
      <img
        className="w-full h-auto bg-gray-200 rounded-xl p-6"
        src={app.image}
        alt=""
      />
      <h2 className="text-xl font-bold text-left">{app.title}</h2>
      <div className="flex justify-between items-center">
        <div className="badge badge-ghost text-[#00D390]">
          <img className="w-3 h-3" src={downloadIcon} alt="" />
          {formatNumber(app.downloads)}
        </div>

        <div className="badge badge-ghost bg-[#FFF0E1] text-[#FF8811]">
            <img className="w-3 h-3" src={starIcon} alt="" />
            {app.ratingAvg}
        </div>
      </div>
    </Link>
  );
};

export default App;
