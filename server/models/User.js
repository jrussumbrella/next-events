const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email'
      ]
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 6,
      select: false
    },
    imageURL: {
      type: String
    },
    role: {
      type: String,
      default: 'user',
      enum: ['admin', 'user']
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    groups: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
      }
    ]
  },
  {
    timestamps: true
  }
);

// encrpyt password
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// generate jwt token
UserSchema.methods.getSignedJwtToken = function() {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: '7d'
  });
};

// check if match password
UserSchema.methods.matchPassword = async function(passwordInput) {
  return await bcrypt.compare(passwordInput, this.password);
};

// generate and hash forgot password token
UserSchema.methods.getResetPasswordToken = async function() {
  // generate token
  const resetToken = crypto.randomBytes(20).toString('hex');
  // hash token and set to reset password token
  this.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  // set expiration date
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

module.exports = mongoose.model('User', UserSchema);
