import mongoose, { type Document, Schema } from 'mongoose';

export interface MessageDocument extends Document {
  chat_id: string;
  sender_id: string;
  text: string;
}

const messageSchema = new Schema<MessageDocument>(
  {
    chat_id: { type: String, required: true },
    sender_id: { type: String, required: true },
    text: { type: String, required: true },
  },
  { timestamps: true },
);

export const Message = mongoose.model<MessageDocument>(
  'Message',
  messageSchema,
);
