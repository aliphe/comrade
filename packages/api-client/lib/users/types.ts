import { UserEntity } from "@comrade/entities";

export interface UserLoginInput {
  email: string;
  password: string;
}

export interface UserLoginOutput {
  accessToken: string;
}

export interface UserRegisterInput {
  email: string;
  password: string;
}

export interface UserRegisterOutput {
  registeredUser: UserEntity; 
}
