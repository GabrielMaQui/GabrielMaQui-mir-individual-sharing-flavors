import { Recipe, type RecipeDocument } from './recipe.model';

export const getAllRecipes = async (): Promise<RecipeDocument[]> => {
  return await Recipe.find().sort({ createdAt: -1 });
};

export const getOneRecipe = async (
  id: string,
): Promise<RecipeDocument | null> => {
  return await Recipe.findById(id);
};

export const createRecipe = async (
  data: Partial<RecipeDocument>,
): Promise<RecipeDocument> => {
  const newRecipe = new Recipe(data);
  return await newRecipe.save();
};

export const updateRecipe = async (
  id: string,
  data: Partial<RecipeDocument>,
): Promise<RecipeDocument | null> => {
  return await Recipe.findByIdAndUpdate(id, data, { new: true });
};

export const deleteRecipe = async (
  id: string,
): Promise<RecipeDocument | null> => {
  return await Recipe.findByIdAndDelete(id);
};
