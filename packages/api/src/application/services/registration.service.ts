import { UserRegisterInput } from '@comrade/api-client';
import { UserEntity } from '@comrade/entities';
import { inject, injectable } from 'tsyringe';
import UserRepository, {
  UserInput,
} from '../../domain/repositories/user';
import { hash } from '../helpers/hash';

@injectable()
export default class UserRegistrationService {
  constructor(
    @inject('UserRepository') private readonly userRepository: UserRepository
  ) {}

  async register(input: UserRegisterInput): Promise<UserEntity> {
    console.log('REGISTER', input);
    const existingUser = await this.userRepository.findOneByEmail(input.email);
    console.log(existingUser);

    if (existingUser) {
      throw new Error('User already exists');
    }

    const hashedPassword = hash(input.password);

    const newUser: UserInput = {
      userInfo: {
        email: input.email,
        password: hashedPassword,
      },
      exercices: [],
      syncedWorkouts: [],
      workoutSessions: [],
      workouts: [],
    };

    return this.userRepository.create(newUser);
  }
}
