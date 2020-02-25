const mongoose = require('mongoose');
const Group = require('../models/Group');

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

  if (stats.length > 0)
    await Group.findByIdAndUpdate(groupId, { countMembers: stats[0].count });
};

GroupMemberSchema.post('save', function() {
  this.constructor.countMembers(this.group);
});

GroupMemberSchema.post('remove', function() {
  this.constructor.countMembers(this.group);
});

module.exports = mongoose.model('GroupMember', GroupMemberSchema);
