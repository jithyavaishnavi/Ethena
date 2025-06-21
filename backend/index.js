const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Contact = require('./models/Contact');
const Membership = require('./models/Membership');
const Subscription = require('./models/Subscription');

const app = express();

mongoose.connect('mongodb://localhost:27017/contactdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, this is the backend!');
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  console.log('📩 New contact message:', { name, email, message });

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.json({ success: true, message: 'Message received & saved!' });
  } catch (err) {
    console.error('❌ Error saving contact message:', err);
    res.status(500).json({ success: false, message: 'Failed to save message.' });
  }
});

app.post('/api/membership', async (req, res) => {
  const { fullName, email, phone, membershipType, message } = req.body;

  console.log('📩 New membership request:', { fullName, email, phone, membershipType, message });

  try {
    const newMembership = new Membership({
      fullName,
      email,
      phone,
      membershipType,
      message,
    });

    await newMembership.save();

    res.json({ success: true, message: 'Membership saved!' });
  } catch (err) {
    console.error('❌ Error saving membership:', err);
    res.status(500).json({ success: false, message: 'Failed to save membership.' });
  }
});

app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  console.log('📩 New subscription:', { email });

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

    res.json({ success: true, message: 'Subscription successful!' });
  } catch (err) {
    console.error('❌ Error saving subscription:', err);
    res.status(500).json({ success: false, message: 'Failed to subscribe.' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
