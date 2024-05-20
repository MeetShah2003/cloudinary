const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  profilePic: String,
  firstName: String,
  lastName: String,
  email: String,
  mono: Number,
});

const userModel = new mongoose.model("userCloudinary", userSchema);

module.exports = { userModel };
