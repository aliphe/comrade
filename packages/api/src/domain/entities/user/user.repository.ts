import UserEntity from ".";
export default interface UserRepository {
  findOne(query: any): UserEntity | undefined;
}
