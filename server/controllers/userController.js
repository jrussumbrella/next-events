const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

exports.createUser = asyncHandler(async (req, res) => {
  const user = User.create(req.body);
  res.status(200).json({ success: true, data: user });
});
