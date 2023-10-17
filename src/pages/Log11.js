import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
} from "@mui/material";

const Log11 = () => {
  const [mode, setMode] = useState("login"); // Set the initial mode to "login"
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
  });

  const handleModeChange = (event) => {
    setMode(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission, for example, make an API request.
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h4" align="center">
          {mode === "signup" ? "Sign Up" : "Login"}
        </Typography>
        <FormControl component="fieldset">
          <FormLabel component="legend">Select Mode</FormLabel>
          <RadioGroup
            row
            aria-label="mode"
            name="mode"
            value={mode}
            onChange={handleModeChange}
          >
            <FormControlLabel
              value="signup"
              control={<Radio />}
              label="Sign Up"
            />
            <FormControlLabel value="login" control={<Radio />} label="Login" />
          </RadioGroup>
        </FormControl>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          {mode === "signup" && ( // Render the name field only in "Sign Up" mode
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
          )}
          {mode === "signup" && ( // Render the confirm password field only in "Sign Up" mode
            <TextField
              label="Confirm Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
          )}
          <Button variant="contained" color="primary" fullWidth type="submit">
            {mode === "signup" ? "Sign Up" : "Login"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Log11;
