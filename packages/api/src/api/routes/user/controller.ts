import { Request, Response } from 'express';
import { injectable } from 'tsyringe';
import UserService from '../../../services/user.service';

@injectable()
export default class UserController {
  constructor(private readonly userService: UserService) {}

  create(req: Request, res: Response) {
    console.log('createUser', this.userService);
    res.status(200).json({
      msg: 'all good',
    })
  }
}
