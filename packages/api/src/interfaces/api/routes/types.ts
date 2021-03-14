import { UserInfoEntity } from '@comrade/entities';
import { Request } from 'express';

export type RequestWithBody<Body> = Request<any, any, Body>;

export type LoggedInRequest<Body> = RequestWithBody<Body> & {
  session: {
    user: UserInfoEntity;
  };
};
