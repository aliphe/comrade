import { inject, injectable } from 'tsyringe';
import UserRepository from '../../domain/entities/user/user.repository';

export interface UserCreateInput {
  email: string;
  password: string;
}

export interface UserInfoDto {
  email: string;
}

@injectable()
export default class UserRegistrationService {
  constructor(@inject("UserRepository") private readonly userRepository: UserRepository) {}

  async register(input: UserCreateInput): Promise<UserInfoDto> {
    console.log('REGISTER', input);
    const existingUser = this.userRepository.findOne({
      where: {
        'userInfo.email': { $eq: input.email },
      },
    });
    console.log(existingUser);

    if (existingUser) {
      throw new Error('User already exists');
    }

    throw new Error('Not implemented yet.');
  }
}
