import mongoose from 'mongoose';

const contactFormSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  company: { type: String, required: true },
  jobTitle: { type: String, required: true },
  phone: { type: String, required: true },
  country: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
});

const ContactForm = mongoose.model('ContactForm', contactFormSchema);

export default ContactForm;
