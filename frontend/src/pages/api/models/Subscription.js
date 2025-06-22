import dbConnect from '../../lib/dbConnect';
import Subscription from '../../models/Subscription';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const subscription = new Subscription(req.body);
      await subscription.save();
      res.status(201).json({ success: true });
    } catch (error) {
      console.error('Error saving subscription:', error);
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
