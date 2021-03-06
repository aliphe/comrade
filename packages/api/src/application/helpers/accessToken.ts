import jwt from 'jsonwebtoken';
import config from '../../config';
import UserInfoEntity from '../../domain/entities/user/userInfo';

export function generateAccessToken(userInfo: UserInfoEntity): string {
  return jwt.sign(userInfo, config.jwt.secret);
}

export function retrieveUserInfoFromAccessToken(token: string): UserInfoEntity | null {
  try {
    const userInfo = jwt.verify(token, config.jwt.secret) as UserInfoEntity;
    return userInfo;
  } catch (e) {
    return null;
  }
}
