import mongoose, { type Document, Schema } from 'mongoose';

export interface ChatDocument extends Document {
  members: string[];
}

const chatSchema = new Schema<ChatDocument>(
  {
    members: { type: [String], required: true },
  },
  { timestamps: true },
);

export const Chat = mongoose.model<ChatDocument>('Chat', chatSchema);
