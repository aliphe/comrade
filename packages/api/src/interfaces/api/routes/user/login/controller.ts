import { UserLoginInput } from '@comrade/api-client';
import { Response } from 'express';
import { injectable } from 'tsyringe';
import UserLoginService from '../../../../../application/services/login.service';
import { RequestWithBody } from '../../types';

@injectable()
export default class UserLoginController {
  constructor(private readonly userLoginService: UserLoginService) {}

  async login(req: RequestWithBody<UserLoginInput>, res: Response) {
    try {
      const loggedInInfo = await this.userLoginService.login(req.body);

      res.status(200).json({
        msg: 'User logged in successfully',
        data: {
          loggedInInfo,
        },
      });
    } catch (e) {
      console.log('Unable to login', {
        reason: e.message,
      });
      res.status(401).json({
        msg: 'Unable to login',
        data: {
          reason: 'Unauthorized',
        },
      });
    }
  }
}
