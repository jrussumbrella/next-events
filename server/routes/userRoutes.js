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
const { protect, authorize } = require('../middleware/auth');
const eventRoutes = require('./eventRoutes');
const groupRoutes = require('./groupRoutes');

const router = express.Router({ mergeParams: true });

router.use('/:userId/events', eventRoutes);
router.use('/:userId/groups', groupRoutes);

router
  .route('/')
  .get(protect, authorize('admin'), getUsers)
  .post(protect, authorize('admin'), createUser);

router
  .route('/:id')
  .get(getUser)
  .put(protect, authorize('admin'), updateUser)
  .delete(protect, authorize('admin'), deleteUser);

router.route('/:userId/created-groups').get(getCreatedGroups);
router.route('/:userId/joined-groups').get(getJoinedGroups);

module.exports = router;
