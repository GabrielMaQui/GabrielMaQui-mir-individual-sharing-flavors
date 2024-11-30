import type { Request, Response } from 'express';
import * as CommentService from './comment.service';

export const getAllCommentsHandler = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    const comments = await CommentService.getAllComments();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getCommentsByRecipeIdHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id: recipeId } = req.params;
    const comments = await CommentService.getCommentsByRecipeId(recipeId);
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const createCommentHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const comment = await CommentService.createComment(req.body);
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updateCommentHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id: commentId } = req.params;
    const updatedComment = await CommentService.updateComment(
      commentId,
      req.body,
    );
    if (updatedComment) {
      res.status(200).json(updatedComment);
    } else {
      res.status(404).json({ error: 'Comment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const deleteCommentHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id: commentId } = req.params;
    const deletedComment = await CommentService.deleteComment(commentId);
    if (deletedComment) {
      res.status(200).json(deletedComment);
    } else {
      res.status(404).json({ error: 'Comment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
