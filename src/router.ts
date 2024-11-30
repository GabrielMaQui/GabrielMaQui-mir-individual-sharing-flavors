import type { Application } from 'express';

import userRouter from './api/user/';
import localAuthRouter from './auth/local/';

function routes(app: Application): void {
  app.use('/api/user', userRouter);
  app.use('/auth/local', localAuthRouter);
}

export default routes;
