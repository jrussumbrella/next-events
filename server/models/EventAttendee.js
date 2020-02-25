const mongoose = require('mongoose');

const EventAttendeeSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('EventAttendee', EventAttendeeSchema);
