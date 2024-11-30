import mongoose, { type Document, Schema } from 'mongoose';

export interface RecipeDocument extends Document {
  user_id: string;
  title: string;
  ingredients: string[];
  procedure: string[];
  images: string[];
  category: string;
  average_rating: number;
  views: number;
}

const recipeSchema = new Schema<RecipeDocument>(
  {
    user_id: { type: String, required: true },
    title: { type: String, required: true },
    ingredients: { type: [String], required: true },
    procedure: { type: [String], required: true },
    images: { type: [String], required: true },
    category: { type: String, required: true },
    average_rating: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export const Recipe = mongoose.model<RecipeDocument>('Recipe', recipeSchema);
