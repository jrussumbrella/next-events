const mongoose = require('mongoose');

const DB =
  process.env.NODE_ENV == 'production'
    ? process.env.MONGO_URI
    : process.env.MONGO_LOCAL;

const connectDb = async () => {
  const conn = await mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDb;
