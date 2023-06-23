import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Modal, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { forgetpassword } from '../../../services/authService';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError('');
  };

  const handleEmailKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setEmailError('Invalid email');
      return;
    }

    try{
      await forgetpassword({ email });
      console.log('Email: ', email);
      setIsModalOpen(true);
      setEmail('');
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 300,
        margin: 'auto',
        marginTop: '100px',
        padding: 10,
        border: '1px solid #ccc',
        borderRadius: 4,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h5" component="h5" gutterBottom>
        Find Your Account
      </Typography>
      <hr/>
      <Typography variant="subtitle1" gutterBottom>
        Please enter your email address to search your account.
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
      <Button
        variant="contained"
        color="grey"
        fullWidth
        sx={{ marginTop: 2 }}
        component={Link}
        to="/signin"
      >
        Cancel
      </Button>
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            boxShadow: 24,
            p: 4,
            outline: 'none',
            borderRadius: 4,
            maxWidth: 300,
            width: '100%',
            textAlign: 'center',
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
            }}
            onClick={handleCloseModal}
          >
            <CloseIcon />
          </IconButton>
          <CheckCircleIcon sx={{ fontSize: 48, color: 'green' }} />
          <Typography variant="h6" component="h6" gutterBottom sx={{ marginTop: 2 }}>
            Password Reset Email Sent Successfully
          </Typography>
          <Typography variant="body1" gutterBottom>
            Please change your password and try logging in again!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
            onClick={handleCloseModal}
            component={ Link }
            to="/signin"
          >
            OK
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default ForgetPassword;
