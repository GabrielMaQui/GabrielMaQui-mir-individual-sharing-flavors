import bcrypt from 'bcrypt';
import { BadRequestError, NotFoundError } from '../../helpers/errors';
import User from './user.model';
import type { IUser } from './user.type';

export const getAllUsers = async () => {
  const users = await User.find();
  if (!users.length) {
    throw new NotFoundError('No users found');
  }
  return users;
};

export const getOneUser = async (userId: string) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new NotFoundError(`User with ID ${userId} not found`);
  }
  return user;
};

export const createUser = async (userData: IUser) => {
  const { email, password } = userData;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new BadRequestError('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 15);
  const newUser = new User({ ...userData, password: hashedPassword });
  return await newUser.save();
};

export const updateUser = async (userId: string, userData: IUser) => {
  const updatedUser = await User.findByIdAndUpdate(userId, userData, {
    new: true,
  });
  if (!updatedUser) {
    throw new NotFoundError(`User with ID ${userId} not found`);
  }
  return updatedUser;
};
