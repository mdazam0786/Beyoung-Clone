import React, { useState } from "react";
import "./login/login.css";
import { TextField, Button } from "@mui/material";
import { fetcher } from "./fecher";

const Signup = () => {
  // for handle the button style
  const lgn = {
    backgroundColor: "#51cccc",
    color: "white",
    textTransform: "capitalize",
    marginBottom: "1rem",
    boxShadow: "none",
  };

  const [signupData, setSignupData] = useState(null);

  const handleSubmit = async () => {
    // e.preventDefault();

    try {
      const response = await fetch(
        'https://academics.newtonschool.co/api/v1/user/signup',
        {
          method: "POST",
          headers: {
            projectId: "f104bi07c490",
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
      const logindata = await response.json();
      setSignupData(logindata);
      console.log(logindata);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  //   confirmPass: "",
  //   fullname: "",
  // });
  // const [formError, setFormError] = useState({
  //   email: "",
  //   password: "",
  //   confirmPass: "",
  //   fullname: "",
  // });


  // const storeToken = (token) => {
  //   localStorage.setItem('token', token);
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log(formData);



  //   // validate form error
  //   const isEmailValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/.test(
  //     formData.email
  //   );

  //   const passValid = formData.password.length >= 8;
  //   const nameValid = formData.fullname.length >= 3;
  //   const conpassValid = formData.confirmPass === formData.confirmPass;

  //   setFormError({
  //     email: isEmailValid ? "" : "invalid email address",
  //     password: passValid ? "" : "password must be at least 8 character",
  //     fullname: nameValid ? "" : "full name must be atleast 3 character",
  //     confirmPass: conpassValid ? "" : "passwords must match",
  //   });

  //   // send data to backend 

  //   // console.log(formData);
  //   if(isEmailValid && passValid && nameValid &&conpassValid)
  //   {
  //     fetcher("user/signup", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         email: formData.email,
  //         password: formData.password,
  //         name: formData.fullname,
  //         appType: "ecommerce",
  //       }, false)
  //     })
  //     .then(res => storeToken(res.token))
  //     .catch(err=> console.log(err))
  //   }
  //   else {
  //     if(isEmailValid && passValid){
  //       fetcher("user/login", {
  //         method: "POST",
  //         body: JSON.stringify({
  //           email:formData.email, 
  //           password: formData.password,
  //           appType: "ecommerce",
  //         }, false)
  //       })
  //       .then(res => storeToken(res.token))
  //       .catch(err => console.log(err))
  //     }
  //   }
  // };

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
      <form onSubmit={handleSubmit}>
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          margin="normal"
          size="small"
          required
          // helperText={formError.fullname}
          // value={formData.fullname}
          // error={formError.fullname}
          // onChange={(e) =>
          //   setFormData({ ...formData, fullname: e.target.value })
          // }
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          size="small"
          required
          // helperText={formError.email}
          // value={formData.email}
          // error={formError.email}
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
          // helperText={formError.password}
          // value={formData.password}
          // error={formError.password}
          // onChange={(e) =>
          //   setFormData({ ...formData, password: e.target.value })
          // }
        />
        <TextField
          label="ConfirmPassword"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          size="small"
          required
          // helperText={formError.confirmPass}
          // value={formData.confirmPass}
          // error={formError.confirmPass}
          // onChange={(e) =>
          //   setFormData({ ...formData, confirmPass: e.target.value })
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
