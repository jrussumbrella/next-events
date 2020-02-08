const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Event = require("../models/Event");
const Group = require("../models/Group");

exports.getEvents = asyncHandler(async (req, res) => {
  if (req.params.groupId) {
    const events = await Event.find({ group: req.params.groupId });
    return res.status(200).json({
      success: true,
      count: events.length,
      data: events
    });
  } else {
    res.status(200).json(res.advancedResults);
  }
});

exports.getNearbyEvents = asyncHandler(async (req, res, next) => {
  const { lat, lng } = req.params;

  const events = await Event.find({
    location: {
      $near: {
        $maxDistance: 1000,
        $geometry: {
          type: "Point",
          coordinates: [lat, lng]
        }
      }
    }
  });

  res.status(200).json({
    success: true,
    count: events.length,
    data: events
  });
});

exports.getEvent = asyncHandler(async (req, res, next) => {
  const event = await Event.findById(req.params.id).populate({
    path: "group",
    select: "name description"
  });
  if (!event) return next(new ErrorResponse(`Event not found`, 404));
  res.status(200).json({ success: true, data: event });
});

exports.createEvent = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;
  req.body.group = req.params.groupId;
  const group = await Group.findById(req.params.groupId);
  //make sure group is exist
  if (!group) return next(new ErrorResponse(`Group not found`, 404));

  //Make sure user is group owner
  if (group.owner.toString() !== req.user.id && req.user.role !== "admin")
    return next(
      new ErrorResponse(
        `You are not allowed to create an event to this group`,
        401
      )
    );
  const event = await Event.create(req.body);
  res.status(200).json({ success: true, data: event });
});

exports.deleteEVent = asyncHandler(async (req, res) => {
  let event = await Event.findById(req.params.id);

  if (!event) return next(new ErrorResponse(`Event not found`, 404));

  //Make sure user is group owner
  if (event.user.toString() !== req.user.id && req.user.role !== "admin")
    return next(
      new ErrorResponse(
        `You are not allowed to delete an event to this group`,
        401
      )
    );

  event.remove();

  res.status(200).json({ success: true, data: {} });
});

exports.updateEvent = asyncHandler(async (req, res) => {
  let event = await Event.findById(req.params.id);

  if (!event) return next(new ErrorResponse(`Event not found`, 404));

  //Make sure user is group owner
  if (event.user.toString() !== req.user.id && req.user.role !== "admin")
    return next(
      new ErrorResponse(
        `You are not allowed to delete an event to this group`,
        401
      )
    );

  event = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({ success: true, data: event });
});
