import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import ExerciceEntity from './exercice.entity';
import UserInfoEntity from './userInfo.entity';
import WorkoutEntity from './workout.entity';
import WorkoutSessionEntity from './workoutSession.entity';

@Entity()
export default class UserEntity {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column(_type => UserInfoEntity)
  userInfo!: UserInfoEntity;

  @Column(_type => WorkoutEntity)
  workouts!: WorkoutEntity[];

  @Column()
  syncedWorkouts!: string[];

  @Column(_type => ExerciceEntity)
  exercices!: ExerciceEntity[];

  @Column(_type => WorkoutSessionEntity)
  workoutSessions!: WorkoutSessionEntity[];
}
