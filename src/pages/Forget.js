import React, { useState, useEffect } from "react";
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


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeConPassword = (e) => {
    setConPassword(e.target.value);
  };

  async function forgetForm() {
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/forgotPassword",
        {
          method: "POST",
          headers: {
            projectId: "f104bi07c490",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: "Azam",
            email: "mdnaiyer97@gmail.com",
            password: "12345",
            appType: "ecommerce",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log(response);
      const signUp = await response.json();
      console.log(signUp);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  useEffect(() => {
    forgetForm();
  }, []);

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
      <form onSubmit={forgetForm}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          size="small"
          required
          value={name}
          onChange={changeName}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          size="small"
          required
          value={email}
          onChange={changeEmail}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          size="small"
          required
          value={password}
          onChange={changePassword}
        />
        <TextField
          label="ConfirmPassword"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          size="small"
          required
          value={conPassword}
          onChange={changeConPassword}
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
