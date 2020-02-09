const express = require("express");
const {
  register,
  login,
  getLoginUser,
  forgotPassword,
  resetPassword
} = require("../controllers/authController");
const router = express.Router();

const { protect } = require("../middleware/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/account", protect, getLoginUser);
router.post("/forgotPassword", forgotPassword);
router.put("/resetPassword/:resetToken", resetPassword);

module.exports = router;
