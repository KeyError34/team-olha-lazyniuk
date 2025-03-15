import { Schema, model, Document } from 'mongoose';

// Define IUser interface (this is for Mongoose)
export interface IUser extends Document {
  userName: string;
  password: string;
  email: string;
  phoneNumber?: string;
  firstName: string;
  lastName: string;
  role?: 'admin' | 'user';
}

// Mongoose schema definition
const userSchema = new Schema<IUser>(
  {
    userName: { type: String, required: true, trim: true, minlength: 4, maxlength: 20 },
    password: { type: String, required: true, trim: true, minlength: 8 },
    email: { type: String, required: true, trim: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    phoneNumber: { type: String, trim: true },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    role: { type: String, required: true, default: 'user' },
  },
  { timestamps: true },
);

// Export Mongoose model (not the User domain model)
export const UserModel = model<IUser>('User', userSchema);
