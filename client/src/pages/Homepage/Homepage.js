import React, { useState, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Cards from "../../components/Cards";
import UploadIcon from "@mui/icons-material/Upload";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { uploadFile, fetchFiles } from "../../services/uploadFilesService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Homepage = () => {
  const [text] = useTypewriter({
    words: ["Documents", "Certificates", "Resumes"],
    loop: true,
    typeSpeed: 10,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [showCards, setShowCards] = useState(false);
 
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      if (selectedFile) {
        await uploadFile(selectedFile);
        console.log("File uploaded successfully");
        toast.success("File uploaded successfully");
        fetchExistingFiles()
      } else {
        console.error("No file selected");
        toast.error("No file selected");
      }
    } catch (error) {
      console.error("Error uploading file:", error.message);
      toast.error(`Error uploading file: ${error.message}`);
    }
  };

  const handleViewDocuments = () => {
    setShowCards(true);
  };

  const fetchExistingFiles = async () => {
    try {
      const files = await fetchFiles();
      setFileList(files);
    } catch (error) {
      console.error("Error fetching files:", error.message);
    }
  };

  useEffect(() => {
    fetchExistingFiles();
  }, []);

  return (
    <>
    <ToastContainer style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }}/>
      <Box textAlign="center" py={8}>
        <Typography
          variant="h4"
          component="h4"
          gutterBottom
          sx={{ fontFamily: "cursive" }}
        >
          WELCOME TO SKILL DOCS
        </Typography>
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{ fontFamily: "cursive" }}
        >
          One place to store all your
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{ fontFamily: "cursive" }}
        >
          <span>{text}</span>
          <Cursor cursorBlinking={true} cursorStyle="|" cursorColor="#ff014f" />
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#0E8388",
          padding: "16px",
          borderRadius: "8px",
          display: "inline-block",
          marginLeft: "40px",
          marginRight: "40px",
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
          <br/>
          <br/>
          Experience the future of certificate management with{" "}
          <span style={{ fontFamily: "cursive" }}>Skill.docs</span>.
        </Typography>
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <input type="file" style={{
            margin: "40px",
            padding: "10px",
            color: "#0E8388",
            borderColor: "#0E8388",
            "&:hover": {
              color: "white",
              backgroundColor: "#2E4F4F",
              borderColor: "#2E4F4F",
            },
          }} onChange={handleFileChange} />
        <Button
          sx={{
            margin: "40px",
            color: "#0E8388",
            borderColor: "#0E8388",
            "&:hover": {
              color: "white",
              backgroundColor: "#2E4F4F",
              borderColor: "#2E4F4F",
            },
          }}
          variant="outlined"
          startIcon={<UploadIcon />}
          onClick={handleUpload}
        >
          Upload Documents
        </Button>
        <Button
          sx={{
            margin: "40px",
            color: "#0E8388",
            borderColor: "#0E8388",
            "&:hover": {
              color: "white",
              backgroundColor: "#2E4F4F",
              borderColor: "#2E4F4F",
            },
          }}
          variant="outlined"
          startIcon={<VisibilityIcon />}
          onClick={handleViewDocuments}
        >
          View Documents
        </Button>
      </div>
      {showCards && <Cards fileList={fileList} />}
    </>
  );
};

export default Homepage;
