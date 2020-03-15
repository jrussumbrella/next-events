const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Group = require('../models/Group');
const GroupMember = require('../models/GroupMember');
const APIFeatures = require('../utils/apiFeatures');
const mongoose = require('mongoose');

exports.getGroups = asyncHandler(async (req, res) => {
  let filter = {};
  let query = Group.find();

  if (req.params.userId) {
    filter = { user: req.params.userId };
    query = GroupMember.find(filter).populate({ path: 'group' });
  }

  const features = new APIFeatures(query, req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const groups = await features.query;

  res
    .status(200)
    .json({ success: true, data: { groups }, results: groups.length });
});

exports.getGroup = asyncHandler(async (req, res, next) => {
  const isObjectId = mongoose.isValidObjectId;

  let query;
  query = isObjectId(req.params.id)
    ? Group.findById(req.params.id)
    : Group.findOne({ slug: req.params.id });

  const group = await query.populate({ path: 'owner', select: 'name' });
  if (!group) return next(new ErrorResponse(`Group not found`, 404));
  res.status(200).json({ success: true, data: group });
});

exports.createGroup = asyncHandler(async (req, res) => {
  req.body.owner = req.user._id;
  const group = await Group.create(req.body);
  res.status(200).json({ success: true, data: group });
});

exports.deleteGroup = asyncHandler(async (req, res) => {
  let group = await Group.findById(req.params.id);
  if (!group) return next(new ErrorResponse(`Event not found`, 404));
  //Make sure user is group owner and user is not an admin
  if (group.owner.toString() !== req.user.id && req.user.role !== 'admin')
    return next(
      new ErrorResponse(`You are not allowed to delete this group`, 401)
    );
  group.remove();
  res.status(200).json({ success: true, data: {} });
});

exports.updateGroup = asyncHandler(async (req, res, next) => {
  let group = await Group.findById(req.params.id);
  if (!group) return next(new ErrorResponse(`Group not found`, 404));

  //Make sure user is group owner
  if (group.owner.toString() !== req.user.id && req.user.role !== 'admin')
    return next(
      new ErrorResponse(`You are not allowed to update this group`, 401)
    );
  group = await Group.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  res.status(200).json({ success: true, data: group });
});

exports.getMembers = asyncHandler(async (req, res, next) => {
  const groupId = req.params.groupId;
  let group = await Group.findById(groupId);
  if (!group) return next(new ErrorResponse(`Group is not found`, 404));

  const features = new APIFeatures(
    GroupMember.find({ group: groupId }).populate({
      path: 'user',
      select: 'name'
    }),
    req.query
  )
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const members = await features.query;
  res
    .status(200)
    .json({ success: true, data: { members }, results: members.length });
});

exports.addMember = asyncHandler(async (req, res, next) => {
  const groupId = req.params.groupId;
  const userId = req.user.id;

  const group = await Group.findById(groupId);
  if (!group) return next(new ErrorResponse(`Group is not found`, 404));

  let member = await GroupMember.findOne({ group: group._id, user: userId });

  if (member)
    return next(new ErrorResponse(`You already member to this group`, 404));

  member = await new GroupMember({
    user: userId,
    group: group._id
  }).save();

  res.status(200).json({ success: true, data: { member } });
});

exports.removeMember = asyncHandler(async (req, res, next) => {
  const groupId = req.params.groupId;
  const userId = req.user.id;

  const group = await Group.findById(groupId);
  if (!group) return next(new ErrorResponse(`Group is not found`, 404));

  const member = await GroupMember.findOne({ group: group._id, user: userId });

  if (!member)
    return next(
      new ErrorResponse(`Error in leaving group. Please try again`, 404)
    );

  await member.remove();

  res.status(200).json({ success: true, data: {} });
});
