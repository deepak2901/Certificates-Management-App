import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ServicesPage = () => {
  return (
    <Box
        sx={{
          backgroundColor: "#0E8388",
          padding: "16px",
          borderRadius: "8px",
          display: "inline-block",
          margin: "40px"
        }}
      >
        <Typography
          variant="h6"
          component="span"
          sx={{ color: "black", fontWeight: "bold" }}
        >
          <span style={{ fontFamily: "cursive" }}>Skill.docs</span> is a secure
          and user-friendly app that allows you to upload, access, and share
          your certificates and documents anytime, anywhere. With advanced
          features such as organization-level access control, version control,
          collaborative workspaces, and powerful search capabilities,{" "}
          <span style={{ fontFamily: "cursive" }}>Skill.docs</span> simplifies
          document management while ensuring the highest level of security for
          your valuable files. Seamlessly integrate with popular cloud storage
          platforms and enjoy a mobile and desktop application for easy access.
          <br />
          <br />
          Experience the future of certificate management with{" "}
          <span style={{ fontFamily: "cursive" }}>Skill.docs</span>.
        </Typography>
      </Box>
  );
};

export default ServicesPage;