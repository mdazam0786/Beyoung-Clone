import React, { useEffect, useState } from "react";
import "./login/login.css";
import { TextField, Button } from "@mui/material";

const Signup = () => {
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

  async function signUpForm() {
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/login",
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
    signUpForm();
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
        <div>Sign Up</div>
        <span>Get Exciting Offers & Track Order</span>
      </div>
      <form onSubmit={signUpForm}>
        <TextField
          label="Full Name"
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
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Signup;
