const express = require('express');
const {
  createCategory,
  getCategories
} = require('../controllers/categoryController');

const router = express.Router();

router
  .route('/')
  .get(getCategories)
  .post(createCategory);

module.exports = router;
