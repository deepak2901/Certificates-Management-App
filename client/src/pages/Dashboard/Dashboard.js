import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Cards from "../../components/Cards";
import { fetchFiles } from "../../services/uploadFilesService";
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';

const StyledSearchBar = styled('div')({
  display: 'flex',
  alignItems: 'center',
  maxWidth: '600px', // Adjust the width as needed
  margin: '40px', // Adjust the margin as needed
  '& .search-label': {
    marginRight: '10px',
    fontWeight: 'bold',
    fontFamily: 'cursive',
    color: '#0E8388',
  },
});

const Dashboard = () => {
  const [fileList, setFileList] = useState([]);
  const [originalFileList, setOriginalFileList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchExistingFiles = async () => {
      try {
        const files = await fetchFiles();
        setFileList(files);
        setOriginalFileList(files);
      } catch (error) {
        console.error("Error fetching files:", error.message);
      }
    };

    fetchExistingFiles();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFileList(originalFileList);
    } else {
      const filteredFiles = originalFileList.filter((file) =>
        file.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFileList(filteredFiles);
    }
  }, [searchTerm, originalFileList]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

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
      <StyledSearchBar>
  <Typography variant="h6" component="span" className="search-label">
    Search for your files:
  </Typography>
  <TextField
    placeholder="Search files..."
    value={searchTerm}
    onChange={handleSearch}
    InputProps={{
      startAdornment: <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />,
      sx: {
        backgroundColor: '#F5F5F5',
        borderRadius: '4px',
        '& .MuiInputBase-input': {
          py: 0.5,
          pl: 2,
          pr: 0,
        },
      },
    }}
  />
</StyledSearchBar>
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
