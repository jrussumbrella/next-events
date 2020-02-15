const express = require('express');
const {
  getEvents,
  getNearbyEvents,
  createEvent,
  getEvent,
  deleteEVent,
  updateEvent,
  attendEvent
} = require('../controllers/eventController');
const Event = require('../models/Event');
const advancedResults = require('../middleware/advancedResults');
const { protect } = require('../middleware/auth');

const router = express.Router({ mergeParams: true });

router.route('/nearby/:zipcode/:distance').get(getNearbyEvents);

router
  .route('/')
  .get(
    advancedResults(Event, {
      path: 'group',
      select: 'name description'
    }),
    getEvents
  )
  .post(protect, createEvent);

router
  .route('/:id')
  .get(getEvent)
  .delete(protect, deleteEVent)
  .patch(protect, updateEvent);

router.route('/:eventId/attend').post(protect, attendEvent);

module.exports = router;
