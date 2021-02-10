import UserEntity from "../../../domain/entities/user";
import UserRepository from "../../../domain/entities/user/user.repository";

export default class UserMongoRepository implements UserRepository{
  findOne(): UserEntity | undefined {
    return undefined;
  }
}
