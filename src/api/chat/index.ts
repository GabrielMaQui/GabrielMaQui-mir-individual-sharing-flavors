import { Router } from 'express';
import { createChat, getChatsByUserId, getOneChat } from './chat.controller';

const router = Router();

router.post('/', createChat);
router.get('/:id', getChatsByUserId);
router.get('/:owner_id/:friend_id', getOneChat);

export default router;
