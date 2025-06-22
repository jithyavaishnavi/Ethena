import dbConnect from '../../lib/dbConnect';
import Membership from '../../models/Membership';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const membership = new Membership(req.body);
      await membership.save();
      res.status(201).json({ success: true });
    } catch (error) {
      console.error('Error saving membership:', error);
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
