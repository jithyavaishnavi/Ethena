import dbConnect from './utils/dbConnect';
import Membership from './models/Membership';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'POST') {
    const { fullName, email, phone, membershipType, message } = req.body;
    try {
      const newMembership = new Membership({ fullName, email, phone, membershipType, message });
      await newMembership.save();
      res.status(200).json({ success: true, message: 'Membership saved!' });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Failed to save membership.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
