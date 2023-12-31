import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { signup } from '../../../services/authService'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const handleEmailKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("password-input").focus();
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Add your password validation logic using regex or any other method
    // Example: Password must be at least 8 characters long
    return password.length >= 8;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Invalid email");
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 8 characters long");
      return;
    }

    try {
      await signup({ email, password });
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Signup successful!");
      // Reset the form
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 300,
        margin: "auto",
        marginTop: "100px",
        padding: 10,
        border: "1px solid #ccc",
        borderRadius: 4,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h5" component="h1" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
          onKeyPress={handleEmailKeyPress}
          fullWidth
          margin="normal"
          error={Boolean(emailError)}
          helperText={emailError}
        />
        <TextField
          id="password-input"
          type="password"
          label="Password"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
          fullWidth
          margin="normal"
          error={Boolean(passwordError)}
          helperText={passwordError}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              handleSubmit(event);
            }
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Sign up
        </Button>
      </form>
      <Typography variant="body2" sx={{ marginTop: 2 }}>
        Already have an account?{" "}
        <Link to="/signin" style={{ textDecoration: "none" }}>
          Login here
        </Link>
      </Typography>
    </Box>
  );
};

export default Signup;
