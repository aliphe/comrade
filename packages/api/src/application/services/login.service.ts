import { UserLoginInput, UserLoginOutput } from '@comrade/api-client';
import { inject, injectable } from 'tsyringe';
import UserRepository from '../../domain/repositories/user';
import { hash } from '../helpers/hash';
import { generateAccessToken } from '../helpers/accessToken';

@injectable()
export default class UserLoginService {
  constructor(
    @inject('UserRepository') private readonly userRepository: UserRepository
  ) {}

  async login(input: UserLoginInput): Promise<UserLoginOutput> {
    const hashedPassword = hash(input.password);

    const existingUser = await this.userRepository.findOneByEmail(input.email);

    console.log(existingUser);
    if (!existingUser) {
      throw new Error('User not found');
    }
    if (existingUser.userInfo.password !== hashedPassword) {
      throw new Error('Passwords do not match');
    }
    return {
      accessToken: generateAccessToken(existingUser.userInfo),
    };
  }
}
