import type { Request, Response } from 'express';
import { extractErrorMessage } from '../../helpers/errors';
import * as RecipeService from './recipe.service';

export const getAllRecipesHandler = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    const recipes = await RecipeService.getAllRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: extractErrorMessage(error) });
  }
};

export const getOneRecipeHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;
    const recipe = await RecipeService.getOneRecipe(id);
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({ error: 'Recipe not found' });
    }
  } catch (error) {
    res.status(500).json({ error: extractErrorMessage(error) });
  }
};

export const createRecipeHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const recipe = await RecipeService.createRecipe(req.body);
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ error: extractErrorMessage(error) });
  }
};

export const updateRecipeHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedRecipe = await RecipeService.updateRecipe(id, req.body);
    if (updatedRecipe) {
      res.status(200).json(updatedRecipe);
    } else {
      res.status(404).json({ error: 'Recipe not found' });
    }
  } catch (error) {
    res.status(500).json({ error: extractErrorMessage(error) });
  }
};

export const deleteRecipeHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedRecipe = await RecipeService.deleteRecipe(id);
    if (deletedRecipe) {
      res.status(200).json(deletedRecipe);
    } else {
      res.status(404).json({ error: 'Recipe not found' });
    }
  } catch (error) {
    res.status(500).json({ error: extractErrorMessage(error) });
  }
};
