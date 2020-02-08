const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  const user = await User.create({ name, email, password, role });
  sendTokenResponse(user, 201, res);
  res.status(200).json({ success: true, data: token });
});

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email) {
    return next(new ErrorResponse("Email is required"), 400);
  }

  if (!password) {
    return next(new ErrorResponse("Password is required"), 400);
  }

  //check user
  const user = await User.findOne({ email }).select("+password");
  if (!user)
    return next(new ErrorResponse("Email or password in incorrect"), 401);

  // check if password match
  const isMatchPassword = await user.matchPassword(password);
  if (!isMatchPassword)
    return next(new ErrorResponse("Email or password in incorrect"), 401);

  sendTokenResponse(user, 200, res);
});

const sendTokenResponse = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    httpOnly: true
  };

  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({ success: true, token });
};

exports.getLoginUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  res.status(200).json({ success: true, data: user });
});
