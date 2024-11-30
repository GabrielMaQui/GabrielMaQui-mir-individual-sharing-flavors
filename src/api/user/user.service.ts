import bcrypt from 'bcrypt';
import User from './user.model';
import type { IUser } from './user.type';

export const getAllUsers = async () => {
  return await User.find();
};

export const getOneUserService = async (user_id: string) => {
  return await User.findById(user_id);
};

export const createUserService = async (userData: IUser) => {
  const { email, password } = userData;

  // Verificar si el usuario ya existe
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new Error('User already exists');
  }

  // Encriptar la contraseña
  const passwordHash = await bcrypt.hash(password, 15);

  // Crear y guardar el usuario
  const newUser = new User({ ...userData, password: passwordHash });
  return await newUser.save();
};

export const updateUserService = async (user_id: string, userData: IUser) => {
  const userUpdated = await User.findByIdAndUpdate(user_id, userData, {
    new: true,
  });
  if (!userUpdated) {
    throw new Error('User not found');
  }
  return userUpdated;
};
