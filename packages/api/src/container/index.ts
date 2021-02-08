import { container } from 'tsyringe';
import { Connection, Repository } from 'typeorm';
import UserEntity from '../entities/user.entity';

export default function initContainer(connection: Connection) {
  container.register<Repository<UserEntity>>('userRepository', {
    useValue: connection.getRepository(UserEntity),
  });
}
