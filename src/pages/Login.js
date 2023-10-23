import React, { useState, useEffect } from "react";
import "./login/login.css";
import { TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); //Initialize the history

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
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const closeLoginPage = () => {
    navigate("/Homepage");
  };

  async function handleSubmit() {
    // console.log("handle submit called");
    console.log(email);
    console.log(password);
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
            email: email,
            password: password,
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

      if (json.success) {
        // localStorage.setItem("email", email);
        // localStorage.setItem("password", password);
        navigate("/Homepage");
      } else {
        setEmail("Login failed.");
      }
    } catch (error) {
      console.log("Error fetching data:", error);
      setError("Error fetching data: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-page">
      <div className="image-container">
        <img
          src="https://www.beyoung.in/images/login-image-final.jpg"
          alt="pic"
        />
        <button className="close" type="button" onClick={closeLoginPage}>
          X
        </button>
      </div>
      <div className="welcome">
        <div>Login</div>
        <span>Get Exciting Offers & Track Order</span>
      </div>
      <form onSubmit={handleSubmit} className="lgn-btn">
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

        {error && <div className="error-message">{error}</div>}
        <Button
          style={lgn}
          variant="contained"
          color="info"
          type="submit"
          fullWidth
          margin="normal"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Loggin in..." : "Login"}
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
        <Link to="/Signup">
          <Button
            style={frg}
            type="submit"
            variant="contained"
            color="info"
            fullWidth
          >
            Sign Up
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
