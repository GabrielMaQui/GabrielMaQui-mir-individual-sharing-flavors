import jwt from 'jsonwebtoken';

import type { PayloadType } from './auth.type';

const SECRET = 'mysecretkey';

export function signToken(payload: PayloadType) {
  const token = jwt.sign(payload, SECRET, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
  return token;
}

export function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, SECRET);

    return decoded;
  } catch (error) {
    return null;
  }
}

export function decodeToken(token: string): PayloadType | null {
  try {
    const decoded = jwt.verify(token, SECRET) as PayloadType;
    return decoded;
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
}
