import mongoose, { type Schema } from 'mongoose';
import type { IUserDocument } from './user.type';

const userSchema: Schema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone_number: { type: String },
    description: { type: String },
    photo_url: {
      type: String,
      default:
        'https://res.cloudinary.com/hotelapp/image/upload/v1701376634/user_photos/lkgygchjqf4gqjow6wqj.webp',
    },
    favorites: { type: Array, default: [] },
    role: { type: String, required: true },
  },
  { timestamps: true },
);

const User = mongoose.model<IUserDocument>('User', userSchema, 'user');
export default User;
