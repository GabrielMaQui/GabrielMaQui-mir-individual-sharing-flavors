import mongoose, { type Document, Schema } from 'mongoose';

export interface CommentDocument extends Document {
  user_id: string;
  recipe_id: string;
  rating: number;
  comment: string;
}

const commentSchema = new Schema<CommentDocument>(
  {
    user_id: { type: String, required: true },
    recipe_id: { type: String, required: true },
    rating: { type: Number, default: 0 },
    comment: { type: String, required: true },
  },
  { timestamps: true },
);

export const Comment = mongoose.model<CommentDocument>(
  'Comment',
  commentSchema,
);
