import { Comment, type CommentDocument } from './comment.model';

export const getAllComments = async (): Promise<CommentDocument[]> => {
  return await Comment.find();
};

export const getCommentsByRecipeId = async (
  recipeId: string,
): Promise<CommentDocument[]> => {
  return await Comment.find({ recipe_id: recipeId });
};

export const createComment = async (
  data: Partial<CommentDocument>,
): Promise<CommentDocument> => {
  const newComment = new Comment(data);
  return await newComment.save();
};

export const updateComment = async (
  id: string,
  data: Partial<CommentDocument>,
): Promise<CommentDocument | null> => {
  return await Comment.findByIdAndUpdate(id, data, { new: true });
};

export const deleteComment = async (
  id: string,
): Promise<CommentDocument | null> => {
  return await Comment.findByIdAndDelete(id);
};
