import { Router } from 'express';
import { container } from 'tsyringe';
import isLoggedIn from '../../middlewares/isLoggedIn';
import UserController from './controller';
import initUserLoginRouter from './login';
import initUserRegisterRouter from './register';

export default function initUserRouter(): Router {
  const router = Router();

  const userController = container.resolve(UserController);

  router.use('/register', initUserRegisterRouter());
  router.use('/login', initUserLoginRouter());

  router.get('/me', isLoggedIn, (req: any, res: any) =>
    userController.get(req, res)
  );

  return router;
}
