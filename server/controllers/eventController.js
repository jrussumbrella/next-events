const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Event = require("../models/Event");

exports.getEvents = asyncHandler(async (req, res) => {
  let query;
  const reqQuery = { ...req.query };

  //fields to exclude
  const removeFields = ["select", "sort", "limit", "page"];
  removeFields.forEach(param => delete reqQuery[param]);

  let queryStr = JSON.stringify(reqQuery);

  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);

  query = Event.find(JSON.parse(queryStr));

  //select
  if (req.query.select) {
    const fields = req.query.select.split(",").join(" ");
    query = query.select(fields);
  }

  //sort
  if (req.query.sort) {
    const sort = req.query.sort.split(",").join(" ");
    query = query.sort(sort);
  } else {
    query = query.sort({ createdAt: "desc" });
  }

  //pagination
  const page = req.query.page ? parseInt(req.query.page) : 1;
  const limit = req.query.limit ? parseInt(req.query.limit) : 20;
  const start = (page - 1) * limit;
  const end = page * limit;
  const total = await Event.countDocuments();

  query = query.skip(start).limit(limit);

  const events = await query;

  //pagination result
  const pagination = {};
  if (end < total) {
    pagination.next = {
      page: page + 1,
      limit
    };
  }
  if (start > 0) {
    pagination.prev = {
      page: page - 1,
      limit
    };
  }

  res
    .status(200)
    .json({ success: true, data: events, count: events.length, pagination });
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
