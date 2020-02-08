const express = require("express");
const {
  register,
  login,
  getLoginUser
} = require("../controllers/authController");
const router = express.Router();

const { protect } = require("../middleware/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/account", protect, getLoginUser);

module.exports = router;
