import { Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export default class UserInfoEntity {
  @ObjectIdColumn()
  id!: ObjectID;

  name!: string;
}
