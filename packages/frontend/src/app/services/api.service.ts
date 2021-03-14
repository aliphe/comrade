import ApiClient, { UserLoginInput } from '@comrade/api-client';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private readonly apiClient: ApiClient,
  ) { }

  async login(input: UserLoginInput): Promise<void> {
    await this.apiClient.login(input);
  }
}
