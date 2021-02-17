import { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';
import { container } from 'tsyringe';
import UserLoginController from './controller';

export default function initUserLoginRouter(): Router {
  const router = Router();
  const userLoginController = container.resolve<UserLoginController>(
    UserLoginController
  );

  router.post(
    '/',
    expressAsyncHandler((req, res) => userLoginController.login(req, res))
  );

  return router;
}
