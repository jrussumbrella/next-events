const express = require("express");
const {
  getEvents,
  getNearbyEvents,
  createEvent,
  getEvent,
  deleteEVent,
  updateEvent
} = require("../controllers/eventController");
const Event = require("../models/Event");
const advancedResults = require("../middleware/advancedResults");

const router = express.Router({ mergeParams: true });

const { protect } = require("../middleware/auth");

router.route("/nearby/:zipcode/:distance").get(getNearbyEvents);

router
  .route("/")
  .get(
    advancedResults(Event, {
      path: "group",
      select: "name description"
    }),
    getEvents
  )
  .post(protect, createEvent);

router
  .route("/:id")
  .get(getEvent)
  .delete(protect, deleteEVent)
  .patch(protect, updateEvent);

module.exports = router;
