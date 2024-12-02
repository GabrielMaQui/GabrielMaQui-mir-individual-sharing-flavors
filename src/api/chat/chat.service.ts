import { Chat, type ChatDocument } from './chat.model';

export const findChatByMembers = async (
  ownerId: string,
  friendId: string,
): Promise<ChatDocument | null> => {
  return await Chat.findOne({
    members: { $all: [ownerId, friendId] },
  });
};

export const createChat = async (
  ownerId: string,
  friendId: string,
): Promise<ChatDocument> => {
  const newChat = new Chat({ members: [ownerId, friendId] });
  return await newChat.save();
};

export const getChatsByUserId = async (
  userId: string,
): Promise<ChatDocument[]> => {
  return await Chat.find({ members: { $in: [userId] } });
};

export const getChatByMembers = async (
  ownerId: string,
  friendId: string,
): Promise<ChatDocument[]> => {
  return await Chat.find({ members: { $all: [ownerId, friendId] } });
};
