import { Request, Response, NextFunction } from 'express';
import { retrieveUserInfoFromAccessToken } from '../../../application/helpers/accessToken';
import { LoggedInRequest } from '../routes/types';

export default function isLoggedIn(
  req: Request,
  _response: Response,
  next: NextFunction
) {
  if (!req.headers.authorization) {
    return next(new Error('No authorization token in headers'));
  }
  const userInfo = retrieveUserInfoFromAccessToken(
    req.headers.authorization.replace('Bearer ', '')
  );
  if (!userInfo) {
    return next(new Error('Bad authentication token'));
  }

  (req as LoggedInRequest<unknown>).session = {
    user: userInfo,
  };
  next();
}
