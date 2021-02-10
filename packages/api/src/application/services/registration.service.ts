import { injectable } from 'tsyringe';
import { hash } from '../helpers/hash';
import UserMongoRepository from '../../interfaces/repositories/mongo/userRepository';

export interface UserCreateInput {
  email: string;
  password: string;
}

export interface UserInfoDto {
  email: string;
}

@injectable()
export default class UserRegistrationService {
  constructor(private readonly userRepository: UserMongoRepository) {}

  async register(input: UserCreateInput): Promise<UserInfoDto> {
    console.log('REGISTER', input);
    const existingUser = await this.userRepository.findOne({
      where: {
        'userInfo.email': { $eq: input.email },
      },
    });
    console.log(existingUser);

    if (existingUser) {
      throw new Error('User already exists');
    }

    const createdUser = this.userRepository.create({
      userInfo: {
        email: input.email,
        password: hash(input.password),
      },
    });

    console.log('RegistrationService::register', { createdUser });

    await this.userRepository.save(createdUser);

    return {
      email: createdUser.userInfo.email,
    };
  }
}
