const express = require("express");
const {
  getEvents,
  getNearbyEvents,
  createEvent,
  getEvent,
  deleteEVent,
  updateEvent
} = require("../controllers/eventController");

const router = express.Router();

router.route("/nearby/:zipcode/:distance").get(getNearbyEvents);

router
  .route("/")
  .get(getEvents)
  .post(createEvent);

router
  .route("/:id")
  .get(getEvent)
  .delete(deleteEVent)
  .patch(updateEvent);

module.exports = router;
