import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export default class WorkoutStepSessionEntity {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  round!: number;

  @Column()
  reps!: number[];
}
