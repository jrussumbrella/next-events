const mongoose = require('mongoose');
const Event = require('./Event');
const User = require('./User');

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

EventAttendeeSchema.statics.countAttendees = async function(eventId) {
  const stats = await this.aggregate([
    {
      $match: { event: eventId }
    },
    {
      $group: {
        _id: '$event',
        count: { $sum: 1 }
      }
    }
  ]);

  if (stats.length > 0) {
    await Event.findByIdAndUpdate(eventId, { count_attendees: stats[0].count });
  } else {
    await Event.findByIdAndUpdate(eventId, { count_attendees: 0 });
  }
};

// executes when user add to group
EventAttendeeSchema.statics.toggleUserEvent = async function(eventId, userId) {
  const user = await User.findById(userId);

  // check whether group is already in users collection
  const isEventExist = user.events.find(
    event => event.toString() === eventId.toString()
  );

  if (isEventExist) {
    await User.findOneAndUpdate(
      { _id: userId },
      { $pull: { events: eventId } }
    );
  } else {
    await User.findOneAndUpdate(
      { _id: userId },
      { $addToSet: { events: eventId } }
    );
  }
};

EventAttendeeSchema.post('save', function() {
  this.constructor.countAttendees(this.event);
  this.constructor.toggleUserEvent(this.event, this.user);
});

EventAttendeeSchema.post('remove', function() {
  this.constructor.countAttendees(this.event);
  this.constructor.toggleUserEvent(this.event, this.user);
});

module.exports = mongoose.model('EventAttendee', EventAttendeeSchema);
