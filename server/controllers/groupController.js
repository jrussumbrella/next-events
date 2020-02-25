const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Group = require('../models/Group');
const GroupMember = require('../models/GroupMember');

exports.getGroups = asyncHandler(async (req, res) => {
  res.status(200).json(res.advancedResults);
});

exports.getGroup = asyncHandler(async (req, res, next) => {
  const group = await Group.findById(req.params.id);
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
  //Make sure user is group owner
  if (group.owner.toString() !== req.user.id && req.user.role !== 'admin')
    return next(
      new ErrorResponse(`You are not allowed to delete this group`, 401)
    );
  group.remove();
  res.status(200).json({ success: true, data: {} });
});

exports.updateGroup = asyncHandler(async (req, res, next) => {
  let group = await Group.findById(req.params.id);
  if (!group) return next(new ErrorResponse(`Event not found`, 404));
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
  let group = await Group.findById(req.params.groupId);
  if (!group) return next(new ErrorResponse(`Group is not found`, 404));

  let groupMembers = await GroupMember.find({ group: groupId }).populate({
    path: 'user',
    select: 'name'
  });

  res.status(200).json({ success: true, data: groupMembers });
});

exports.addMember = asyncHandler(async (req, res, next) => {
  const groupId = req.params.groupId;
  const userId = req.user.id;

  const group = await Group.findById(groupId);
  if (!group) return next(new ErrorResponse(`Group is not found`, 404));

  let groupMember = await GroupMember.findOne({ group: groupId, user: userId });

  if (!groupMember) {
    groupMember = await new GroupMember({
      user: userId,
      group: groupId
    }).save();
  } else {
    return next(new ErrorResponse(`You already member to this group`, 404));
  }

  res.status(200).json({ success: true, data: groupMember });
});

exports.removeMember = asyncHandler(async (req, res, next) => {
  const groupId = req.params.groupId;
  const userId = req.user.id;

  const group = await Group.findById(groupId);
  if (!group) return next(new ErrorResponse(`Group is not found`, 404));

  let groupMember = await GroupMember.findOne({ group: groupId, user: userId });

  if (!groupMember) {
    return next(
      new ErrorResponse(`Error in leaving group. Please try again`, 404)
    );
  } else {
    await groupMember.remove();
    groupMember = {};
  }

  res.status(200).json({ success: true, data: groupMember });
});
