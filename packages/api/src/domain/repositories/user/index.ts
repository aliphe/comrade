import {
  ExerciceEntity,
  UserEntity,
  UserInfoEntity,
  WorkoutEntity,
  WorkoutSessionEntity,
} from '@comrade/entities';

export interface UserInput {
  id?: string;

  userInfo: UserInfoEntity;

  workouts: WorkoutEntity[];

  syncedWorkouts: string[];

  exercices: ExerciceEntity[];

  workoutSessions: WorkoutSessionEntity[];
}

export default interface UserRepository {
  create(user: UserInput): Promise<UserEntity>;

  findOneByEmail(email: string): Promise<UserEntity | null>;
}
