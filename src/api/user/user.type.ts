import type mongoose from 'mongoose';

export interface IUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number?: string;
  description?: string;
  photo_url?: string;
  favorites?: string[]; // Suponiendo que es un array de strings
  role: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserDocument extends IUser, mongoose.Document {}
