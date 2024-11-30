import { Router } from 'express';
import { createMessage, getMessages } from './message.controller';

const router = Router();

router.post('/', createMessage);
router.get('/:id', getMessages);

export default router;
