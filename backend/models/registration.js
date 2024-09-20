import { Schema, model } from 'mongoose';

// Create a User schema
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  designation: { type: String, required: true },
});

// Create and export the User model
const Registration = model('Registration', userSchema);
export default Registration;