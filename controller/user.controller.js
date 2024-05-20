const { userModel } = require("../model/user.schema");
const cloudinary = require("cloudinary");
const getDataUri = require("../utils/dataUri");

const userSignup = async (req, res) => {
  const { firstName, lastName, email, mono } = req.body;
  const file = req.file;

  const fileUri = getDataUri(file);
  const myCloud = await cloudinary.v2.uploader.upload(fileUri.content);

  let newUser = await userModel.create({
    profilePic: myCloud.secure_url,
    firstName,
    lastName,
    email,
    mono,
  });

  return res.status(200).json({ newUser, message: "user created sucessfully" });
};

module.exports = { userSignup };
