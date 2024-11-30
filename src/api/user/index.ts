import { Router } from 'express';
import { hasRole, isAuthenticated } from '../../auth/auth.controller';
import {
  createUserHandler,
  getAllUsersHandler,
  getOneUserHandler,
  updateUserHandler,
} from './user.controller';

const router = Router();
router.get('/', getAllUsersHandler);
router.post('/', createUserHandler);
router.patch('/:id', hasRole(['USER', 'ADMINISTRATOR']), updateUserHandler);
router.get('/:id', getOneUserHandler);


export default router;
