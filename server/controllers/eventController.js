exports.getEvents = (req, res) => {
  res.status(200).json({ success: true, message: "Get all events" });
};

exports.getEvent = (req, res) => {
  res.status(200).json({ success: true, message: "Get single event" });
};

exports.createEvent = (req, res) => {
  res.status(200).json({ success: true, message: "Create an event" });
};

exports.deleteEVent = (req, res) => {
  res.status(200).json({ success: true, message: "Delete an event" });
};

exports.updateEvent = (req, res) => {
  res.status(200).json({ success: true, message: "Update an event" });
};
