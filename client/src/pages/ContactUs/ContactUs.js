import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { name, email, message };
    if (name && email && message) {
      toast.success("Form uploaded successfully");
      console.log(formData);
    } else {
        toast.error("Please fill the form data");
    }
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <ToastContainer
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 400,
          margin: "auto",
          marginTop: "100px",
          padding: 10,
          border: "1px solid #ccc",
          borderRadius: 4,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            label="Name"
            variant="outlined"
            value={name}
            onChange={handleNameChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Message"
            variant="outlined"
            value={message}
            onChange={handleMessageChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
};

export default ContactUsForm;
