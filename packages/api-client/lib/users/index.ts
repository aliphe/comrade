import Axios, { AxiosInstance } from 'axios';
import { UserEntity } from '@comrade/entities';

import {
  UserLoginInput,
  UserLoginOutput,
  UserRegisterInput,
  UserRegisterOutput,
} from './types';
import { RequestResponse } from '../types';
export * from './types';

export interface ApiClientOptions {
  apiUrl: string;
}

export default class UsersApiClient {
  private readonly httpClient: AxiosInstance;

  constructor(options: ApiClientOptions, private accessToken?: string) {
    this.httpClient = Axios.create({
      baseURL: options.apiUrl,
    });
  }

  async login(
    input: UserLoginInput
  ): Promise<RequestResponse<UserLoginOutput>> {
    const { data } = await this.httpClient.post<
      RequestResponse<UserLoginOutput>
    >('/users/login', input);
    this.accessToken = data.data.accessToken;
    this.httpClient.defaults.headers = {
      ...this.httpClient.defaults.headers,
      authorization: `Bearer ${this.accessToken}`,
    };
    return data;
  }

  async register(
    input: UserRegisterInput
  ): Promise<RequestResponse<UserRegisterOutput>> {
    const { data } = await this.httpClient.post<
      RequestResponse<UserRegisterOutput>
    >('/users/register', input);

    return data;
  }
}

export * from './types';
