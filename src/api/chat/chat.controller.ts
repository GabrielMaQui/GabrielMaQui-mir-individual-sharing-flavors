import type { Request, Response } from 'express';
import * as ChatService from './chat.service';

export const createChat = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { owner_id, friend_id } = req.body;

    const existingChat = await ChatService.findChatByMembers(
      owner_id,
      friend_id,
    );
    if (existingChat) {
      res.status(200).json(existingChat);
      return;
    }

    const newChat = await ChatService.createChat(owner_id, friend_id);
    res.status(201).json(newChat);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getChatsByUserId = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;
    const chats = await ChatService.getChatsByUserId(id);
    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getOneChat = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { owner_id, friend_id } = req.params;
    const chat = await ChatService.getChatByMembers(owner_id, friend_id);
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
