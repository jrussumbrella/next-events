const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = req => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return User.findById(decoded.id);
  } catch (error) {
    return null;
  }
};
