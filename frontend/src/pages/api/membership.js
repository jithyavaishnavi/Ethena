import dbConnect from './utils/dbConnect';
import Membership from './models/Membership';

export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Membership form data:', req.body);
    // TODO: Save to MongoDB here if you want
    res.status(200).json({ success: true });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
