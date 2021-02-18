import { Response } from 'express';
import { injectable } from 'tsyringe';
import UserService from '../../../../application/services/user.service';
import { LoggedInRequest } from '../types';

@injectable()
export default class UserController {
  constructor(private readonly userService: UserService) {}

  async get(req: LoggedInRequest<{}>, res: Response) {
    const user = await this.userService.findByEmail(req.session.user.email);
    if (!user) {
      return res.status(400).json({
        msg: 'Unable to retrieve user information',
      });
    }
    res.status(200).json({
      msg: 'User information retrieve successfully',
      user,
    });
  }
}
