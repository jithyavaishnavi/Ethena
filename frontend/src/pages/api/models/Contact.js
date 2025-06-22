import dbConnect from '../../lib/dbConnect';
import Contact from '../../models/Contact';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const contact = new Contact(req.body);
      await contact.save();
      res.status(201).json({ success: true });
    } catch (error) {
      console.error('Error saving contact:', error);
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
