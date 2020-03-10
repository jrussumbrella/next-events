const mongoose = require('mongoose');
const slugify = require('slugify');

const CategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Category Name is required'],
      unique: true,
      trim: true
    },
    slug: String
  },
  {
    timestamps: true
  }
);

// add slug for category's name
CategorySchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

module.exports = mongoose.model('Category', CategorySchema);
