const mongoose = require('mongoose');
const slugify = require('slugify');
const geoCoder = require('../utils/geoCoder');

const GroupSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, 'Name is required'],
      unique: true,
      trim: true
    },
    slug: String,
    description: {
      type: String,
      require: [true, 'Description is required'],
      maxlength: [500, 'Description can not be more than 500 characters']
    },
    address: {
      type: String,
      required: [true, 'Address is required']
    },
    location: {
      type: {
        type: String,
        enum: ['Point']
      },
      coordinates: {
        type: [Number],
        index: '2dsphere'
      },
      formattedAddress: String,
      street: String,
      city: String,
      state: String,
      zipcode: String,
      country: String
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
    },
    image_url: {
      type: String
    },
    count_members: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// add slug for group's name
GroupSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// add geocode for location
GroupSchema.pre('save', async function(next) {
  const location = await geoCoder.geocode(this.address);
  this.location = {
    type: 'Point',
    coordinates: [location[0].longitude, location[0].latitude],
    formattedAddress: location[0].formattedAddress,
    street: location[0].streetName,
    city: location[0].city,
    state: location[0].stateCode,
    zipcode: location[0].zipcode,
    country: location[0].countryCode
  };
  this.address = undefined;
  next();
});

// Cascade delete events when group is deleted
GroupSchema.pre('remove', async function(next) {
  await this.model('Event').remove();
  next();
});

//Reverse populate with virtuals
// GroupSchema.virtual('events', {
//   ref: 'Event',
//   localField: '_id',
//   foreignField: 'group',
//   justOne: false
// });

module.exports = mongoose.model('Group', GroupSchema);
