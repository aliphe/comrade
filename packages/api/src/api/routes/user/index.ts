import { Router } from 'express';
import { container } from 'tsyringe';
import { Repository } from 'typeorm';
import UserEntity from '../../../entities/user.entity';
import UserController from './controller';

export default function createUserRouter(): Router {
  const router = Router();

  const userController = container.resolve<UserController>(UserController);

  router.get('/', (req, res) => userController.create(req, res));

  return router;
}
