import type { Request, Response } from 'express';
import { getOneUserEmail } from '../../api/user/user.service';
import { generateRandomToken, hashPassword } from '../utils/crypto';
import { comparePassword } from '../utils/crypto';
import { createAuthResponse } from './local.service';

export async function loginHandler(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const user = await getOneUserEmail(email);

    if (!user) {
      res.status(400).json({
        message: 'User not found or not active',
      });
    } else {
      // Compare password
      const isMatch = await comparePassword(password, user.password);
      if (!isMatch) {
        res.status(400).json({
          message: 'Email or password is incorrect',
        });
      } else {
        const response = createAuthResponse(user);
        const responseWithId = { ...response, _id: user.id };
        res.json(responseWithId);
      }
    }
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
}
