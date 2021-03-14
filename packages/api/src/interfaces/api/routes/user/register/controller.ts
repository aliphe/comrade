import { UserRegisterInput } from '@comrade/api-client';
import { Response } from 'express';
import { injectable } from 'tsyringe';
import UserRegistrationService from '../../../../../application/services/registration.service';
import { RequestWithBody } from '../../types';

@injectable()
export default class UserRegisterController {
  constructor(
    private readonly userRegistrationService: UserRegistrationService
  ) {}

  async register(req: RequestWithBody<UserRegisterInput>, res: Response) {
    try {
      const registeredUser = await this.userRegistrationService.register(
        req.body
      );

      res.status(201).json({
        msg: 'User registered successfully',
        data: {
          registeredUser,
        },
      });
    } catch (e) {
      res.status(401).json({
        msg: 'Unable to register user',
        data: {
          reason: e.message,
        },
      });
    }
  }
}
