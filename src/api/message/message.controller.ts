import type { Request, Response } from 'express';
import * as MessageService from './message.service';

export const createMessage = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { chat_id, sender_id, text } = req.body;
    const message = await MessageService.createMessage({
      chat_id,
      sender_id,
      text,
    });
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getMessages = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id: chat_id } = req.params;
    const messages = await MessageService.getMessagesByChatId(chat_id);
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
