import { Request } from 'express';
import UserInfoEntity from '../../../domain/entities/user/userInfo';

export type RequestWithBody<Body> = Request<any, any, Body>;

export type LoggedInRequest<Body> = RequestWithBody<Body> & {
  session: {
    user: UserInfoEntity;
  };
};
