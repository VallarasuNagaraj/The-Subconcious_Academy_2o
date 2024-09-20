import mongoose  from "mongoose";
import { Schema as _Schema } from 'mongoose';
// eslint-disable-next-line react-refresh/only-export-components
const Schema = _Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// eslint-disable-next-line react-refresh/only-export-components
const userModel =  mongoose.model('user', userSchema);
export default userModel
