const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password_hash: String,
  avatar : String, // Base64
});

module.exports = mongoose.model('User', UserSchema);