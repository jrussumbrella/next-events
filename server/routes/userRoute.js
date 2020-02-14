const express = require('express');
const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  getCreatedGroups,
  getJoinedGroups
} = require('../controllers/userController');
const User = require('../models/User');
const advancedResults = require('../middleware/advancedResults');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(protect, authorize('admin'), advancedResults(User), getUsers)
  .post(protect, authorize('admin'), createUser);

router
  .route('/:id')
  .get(getUser)
  .put(protect, authorize('admin'), updateUser)
  .delete(protect, authorize('admin'), deleteUser);

router.route('/:userId/created-groups').get(getCreatedGroups);
router.route('/:userId/joined-groups').get(getJoinedGroups);

module.exports = router;
