const mongoose = require("mongoose");

const EventSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name is required"]
    },
    description: {
      type: String,
      require: [true, "Description is required"],
      maxlength: [500, "Description can not be more than 500 characters"]
    },
    address: {
      type: String,
      required: [true, "Address is required"]
    },
    attendees: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Event", EventSchema);
