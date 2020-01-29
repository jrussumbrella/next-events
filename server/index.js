const express = require("express");
const eventRoute = require("./routes/eventRoute");

const app = express();

//middlewares
app.use(express.json());

//routes
app.use("/api/v1/events", eventRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
