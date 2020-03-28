const express = require('express');
const passport = require('passport');
const {
  register,
  login,
  getLoginUser,
  forgotPassword,
  resetPassword,
  updateDetails,
  changePassword,
  logout,
  googleLogin
} = require('../controllers/authController');
const router = express.Router();
const passportGoogle = require('../utils/passport/google');

const { protect } = require('../middleware/auth');

router.use(passport.initialize());
router.use(passport.session());

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/account', protect, getLoginUser);
router.post('/forgotPassword', forgotPassword);
router.put('/resetPassword/:resetToken', resetPassword);
router.put('/updateDetails', protect, updateDetails);
router.put('/changePassword', protect, changePassword);

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback', passport.authenticate('google'), googleLogin);

module.exports = router;
