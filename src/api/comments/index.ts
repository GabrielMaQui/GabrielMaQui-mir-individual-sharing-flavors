import { Router } from 'express';
import { hasRole, isAuthenticated } from '../../auth/auth.controller';
import {
  createCommentHandler,
  deleteCommentHandler,
  getAllCommentsHandler,
  getCommentsByRecipeIdHandler,
  updateCommentHandler,
} from './comment.controller';

const router = Router();
router.get('/:id', getCommentsByRecipeIdHandler);
router.post('/', createCommentHandler);
router.get('/', getAllCommentsHandler);
router.patch('/:id', hasRole(['USER', 'ADMINISTRATOR']), updateCommentHandler);
router.delete('/:id', deleteCommentHandler);

export default router;
