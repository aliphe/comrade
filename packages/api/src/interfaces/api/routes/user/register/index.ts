import { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';
import { container } from 'tsyringe';

import UserRegisterController from './controller';

export default function initUserRegisterRouter(): Router {
  const router = Router();

  const registerController = container.resolve<UserRegisterController>(
    UserRegisterController
  );

  router.post(
    '/',
    expressAsyncHandler((req, res) => registerController.register(req, res))
  );

  return router;
}
