const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Event = require('../models/Event');
const EventAttendee = require('../models/EventAttendee');
const Group = require('../models/Group');
const APIFeatures = require('../utils/apiFeatures');
const mongoose = require('mongoose');

exports.getEvents = asyncHandler(async (req, res) => {
  let filter = {};

  if (req.params.groupId) filter = { group: req.params.groupId };

  const features = new APIFeatures(Event.find(filter), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const events = await features.query;

  res
    .status(200)
    .json({ success: true, data: { events }, results: events.length });
});

exports.getNearbyEvents = asyncHandler(async (req, res, next) => {
  const { lat, lng } = req.params;

  const events = await Event.find({
    location: {
      $near: {
        $maxDistance: 1000,
        $geometry: {
          type: 'Point',
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
  const isObjectId = mongoose.isValidObjectId;
  let query;
  query = isObjectId(req.params.id)
    ? Event.findById(req.params.id)
    : Event.findOne({ slug: req.params.id });

  const event = await query.populate({
    path: 'group',
    select: 'name description'
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
  if (group.owner.toString() !== req.user.id && req.user.role !== 'admin')
    return next(
      new ErrorResponse(
        `You are not allowed to create an event to this group`,
        401
      )
    );
  const event = await Event.create(req.body);
  res.status(200).json({ success: true, data: event });
});

exports.deleteEVent = asyncHandler(async (req, res, next) => {
  let event = await Event.findById(req.params.id);

  if (!event) return next(new ErrorResponse(`Event not found`, 404));

  //Make sure user is group owner
  if (event.user.toString() !== req.user.id && req.user.role !== 'admin')
    return next(
      new ErrorResponse(
        `You are not allowed to delete an event to this group`,
        401
      )
    );

  event.remove();

  res.status(200).json({ success: true, data: {} });
});

exports.updateEvent = asyncHandler(async (req, res, next) => {
  let event = await Event.findById(req.params.id);

  if (!event) return next(new ErrorResponse(`Event not found`, 404));

  //Make sure user is group owner
  if (event.user.toString() !== req.user.id && req.user.role !== 'admin')
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

exports.addAttendee = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;
  const eventId = req.params.eventId;

  const event = await Event.findById(eventId);
  if (!event) return next(new ErrorResponse(`Event is not found`, 404));

  let attendee = await EventAttendee.findOne({ user: userId, event: eventId });
  if (attendee)
    return next(new ErrorResponse(`You are already join this event`, 400));

  attendee = await new EventAttendee({ user: userId, event: event._id }).save();

  res.status(200).json({ success: true, data: { attendee } });
});

exports.removeAttendee = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;
  const eventId = req.params.eventId;

  const event = await Event.findById(eventId);
  if (!event) return next(new ErrorResponse(`Event is not found`, 404));

  let attendee = await EventAttendee.findOne({
    user: userId,
    event: event._id
  });

  if (!attendee)
    return next(
      new ErrorResponse(
        `Error in cancel joining event. Please try again later.`,
        400
      )
    );

  await attendee.remove();

  res.status(200).json({ success: true, data: {} });
});
