const Category = require('../models/Category');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const APIFeatures = require('../utils/apiFeatures');

exports.createCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.create(req.body);
  res.status(200).json({ success: false, data: { category } });
});

exports.getCategories = asyncHandler(async (req, res, next) => {
  const features = new APIFeatures(Category.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const categories = await features.query;

  res
    .status(200)
    .json({ success: false, data: { categories }, results: categories.length });
});
