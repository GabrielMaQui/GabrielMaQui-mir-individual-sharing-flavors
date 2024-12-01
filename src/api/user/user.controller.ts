import type { NextFunction, Request, Response } from 'express';
import { AppError } from '../../helpers/errors';
import {
  createUser,
  getAllUsers,
  getOneUser,
  updateUser,
} from './user.service';

export const getAllUsersHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getOneUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = await getOneUser(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const createUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const updateUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = await updateUser(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
