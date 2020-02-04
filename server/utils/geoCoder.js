var NodeGeocoder = require("node-geocoder");
const { geocoder_api_key } = require("../config");

const options = {
  provider: "mapquest",
  // Optional depending on the providers
  httpAdapter: "https", // Default
  apiKey: geocoder_api_key, // for Mapquest, OpenCage, Google Premier
  formatter: null // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
