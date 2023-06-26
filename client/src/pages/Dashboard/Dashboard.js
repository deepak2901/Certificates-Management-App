import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Cards from "../../components/Cards";
import { fetchFiles } from "../../services/uploadFilesService";

const Dashboard = () => {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    const fetchExistingFiles = async () => {
      try {
        const files = await fetchFiles();
        setFileList(files);
      } catch (error) {
        console.error("Error fetching files:", error.message);
      }
    };

    fetchExistingFiles();
  }, []);

  return (
    <Box p={3}>
      <Typography
        marginLeft={"40px"}
        variant="h3"
        component="h3"
        gutterBottom
        sx={{ fontFamily: "cursive" }}
      >
        Dashboard
      </Typography>
      <Typography
        margin={"20px"}
        padding={"20px"}
        variant="h6"
        component="span"
        sx={{ color: "black", fontWeight: "bold" }}
      >
        Welcome to your dashboard! Here, you can find all your uploaded files
        and documents.
      </Typography>
      <Cards fileList={fileList} />
    </Box>
  );
};

export default Dashboard;
