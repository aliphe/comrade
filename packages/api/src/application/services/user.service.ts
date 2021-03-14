import { inject, injectable } from 'tsyringe';

import { WorkoutEntity, ExerciceEntity, UserEntity, WorkoutSessionEntity } from '@comrade/entities';

import UserRepository from '../../domain/repositories/user';
import UserInfoEntity from '../../domain/repositories/user/userInfo';
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
