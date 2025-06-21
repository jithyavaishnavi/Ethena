const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  membershipType: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Membership = mongoose.model('Membership', membershipSchema);

module.exports = Membership;
