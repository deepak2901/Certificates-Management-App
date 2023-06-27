import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const AboutUsPage = () => {
  return (
    <Box textAlign="flexStart" py={8} sx={{
      backgroundColor: "#0E8388",
      padding: "16px",
      borderRadius: "8px",
      display: "inline-block",
      margin: "40px",
    }}>
      <Typography variant="h6" component="h1" gutterBottom sx={{fontFamily: "cursive", textAlign:"center", color: "black", fontWeight: "bold"}}>
        About Us
      </Typography>
      <Typography variant="h6" component="p" gutterBottom sx={{fontFamily: "cursive", textAlign:"center", color: "black", fontWeight: "bold"}}>
        Welcome to Skill.docs !
      </Typography>
      <br/>
      <Typography variant="h6" component="p" gutterBottom sx={{color: "black", fontWeight: "bold"}}>
        Our mission is to provide innovative solutions that meet the needs of our clients while exceeding their expectations. We believe in building long-lasting relationships based on trust, transparency, and mutual respect.
      </Typography>
    </Box>
  );
};

export default AboutUsPage;