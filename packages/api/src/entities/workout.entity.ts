import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import WorkoutStepEntity from './workoutStep.entity';

@Entity()
export default class WorkoutEntity {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column({ type: 'boolean', name: 'is_public' })
  isPublic!: boolean;

  @Column()
  name!: string;

  @Column(_type => WorkoutStepEntity)
  workoutSteps!: WorkoutStepEntity[];
}
