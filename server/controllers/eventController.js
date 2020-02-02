const Event = require("../models/Event");

exports.getEvents = async (req, res) => {
  const events = await Event.find();
  res.status(200).json({ success: true, data: events, count: events.length });
};

exports.getEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event)
      return res
        .status(400)
        .json({ success: false, message: "Cannot find this event" });
    res.status(200).json({ success: true, data: event });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Cannot fetch this event" });
  }
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

exports.deleteEVent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event)
      return res
        .status(400)
        .json({ success: false, message: "Cannot find event" });
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Cannot delete an event" });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!event)
      return res
        .status(400)
        .json({ success: false, message: "Cannot find event" });
    res.status(200).json({ success: true, data: event });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Error in updating event" });
  }
};
