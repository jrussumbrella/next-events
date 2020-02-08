const express = require("express");
const {
  getGroups,
  getGroup,
  createGroup,
  deleteGroup,
  updateGroup
} = require("../controllers/groupController");
const { protect } = require("../middleware/auth");
const Group = require("../models/Group");
const advancedResults = require("../middleware/advancedResults");
const eventRoutes = require("./eventRoute");

const router = express.Router();

router.use("/:groupId/events", eventRoutes);

router
  .route("/")
  .get(advancedResults(Group, "events"), getGroups)
  .post(protect, createGroup);

router
  .route("/:id")
  .get(getGroup)
  .delete(protect, deleteGroup)
  .patch(protect, updateGroup);

module.exports = router;
