import React, { useState, useEffect } from "react";
import "./login/login.css";
import { TextField, Button } from "@mui/material";

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

  // const [formData, setFormData] = useState({email: '', password: ''});
  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   console.log(formData);
  // }

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://academics.newtonschool.co/api/v1/user/login',
        {
          method: "POST",
          headers: {
            projectId: "f104bi07c490",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          //   email: "mdnaiyer97@gmail.com",
          //   password: "12345",
          //   appType: "ecommerce",
          // }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const logindata = await response.json();
      setFormData(logindata.logindata);
      console.log(logindata);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInput = (e) => {
    const {name, value} =e.target;
    setFormData({...formData, [name]: value,});
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
          // value={formData.email}
          // onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          size="small"
          required
          // value={formData.password}
          // onChange={(e) =>
          //   setFormData({ ...formData, password: e.target.value })
          // }
        />
        {/* {mode === "signup" && (
          <TextField
            label="Confirm Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
          />
        )} */}
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
        <Button
          style={frg}
          type="submit"
          variant="contained"
          color="info"
          fullWidth
        >
          Forget
        </Button>
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

{
  /* {mode === "signup" ? "Sign Up" : "Login"} */
}

{
  /* <a href="" className="for" onClick={handleToggle}>
        {isSignUp ? "Login" : "Signup"}
      </a> */
}

{
  /* <div className="form-in">
          <input type="email" placeholder="" autoComplete="off" />
          <label htmlFor="email" className="label">
            Email Id
            <sup>*</sup>
          </label>
          <input type="password" placeholder="" autoComplete="off" />
          <label htmlFor="password" className="label">
            password
            <sup>*</sup>
          </label>
          <div className="login-button">
            <button type="submit">Login</button>
          </div>
        </div> */
}
