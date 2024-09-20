import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';
import bodyParser from 'body-parser';
import bcrypt from 'bcryptjs';
import helmet from 'helmet';  // Added for security
import Registration from './models/registration.js';
import ContactForm from './models/ContactForm.js';

config();
const app = express();
const PORT = process.env.PORT || 2030;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/TSA';

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());  // Added for security

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);  // Exit process if DB connection fails
  });

// Registration route
app.post('/register', async (req, res) => {
  const { firstName, lastName, email, password, age, designation } = req.body;

  try {
    const existingUser = await Registration.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user1 = new Registration({ firstName, lastName, email, password: hashedPassword, age, designation });
    await user1.save();

    res.status(200).json({ message: 'Registration successful', user: user1 });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login validation
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Registration.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// Contact form route
app.post('/contact', async (req, res) => {
  const formData = req.body;

  try {
    const newFormEntry = new ContactForm(formData);
    await newFormEntry.save();

    res.status(200).json({ message: 'Form data saved successfully!' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ message: 'Failed to submit form data.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
