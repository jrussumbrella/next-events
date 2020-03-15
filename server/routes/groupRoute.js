const express = require('express');
const {
  getGroups,
  getGroup,
  createGroup,
  deleteGroup,
  updateGroup,
  getMembers,
  addMember,
  removeMember
} = require('../controllers/groupController');
const { protect } = require('../middleware/auth');
const eventRoutes = require('./eventRoute');

const router = express.Router({ mergeParams: true });

router.use('/:groupId/events', eventRoutes);

router
  .route('/')
  .get(getGroups)
  .post(protect, createGroup);

router
  .route('/:id')
  .get(getGroup)
  .delete(protect, deleteGroup)
  .patch(protect, updateGroup);

router
  .route('/:groupId/members')
  .get(getMembers)
  .post(protect, addMember)
  .delete(protect, removeMember);

module.exports = router;
