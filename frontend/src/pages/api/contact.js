import dbConnect from './utils/dbConnect';
import Contact from './models/Contact';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'POST') {
    console.log('Form Data:', req.body);
    // TODO: Save to MongoDB if you want here
    res.status(200).json({ success: true });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
