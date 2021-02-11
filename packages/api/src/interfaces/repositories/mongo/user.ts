import { Collection, Db } from 'mongodb';

import UserEntity from '../../../domain/entities/user';
import UserRepository from '../../../domain/entities/user/user.repository';

export default class UserMongoRepository implements UserRepository {
  private readonly collection: Collection<UserEntity>;

  constructor(db: Db) {
    this.collection = db.collection('users');
  }

  async findOneByEmail(email: string): Promise<UserEntity | undefined> {
    return undefined;
  }
}
