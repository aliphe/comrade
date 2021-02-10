import { Request, Response } from 'express';
import { injectable } from 'tsyringe';
import UserRegistrationService, { UserCreateInput } from '../../../../../application/services/registration.service';
import { RequestWithBody } from '../../types';

@injectable()
export default class UserRegisterController {
  constructor(private readonly userRegistrationService: UserRegistrationService) {}

  async register(req: RequestWithBody<UserCreateInput>, res: Response) {
    const registeredUser = await this.userRegistrationService.register(req.body);

    res.status(201).json({
      msg: 'User registered successfully',
      data: {
        registeredUser,
      },
    });
  }
}
