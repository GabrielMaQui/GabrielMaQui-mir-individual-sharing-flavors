import type { Application } from 'express';

import commentRouter from './api/comments';
import recipeRouter from './api/recipe';
import userRouter from './api/user/';
import localAuthRouter from './auth/local/';

function routes(app: Application): void {
  app.use('/api/user', userRouter);
  app.use('/auth/local', localAuthRouter);
  app.use('/api/recipe', recipeRouter);
  app.use('/api/comment', userRouter);
}

export default routes;
