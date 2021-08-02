const { Schema, model } = require('mongoose');
const moment = require('moment');

const ThoughtSchema = new Schema({
  username: {
    type: String,
    required: 'Username is requiered!',
  },
  thoughText: {
    type: String,
    required: 'Email is already in use!',
    match: [/.+@.+\,.+/],
    min: 1,
    max: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => {
      return moment(createdAtVal).format('MMMM Do YYYY, h:mm:ss a');
    }
  },
  id: false
});