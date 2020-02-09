const express = require("express");
const {
  register,
  login,
  getLoginUser,
  forgotPassword,
  resetPassword,
  updateDetails,
  changePassword
} = require("../controllers/authController");
const router = express.Router();

const { protect } = require("../middleware/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/account", protect, getLoginUser);
router.post("/forgotPassword", forgotPassword);
router.put("/resetPassword/:resetToken", resetPassword);
router.put("/updateDetails", protect, updateDetails);
router.put("/changePassword", protect, changePassword);

module.exports = router;
