import React from "react";
import logo from "../../assets/logo.png";

const Loader = () => {
  return (
    <div>
      <div className="loader-container">
        <p>
          L<img className="spinner" src={logo} alt="" />oading...
        </p>
      </div>
    </div>
  );
};

export default Loader;
