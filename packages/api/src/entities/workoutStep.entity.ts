import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export default class WorkoutStepEntity {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  round!: number;

  @Column()
  sets!: number;

  @Column()
  reps!: number;

  @Column()
  wait!: number;

  @Column()
  exerciceId!: string;

  @Column()
  name!: string;

  @Column()
  variant!: string;

  @Column({ nullable: true })
  weight?: number;
}
