import { container } from 'tsyringe';
import { Connection } from 'typeorm';
import UserRepository from '../../domain/entities/user/user.repository';
import UserMongoRepository from '../../interfaces/repositories/mongo/userRepository';

export default function initContainer() {
  container.register('UserRepository', {
    useValue: new UserMongoRepository(),
  });
}
