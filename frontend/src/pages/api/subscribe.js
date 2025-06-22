import dbConnect from './utils/dbConnect';
import Subscription from './models/Subscription';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'POST') {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required.' });
    }
    try {
      const existingSubscription = await Subscription.findOne({ email });
      if (existingSubscription) {
        return res.status(400).json({ success: false, message: 'You are already subscribed!' });
      }
      const newSubscription = new Subscription({ email });
      await newSubscription.save();
      res.status(200).json({ success: true, message: 'Subscription successful!' });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Failed to subscribe.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
