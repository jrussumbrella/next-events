const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

module.exports = {
  geocoder_api_key: process.env.GEOCODER_API_KEY
};
