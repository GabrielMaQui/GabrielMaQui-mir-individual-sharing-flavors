import { Router } from 'express';
import { loginHandler } from './local.controller';

const router = Router();

// POST -> /auth/local/login

router.post('/login', loginHandler);

export default router;
