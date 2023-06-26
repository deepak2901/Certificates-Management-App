const { storage } = require("./../config/firebase");
const { ref, getDownloadURL, uploadBytesResumable } = require("firebase/storage");

const giveCurrentDateTime = () => {
  const today = new Date();
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + ' ' + time;
  return dateTime;
};

exports.uploadFiles = async (req, res) => {
  try {
    // const user = req.user; // Assuming you have middleware to authenticate and populate the user object
    // if (user.admin) {
    //   return res.status(403).json({ message: "Admins are not allowed to upload files." });
    // }

    const dateTime = giveCurrentDateTime();
    const storageRef = ref(storage, `files/${req.file.originalname + "       " + dateTime}`);
    const metadata = {
      contentType: req.file.mimetype,
    };
    const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata);
    const downloadURL = await getDownloadURL(snapshot.ref);
    console.log('File successfully uploaded.');
    return res.send({
      message: 'File uploaded to Firebase Storage',
      name: req.file.originalname,
      type: req.file.mimetype,
      downloadURL: downloadURL
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};