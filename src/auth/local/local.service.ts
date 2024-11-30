import type { IUser } from '../../api/user/user.type';
import { signToken } from '../auth.service';

export function createAuthResponse(input: IUser) {
  const payload = {
    id: input.id,
    email: input.email,
  };

  const token = signToken(payload);

  const profile = {
    fullName: `${input.first_name} ${input.last_name}`,
    avatar: input.photo_url,
    role: input.role,
    email: input.email,
    id: input.id,
  };

  return {
    token,
    profile,
  };
}
