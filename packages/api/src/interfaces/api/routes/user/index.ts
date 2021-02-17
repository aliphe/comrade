import { Router } from 'express';
import initUserLoginRouter from './login';
import initUserRegisterRouter from './register';

export default function initUserRouter(): Router {
  const router = Router();

  router.use('/register', initUserRegisterRouter());
  router.use('/login', initUserLoginRouter());

  return router;
}
