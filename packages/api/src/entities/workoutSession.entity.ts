import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import WorkoutStepSessionEntity from './workoutStepSession.entity';

@Entity()
export default class WorkoutSessionEntity {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  workoutId!: string;

  @Column()
  date!: Date;

  @Column(_type => WorkoutStepSessionEntity)
  workoutStepSessions!: WorkoutStepSessionEntity[];
}
