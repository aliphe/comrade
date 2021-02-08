import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export default class ExerciceEntity {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  name!: string;

  @Column()
  muscles!: string[];
}
