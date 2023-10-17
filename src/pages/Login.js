import React, { useState, useEffect } from "react";
import "./login/login.css";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

// for handle the button style
const Login = () => {
  const lgn = {
    backgroundColor: "#51cccc",
    color: "white",
    textTransform: "capitalize",
    marginBottom: "1rem",
    boxShadow: "none",
  };
  const frg = {
    backgroundColor: "white",
    color: "black",
    textTransform: "capitalize",
    boxShadow: "none",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function changeEmail(e) {
    setEmail(e.target.value);
  }

  function changePassword(e) {
    setPassword(e.target.value);
  }

  async function handleSubmit() {
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
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }
  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div className="login-page">
      <div className="image-container">
        <img
          src="https://www.beyoung.in/images/login-image-final.jpg"
          alt="pic"
        />
        <button className="close" type="button">
          X
        </button>
      </div>
      <div className="welcome">
        <div>Login</div>
        <span>Get Exciting Offers & Track Order</span>
      </div>
      <form onSubmit={handleSubmit}>
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

        <Button
          style={lgn}
          variant="contained"
          color="info"
          type="submit"
          fullWidth
          margin="normal"
        >
          Login
        </Button>
        <Link to="/Forget">
          <Button
            style={frg}
            type="submit"
            variant="contained"
            color="info"
            fullWidth
          >
            Forget
          </Button>
        </Link>
        <Button
          style={frg}
          type="submit"
          variant="contained"
          color="info"
          fullWidth
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Login;
