const mongoose = require("mongoose");

const EventSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name is required"],
      unique: true,
      trim: true
    },
    slug: String,
    description: {
      type: String,
      require: [true, "Description is required"],
      maxlength: [500, "Description can not be more than 500 characters"]
    },
    address: {
      type: String,
      required: [true, "Address is required"]
    },
    location: {
      type: {
        type: String,
        enum: ["Point"]
      },
      coordinates: {
        type: [Number],
        index: "2dsphere"
      },
      formattedAddress: String,
      street: String,
      city: String,
      state: String,
      zipcode: String,
      country: String
    },
    website: {
      type: String,
      match: [
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        "Please use a valid URL with HTTP or HTTPS"
      ]
    },
    phone: {
      type: String,
      maxlength: [20, "Phone number can not be longer than 20 characters"]
    },
    email: {
      type: String,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email"
      ]
    },
    imageURL: {
      type: String,
      default: "no-photo.jpg"
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
