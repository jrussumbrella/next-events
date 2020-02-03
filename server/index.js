const express = require("express");
const eventRoute = require("./routes/eventRoute");
const connectDb = require("./utils/connectDb");
const dotenv = require("dotenv");
const errorHandler = require("./middleware/error");

// env vars
dotenv.config({ path: "./config/config.env" });

connectDb();

const app = express();

//middlewares
app.use(express.json());

//routes
app.use("/api/v1/events", eventRoute);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
