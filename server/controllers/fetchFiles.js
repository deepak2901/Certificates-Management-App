const { storage } = require("./../config/firebase");
const { ref, listAll, getDownloadURL } = require("firebase/storage");

exports.fetchFiles = async (req, res) => {
  try {
    const storageRef = ref(storage, "files/");
    const files = await listAll(storageRef);

    const filePromises = files.items.map(async (file) => {
      const downloadURL = await getDownloadURL(file);
      return {
        name: file.name,
        downloadURL,
      };
    });

    const fileList = await Promise.all(filePromises);

    return res.send(fileList);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
