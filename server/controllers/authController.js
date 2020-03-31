const crypto = require('crypto');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const sendEmail = require('../utils/sendEmail');
const Email = require('../utils/email');

const sendTokenResponse = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    httpOnly: false
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }
  const userData = user;
  userData.password = undefined;

  res
    .status(statusCode)
    // .cookie('token', token, options)
    .json({ success: true, token, data: userData });
};

exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  const user = await User.create({ name, email, password, role });
  const url = `http://localhost:3000/user/${user._id}`;
  await new Email(user, url).sendWelcome();
  sendTokenResponse(user, 201, res);
});

exports.googleLogin = (req, res) => {
  const { user } = req;
  const token = user.getSignedJwtToken();
  res.redirect(`http://localhost:3000/success?token=${token}`);
};

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email) {
    return next(new ErrorResponse('Email is required'), 400);
  }

  if (!password) {
    return next(new ErrorResponse('Password is required', 400));
  }

  // check user
  const user = await User.findOne({ email }).select('+password');
  if (!user)
    return next(new ErrorResponse('Email or password in incorrect', 401));

  // check if password match
  const isMatchPassword = await user.matchPassword(password);
  if (!isMatchPassword)
    return next(new ErrorResponse('Email or password in incorrect', 401));

  sendTokenResponse(user, 200, res);
});

exports.getLoginUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  res.status(200).json({ success: true, data: user });
});

exports.updateDetails = asyncHandler(async (req, res, next) => {
  const fields = {
    name: req.body.name,
    email: req.body.email
  };
  const user = await User.findByIdAndUpdate(req.user.id, fields, {
    new: true,
    runValidators: false
  });
  res.status(200).json({ success: true, data: user });
});

exports.changePassword = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('+password');

  if (!user) return next(new ErrorResponse('User not found', 404));

  if (!req.body.currentPassword || !req.body.newPassword)
    return next(
      new ErrorResponse('Current Password and New Password is required', 400)
    );

  // check current password
  const isMatchPassword = await user.matchPassword(req.body.currentPassword);
  if (!isMatchPassword)
    return next(new ErrorResponse('Password is incorrect'), 401);

  user.password = req.body.newPassword;
  await user.save();
  sendTokenResponse(user, 200, res);
});

exports.forgotPassword = asyncHandler(async (req, res, next) => {
  if (!req.body.email) return next(new ErrorResponse('Email is required'), 400);
  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return next(
      new ErrorResponse('There is no registered email with that account '),
      404
    );
  const token = await user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });

  // create resetPassword url
  const resetURL = `${req.protocol}://${req.get(
    'host'
  )}/api/v1/auth/resetPassword/${token}`;

  const message = `Please go to this url to reset your password ${resetURL}`;

  try {
    await sendEmail({
      email: user.email,
      subject: 'Password Reset',
      message
    });
    res.status(200).json({ success: true, data: 'Email Sent' });
  } catch (error) {
    console.log(error);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });
    return next(
      new ErrorResponse('Error in sending reset password token', 500)
    );
  }
});

exports.resetPassword = asyncHandler(async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash('sha256')
    .update(req.params.resetToken)
    .digest('hex');

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() }
  });

  if (!user) return next(new ErrorResponse('Invalid rest password token', 400));

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendTokenResponse(user, 200, res);
});

exports.logout = asyncHandler(async (req, res, next) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 1 * 1000),
    httpOnly: true
  });
  res.status(200).json({ success: true, data: {} });
});
