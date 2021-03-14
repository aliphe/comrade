import ExerciceEntity from '../exercice';
import UserInfoEntity from './userInfo';
import WorkoutEntity from '../workout';
import WorkoutSessionEntity from '../workoutSession';

export default interface UserEntity {
  id: string;

  userInfo: UserInfoEntity;

  workouts: WorkoutEntity[];

  syncedWorkouts: string[];

  exercices: ExerciceEntity[];

  workoutSessions: WorkoutSessionEntity[];
}

export { default as UserInfoEntity } from './userInfo';
