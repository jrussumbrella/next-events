const mongoose = require('mongoose');
const Group = require('../models/Group');
const User = require('../models/User');

const { ObjectId } = mongoose.Schema.Types;

const GroupMemberSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    group: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Group',
      required: true
    }
  },
  { timestamps: true }
);

GroupMemberSchema.statics.countMembers = async function(groupId) {
  const stats = await this.aggregate([
    {
      $match: { group: groupId }
    },
    {
      $group: {
        _id: '$group',
        count: { $sum: 1 }
      }
    }
  ]);

  if (stats.length > 0) {
    await Group.findByIdAndUpdate(groupId, { countMembers: stats[0].count });
  } else {
    await Group.findByIdAndUpdate(groupId, { countMembers: 0 });
  }
};

// executes when user add to group
GroupMemberSchema.statics.toggleUserGroup = async function(groupId, userId) {
  const user = await User.findById(userId);

  // check whether group is already in users collection
  const isGroupExist = user.groups.find(
    group => group.toString() === groupId.toString()
  );
  if (isGroupExist) {
    await User.findOneAndUpdate(
      { _id: userId },
      { $pull: { groups: groupId } }
    );
  } else {
    await User.findOneAndUpdate(
      { _id: userId },
      { $addToSet: { groups: groupId } }
    );
  }
};

GroupMemberSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'user',
    select: 'name'
  });
  next();
});

GroupMemberSchema.post('save', function() {
  this.constructor.countMembers(this.group);
  this.constructor.toggleUserGroup(this.group, this.user);
});

GroupMemberSchema.post('remove', function() {
  this.constructor.countMembers(this.group);
  this.constructor.toggleUserGroup(this.group, this.user);
});

GroupMemberSchema.index({ user: 1, group: 1 }, { unique: true });

module.exports = mongoose.model('GroupMember', GroupMemberSchema);
