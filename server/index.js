const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const eventRoute = require("./routes/eventRoute");
const authRoute = require("./routes/authRoute");
const groupRoute = require("./routes/groupRoute");
const connectDb = require("./utils/connectDb");
const errorHandler = require("./middleware/error");

// env vars
dotenv.config({ path: "./config/config.env" });

connectDb();

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/v1/events", eventRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/groups", groupRoute);

//error middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
