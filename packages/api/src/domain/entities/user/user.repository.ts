import UserEntity from ".";
export default interface UserRepository {
  findOneByEmail(email: string): Promise<UserEntity | undefined>;
}
