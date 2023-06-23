const express = require("express");
const router = express.Router();

const { signup, signin, forgetPassword } = require("../controllers/auth");
const { uploadFiles } = require("../controllers/uploadfiles")
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forget-password", forgetPassword);
router.post("/uploadfiles", upload.single("filename"), uploadFiles);

module.exports = router;