const multer = require("multer");

// to store file in memory
const storage = multer.memoryStorage();

const singleUpload = multer({ storage }).single("profilePic");

module.exports = singleUpload;
