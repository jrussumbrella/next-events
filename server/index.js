const express = require('express');
const dotenv = require('dotenv');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const eventRoute = require('./routes/eventRoute');
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const groupRoute = require('./routes/groupRoute');
const categoryRoutes = require('./routes/categoryRoutes');
const connectDb = require('./utils/connectDb');
const errorHandler = require('./middleware/error');

// env vars
dotenv.config({ path: './config/config.env' });

connectDb();

const app = express();

app.use(express.json());
app.use(cookieParser());
// sanitize data
app.use(mongoSanitize());

// add security headers
app.use(helmet());

// prevent xss attacks
app.use(xss());

// rate limiters
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Enable cors
app.use(cors());

//  routes
app.use('/api/v1/events', eventRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/groups', groupRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/category', categoryRoutes);

//  error middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
