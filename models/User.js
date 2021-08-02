const { Schema, model } = require('mongoose');
const moment = require('moment');

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: 'Username is requiered!',
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: 'Email is already in use!',
    match: [/.+@.+\,.+/]
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  userCreated: {
    type: Date,
    default: Date.now
  }
  },
  {
    toJSON: {
    virtuals: true 
    }
  },
);

UserSchema.virtual('friendCount').get(function() {
  return this.friends.length
});

const User = model('User', UserSchema);

module.exports = User;