const express = require('express');
const {
  getEvents,
  getNearbyEvents,
  createEvent,
  getEvent,
  deleteEVent,
  updateEvent,
  addAttendee,
  removeAttendee,
  getAttendees
} = require('../controllers/eventController');
const { protect } = require('../middleware/auth');

const router = express.Router({ mergeParams: true });

router.route('/nearby/:zipcode/:distance').get(getNearbyEvents);

router
  .route('/')
  .get(getEvents)
  .post(protect, createEvent);

router
  .route('/:id')
  .get(getEvent)
  .delete(protect, deleteEVent)
  .patch(protect, updateEvent);

router
  .route('/:eventId/attendees')
  .get(getAttendees)
  .post(protect, addAttendee)
  .delete(protect, removeAttendee);

module.exports = router;
