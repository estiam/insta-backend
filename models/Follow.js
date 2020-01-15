const mongoose = require('mongoose');
const User = require('./User');
const Schema = mongoose.Schema;

const FollowSchema = new Schema({
  follower: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  followed: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
});

module.exports = mongoose.model('Follow', FollowSchema);