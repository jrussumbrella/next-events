const mongoose = require('mongoose');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Event = require('../models/Event');
const EventAttendee = require('../models/EventAttendee');
const Group = require('../models/Group');
const APIFeatures = require('../utils/apiFeatures');
const checkAuth = require('../utils/checkAuth');

exports.getUpcomingEvents = asyncHandler(async (req, res) => {
  const date = new Date();
  const features = new APIFeatures(
    Event.find({ date: { $gte: date } }),
    req.query
  )
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const events = await features.query;

  res
    .status(200)
    .json({ success: true, data: { events }, results: events.length });
});

exports.getEvents = asyncHandler(async (req, res) => {
  let filter = {};
  let query = Event.find();

  if (req.params.groupId) {
    filter = { group: req.params.groupId };
    query = Event.find(filter);
  }

  if (req.params.userId) {
    filter = { user: req.params.userId };
    query = EventAttendee.find(filter).populate({ path: 'event' });
  }

  const features = new APIFeatures(query, req.query)
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
  const { id } = req.params;

  const query = isObjectId(id)
    ? Event.findById(id)
    : Event.findOne({ slug: id });

  const event = await query.populate({
    path: 'group',
    select: 'name description'
  });
  if (!event) return next(new ErrorResponse(`Event not found`, 404));
  event.is_attendee = false;

  const user = await checkAuth(req);
  if (user) {
    const isAlreadyAttendee = user.events.some(
      eventId => eventId.toString() === event.id
    );
    if (isAlreadyAttendee) {
      event.is_attendee = true;
    }
  }

  res.status(200).json({ success: true, data: event });
});

exports.createEvent = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;
  req.body.group = req.params.groupId;
  const group = await Group.findById(req.params.groupId);
  // make sure group is exist
  if (!group) return next(new ErrorResponse(`Group not found`, 404));

  // make sure user is group owner
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

exports.getAttendees = asyncHandler(async (req, res, next) => {
  const eventId = req.params.eventId;
  let event = await Event.findById(eventId);
  if (!event) return next(new ErrorResponse(`Event is not found`, 404));

  const features = new APIFeatures(
    EventAttendee.find({ event: eventId }).populate({
      path: 'user',
      select: 'name'
    }),
    req.query
  )
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const attendees = await features.query;
  res
    .status(200)
    .json({ success: true, data: { attendees }, results: attendees.length });
});

exports.addAttendee = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;
  const eventId = req.params.eventId;

  const event = await Event.findById(eventId);
  if (!event) return next(new ErrorResponse(`Event is not found`, 404));

  let attendee = await EventAttendee.findOne({ user: userId, event: eventId });
  if (attendee)
    return next(new ErrorResponse(`You already join this event`, 400));

  if (event.countAttendees && event.countAttendees === event.maxAttendees) {
    return next(new ErrorResponse(`Slot is now full`, 400));
  }

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
