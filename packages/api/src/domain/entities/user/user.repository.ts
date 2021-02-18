import UserEntity from ".";
import ExerciceEntity from "../exercice";
import WorkoutEntity from "../workout";
import WorkoutSessionEntity from "../workoutSession";
import UserInfoEntity from "./userInfo";

export interface UserInput {
  id?: string;

  userInfo: UserInfoEntity;

  workouts: WorkoutEntity[];

  syncedWorkouts: string[];

  exercices: ExerciceEntity[];

  workoutSessions: WorkoutSessionEntity[];
}

export default interface UserRepository {
  create(user: UserInput): Promise<string>;

  findOneByEmail(email: string): Promise<UserEntity | null>;
}
