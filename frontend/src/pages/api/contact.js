import dbConnect from './utils/dbConnect';
import Contact from './models/Contact';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    try {
      const newContact = new Contact({ name, email, message });
      await newContact.save();
      res.status(200).json({ success: true, message: 'Message received & saved!' });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Failed to save message.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
