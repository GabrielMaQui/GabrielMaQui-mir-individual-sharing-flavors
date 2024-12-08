import type { Application } from 'express';

import chatRouter from './api/chat';
import commentRouter from './api/comments';
import messageRouter from './api/message';
import recipeRouter from './api/recipe';
import userRouter from './api/user/';
import localAuthRouter from './auth/local/';

function routes(app: Application): void {
  app.use('/api/user', userRouter);
  app.use('/auth/local', localAuthRouter);
  app.use('/api/recipe', recipeRouter);
  app.use('/api/comment', commentRouter);
  app.use('/api/message', messageRouter);
  app.use('/api/chat', chatRouter);
}

export default routes;
