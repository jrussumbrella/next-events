const User = require('../models/User');
const Group = require('../models/Group');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

exports.getUsers = asyncHandler(async (req, res) => {
  res.status(200).json(res.advancedResults);
});

exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) return next(new ErrorResponse(`User not found`, 404));
  res.status(200).json({ success: true, data: user });
});

exports.createUser = asyncHandler(async (req, res, next) => {
  const user = User.create(req.body);
  res.status(201).json({ success: true, data: user });
});

exports.updateUser = asyncHandler(async (req, res, next) => {
  let user = await User.findById(req.params.id);
  if (!user) return next(new ErrorResponse(`User not found`, 404));
  user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  res.status(200).json({ success: true, data: user });
});

exports.deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) return next(new ErrorResponse(`User not found`, 404));
  await user.remove();
  res.status(200).json({ success: true, data: {} });
});

exports.getCreatedGroups = asyncHandler(async (req, res, next) => {
  const { userId } = req.params;

  const user = await User.findById(userId);
  if (!user) return next(new ErrorResponse(`User not found`, 404));

  const groups = await Group.find({ owner: userId });

  res.status(200).json({ success: true, data: groups });
});

exports.getJoinedGroups = asyncHandler(async (req, res, next) => {
  const { userId } = req.params;

  const user = await User.findById(userId);
  if (!user) return next(new ErrorResponse(`User not found`, 404));

  const groups = await Group.find({
    'members.member': { $in: [`${ObjectId(userId)}`] }
  });

  res.status(200).json({ success: true, data: groups });
});
