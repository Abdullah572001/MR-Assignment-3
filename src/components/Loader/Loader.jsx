import React from "react";
import logo from "../../assets/logo.png";

const Loader = () => {
  return (
    <div>
      <div className="loader-container">
        <img className="spinner" src={logo} alt="" />
        <span className="text-4xl font-bold">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
