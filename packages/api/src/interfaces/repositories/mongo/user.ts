import { UserEntity } from '@comrade/entities';
import { Db } from 'mongodb';
import { MongoCollection, MongoEntity } from '.';
import { omit } from '../../../application/helpers/object';

import UserRepository, {
  UserInput,
} from '../../../domain/repositories/user';

export default class UserMongoRepository implements UserRepository {
  private readonly collection: MongoCollection<UserEntity>;

  constructor(db: Db) {
    this.collection = db.collection('users');
  }

  async create(user: UserInput): Promise<UserEntity> {
    const query = await this.collection.insertOne({
      exercices: user.exercices,
      syncedWorkouts: user.syncedWorkouts,
      userInfo: user.userInfo,
      workoutSessions: user.workoutSessions,
      workouts: user.workouts,
    });
    return {
      ...user,
      id: query.insertedId.toHexString(),
    };
  }

  async findOneByEmail(email: string): Promise<UserEntity | null> {
    const user = await this.collection.findOne({
      'userInfo.email': email,
    });

    if (!user) {
      return null;
    }

    return UserMongoRepository.formatUser(user);
  }

  static formatUser(mongoUser: MongoEntity<UserEntity>): UserEntity {
    return {
      ...omit(mongoUser, '_id'),
      id: mongoUser._id.toHexString(),
    };
  }
}
