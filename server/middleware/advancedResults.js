const advancedRequests = (model, populate) => async (req, res, next) => {
  let query;
  const reqQuery = { ...req.query };

  //  fields to exclude
  const removeFields = ['select', 'sort', 'limit', 'page'];
  removeFields.forEach(param => delete reqQuery[param]);

  let queryStr = JSON.stringify(reqQuery);

  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);

  query = model.find(JSON.parse(queryStr));

  //  select
  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ');
    query = query.select(fields);
  }

  //  sort
  if (req.query.sort) {
    const sort = req.query.sort.split(',').join(' ');
    query = query.sort(sort);
  } else {
    query = query.sort({ createdAt: 'desc' });
  }

  //  pagination
  const page = req.query.page ? parseInt(req.query.page) : 1;
  const limit = req.query.limit ? parseInt(req.query.limit) : 20;
  const start = (page - 1) * limit;
  const end = page * limit;
  const total = await model.countDocuments();

  query = query.skip(start).limit(limit);

  if (populate) {
    query = query.populate(populate);
  }

  const results = await query;

  //  pagination result
  const pagination = {};
  if (end < total) {
    pagination.next = {
      page: page + 1,
      limit
    };
  }
  if (start > 0) {
    pagination.prev = {
      page: page - 1,
      limit
    };
  }

  res.advancedResults = {
    success: true,
    data: results,
    count: results.length,
    pagination
  };
  next();
};

module.exports = advancedRequests;
