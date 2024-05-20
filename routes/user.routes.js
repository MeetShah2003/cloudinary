const { Router } = require("express");
const { userSignup } = require("../controller/user.controller");
const singleUpload = require("../middleware/multer");
const userRouter = Router();

userRouter.post("/signup", singleUpload, userSignup);

module.exports = { userRouter };
