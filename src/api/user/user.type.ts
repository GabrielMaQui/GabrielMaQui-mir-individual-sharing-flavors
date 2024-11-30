import mongoose from 'mongoose';

const userSchema = {
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  phone_number: String,
  description: String,
  photo_url: {
    type: String,
    default:
      'https://res.cloudinary.com/hotelapp/image/upload/v1701376634/user_photos/lkgygchjqf4gqjow6wqj.webp',
  },
  favorites: { type: Array, default: [] },
  role: String,
};

const User = mongoose.model(
  'User',
  new mongoose.Schema(userSchema, { timestamps: true }),
  'user',
);

export default User;
