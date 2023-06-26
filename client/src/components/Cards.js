import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DownloadIcon from '@mui/icons-material/Download';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function Cards({ fileList }) {
  const [showNotification, setShowNotification] = React.useState(false);
  
  const handleView = (url) => {
    window.open(url, '_blank');
  };

  const handleDownload = (url, fileName) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };  

  const handleShare = (url) => {
    navigator.clipboard.writeText(url)
      .then(() => {
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to copy URL to clipboard:", error);
      });
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", overflow: "hidden", margin:"5px", justifyContent: "flex-start", alignItems: "flex-start"}}>
      {fileList && Array.isArray(fileList) && fileList.map((file, index) => (
        <Card
          key={index}
          sx={{ maxWidth: 345, margin:"40px", backgroundColor: "#CBE4DE" }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "#0E8388" }} aria-label="recipe">
                <AccountCircleIcon />
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={file.name}
            // subheader="September 14, 2016"
          />
          <CardMedia
            component="iframe"
            src={file.downloadURL}
            title={file.name}
            height="194"
            style={{
              border: "none",
            }}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            <Button
          sx={{
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
          onClick={() => handleView(file.downloadURL)}
        >
          View Here
        </Button>
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={() => handleDownload(file.downloadURL, "custom_file_name.pdf")}>
              <DownloadIcon />
            </IconButton>
            <IconButton aria-label="share" onClick={() => handleShare(file.downloadURL)}>
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
      {showNotification && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#2E4F4F",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            zIndex: "9999",
          }}
        >
          Copied to clipboard!
        </div>
      )}
    </div>
  );
};
