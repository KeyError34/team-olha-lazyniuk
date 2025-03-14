import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  userName: string;
  password: string;
  email: string;
  phonNumber?: string;
  firstName: string;
  lastName: string;
  role?: 'admin' | 'user';
}

const userSchema = new Schema<IUser>(
  {
    userName: { type: String, trim: true, required: true, minlength: 4, maxlength: 20 },
    password: { type: String, trim: true, required: true, minlength: 8 },
    phonNumber: { type: String, trim: true, required: false },
    email: { type: String, trim: true, required: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    firstName: { type: String, trim: true, required: true },
    lastName: { type: String, trim: true, required: true },
    role: { type: String, trim: true, required: true, default: 'user' },
  },
  {
    timestamps: true,
  },
);
export const User = model<IUser>('User', userSchema);
