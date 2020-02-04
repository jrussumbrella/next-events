const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Event = require("../models/Event");

exports.getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find();
  res.status(200).json({ success: true, data: events, count: events.length });
});

exports.getEvent = asyncHandler(async (req, res, next) => {
  const event = await Event.findById(req.params.id);
  if (!event) return next(new ErrorResponse(`Event not found`, 404));
  res.status(200).json({ success: true, data: event });
});

exports.createEvent = asyncHandler(async (req, res) => {
  const event = await Event.create(req.body);
  res.status(200).json({ success: true, data: event });
});

exports.deleteEVent = asyncHandler(async (req, res) => {
  const event = await Event.findByIdAndDelete(req.params.id);
  if (!event) return next(new ErrorResponse(`Event not found`, 404));
  res.status(200).json({ success: true, data: {} });
});

exports.updateEvent = asyncHandler(async (req, res) => {
  const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!event) return next(new ErrorResponse(`Event not found`, 404));
  res.status(200).json({ success: true, data: event });
});
