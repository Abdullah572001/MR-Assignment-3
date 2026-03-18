import React from "react";
import errorImage from "../../assets/App-Error.png";

const ErrorPage3 = () => {
  return (
    <div className="grid justify-center items-center mt-12">
      <img className="ml-4 lg:ml-12" src={errorImage} alt="" />
      <h2 className="text-4xl font-bold mt-6 text-center">
        No apps installed yet!
      </h2>
      <p className="text-gray-500 mt-6 text-center">
        If you need apps please install apps from apps section first.
      </p>

      <div className="flex justify-center">
        <a href="/apps">
          <button className="btn bg-[linear-gradient(138deg,#632EE3_0%,#9F62F2_100%)] text-white mt-8">
            Go Back!
          </button>
        </a>
      </div>
    </div>
  );
};

export default ErrorPage3;
