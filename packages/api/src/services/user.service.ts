import { injectable } from "tsyringe";
import { Repository } from "typeorm";
import UserEntity from "../entities/user.entity";

@injectable()
export default class UserService {
  constructor(private readonly userRepository: Repository<UserEntity>) {}
}
