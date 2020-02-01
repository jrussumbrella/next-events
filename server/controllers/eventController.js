const Event = require("../models/Event");

exports.getEvents = async (req, res) => {
  const events = await Event.find();
  res.status(200).json({ success: true, events });
};

exports.getEvent = (req, res) => {
  res.status(200).json({ success: true, message: "Get single event" });
};

exports.createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(200).json({ success: true, data: event });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Cannot create an event" });
  }
};

exports.deleteEVent = (req, res) => {
  res.status(200).json({ success: true, message: "Delete an event" });
};

exports.updateEvent = (req, res) => {
  res.status(200).json({ success: true, message: "Update an event" });
};
