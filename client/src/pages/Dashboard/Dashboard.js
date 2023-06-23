import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Dashboard = () => {
  return (
    <Box p={3}>
      <Typography
          variant="h4"
          component="h4"
          gutterBottom
          sx={{ fontFamily: "inherit" }}
        >
        Dashboard
      </Typography>
    </Box>
  );
};

export default Dashboard;
