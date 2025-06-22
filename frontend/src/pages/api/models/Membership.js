import mongoose from 'mongoose';

const membershipSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  membershipType: String,
  message: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.models.Membership || mongoose.model('Membership', membershipSchema);
