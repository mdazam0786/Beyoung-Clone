import React, { useEffect, useState } from "react";
import "./login/login.css";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
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
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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

  const closeSignupPage = () => {
    navigate("/Homepage");
  }

  async function signUpForm() {
    setError("");
    setSuccess("");

    if (password !== conPassword) {
      setError("Passwords not match");
      return;
    }

    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/signup",
        {
          method: "POST",
          headers: {
            projectId: "f104bi07c490",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            appType: "ecommerce",
          }),
        }
      );

      if (response.ok) {
        console.log(response);
        const json = await response.json();
        console.log(json);
        navigate("/Homepage");
      }
      else {
        console.log(response);
        const errorData = await response.json();
        console.log(errorData);
        throw new Error(errorData.message || "Network issue");
      }

     } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error: " + error.message);
    }
  }

  return (
    <div className="login-page">
      <div className="image.container">
        <img
          src="https://www.beyoung.in/images/login-image-final.jpg"
          alt="pic"
        />
        <button className="close" type="button" onClick={closeSignupPage}>
          X
        </button>
      </div>
      <div className="welcome">
        <div>Sign Up</div>
        <span>Get Exciting Offers & Track Order</span>
      </div>
      <div className="lgn-btn">
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
          label="Confirm Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          size="small"
          required
          value={conPassword}
          onChange={changeConPassword}
        />
        {error && <div className="error-message">{error}</div>}
        {success && (
          <div className="success-message">{success}</div>
        )}

        <Button
          style={lgn}
          variant="contained"
          color="info"
          fullWidth
          margin="normal"
          type="submit"
          onClick={signUpForm}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Signup;
