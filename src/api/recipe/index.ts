import { Router } from 'express';
import { hasRole, isAuthenticated } from '../../auth/auth.controller';
import {
  createRecipeHandler,
  deleteRecipeHandler,
  getAllRecipesHandler,
  getOneRecipeHandler,
  updateRecipeHandler,
} from './recipe.controller';

const router = Router();
router.get('/:id', getOneRecipeHandler);
router.post('/', createRecipeHandler);
router.get('/', getAllRecipesHandler);
router.patch('/:id', hasRole(['USER', 'ADMINISTRATOR']), updateRecipeHandler);
router.delete('/:id', deleteRecipeHandler);

export default router;
