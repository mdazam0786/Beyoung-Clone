import React, { useState } from "react";
import "./login/login.css";
import { TextField, Button } from "@mui/material";



const Forget = () => {
  // for handle the button style
  const lgn = {
    backgroundColor: "#51cccc",
    color: "white",
    textTransform: "capitalize",
    marginBottom: "1rem",
    boxShadow: "none",
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
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          size="small"
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          size="small"
          required
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          size="small"
          required
        />
        <TextField
          label="ConfirmPassword"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          size="small"
          required
        />
        <Button
          style={lgn}
          variant="contained"
          color="info"
          fullWidth
          margin="normal"
        >
          Forget
        </Button>
      </form>
    </div>
  );
};

export default Forget;

/* 
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
*/
