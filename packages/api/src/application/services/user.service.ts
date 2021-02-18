import { inject, injectable } from 'tsyringe';
import ExerciceEntity from '../../domain/entities/exercice';
import UserEntity from '../../domain/entities/user';
import UserRepository from '../../domain/entities/user/user.repository';
import UserInfoEntity from '../../domain/entities/user/userInfo';
import WorkoutEntity from '../../domain/entities/workout';
import WorkoutSessionEntity from '../../domain/entities/workoutSession';
import { omit } from '../helpers/object';

export interface UserDto {
  id: string;
  userInfo: Omit<UserInfoEntity, 'password'>;
  workouts: WorkoutEntity[];
  syncedWorkouts: string[];
  exercices: ExerciceEntity[];
  workoutSessions: WorkoutSessionEntity[];
}

@injectable()
export default class UserService {
  constructor(
    @inject('UserRepository') private readonly userRepository: UserRepository
  ) {}

  async findByEmail(email: string): Promise<UserDto | null> {
    const user = await this.userRepository.findOneByEmail(email);
    return user ? UserService.formatUser(user) : user;
  }

  static formatUser(user: UserEntity): UserDto {
    return {
      ...user,
      userInfo: omit(user.userInfo, 'password'),
    };
  }
}
