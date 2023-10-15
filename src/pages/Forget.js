import React, { useState } from "react";
import "./login/login.css";

const Forget = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <div className="login-page">
      <div className="image.container">
        <img
          src="https://www.beyoung.in/images/login-image-final.jpg"
          alt="pic"
        />
        <button className="close" type="button">
          X
        </button>
      </div>
      <div className="welcome">
        <div>Forget</div>
        <span>Get Exciting Offers & Track Order</span>
      </div>
      <form method="" action="">
        <div className="form-in">
          <input type="email" placeholder="" autoComplete="off" />
          <label htmlFor="" className="label">
            Email Id
            <sup>*</sup>
          </label>
          <input
            type="password"
            placeholder=""
            autoComplete="off"
          />
          <label htmlFor="" className="label">
            password
            <sup>*</sup>
          </label>
          <div className="login-button">
            <button>Forget</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Forget;

