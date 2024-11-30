import { Message, type MessageDocument } from './message.model';

export const createMessage = async (
  data: Partial<MessageDocument>,
): Promise<MessageDocument> => {
  const message = new Message(data);
  return await message.save();
};

export const getMessagesByChatId = async (
  chatId: string,
): Promise<MessageDocument[]> => {
  return await Message.find({ chat_id: chatId });
};
