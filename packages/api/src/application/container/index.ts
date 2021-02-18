import { Db } from 'mongodb';
import { container } from 'tsyringe';
import UserMongoRepository from '../../interfaces/repositories/mongo/user';

export default function initContainer(db: Db) {
  container.register('UserRepository', {
    useValue: new UserMongoRepository(db),
  });
}
