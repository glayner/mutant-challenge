import { Request, NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '@config/auth';

import AppError from '@shared/errors/AppError';
import { jwtMiss, jwtInvalid } from '@shared/errors/messages';

interface ITokenPayload {
  iat: number;

  exp: number;

  user_id: string;

  person_id: string;

  document: string;

  capitalizer: string;

  role: string;

  permissions: string[];
}

export default function persistAuthentication(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError(jwtMiss, 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const {
      user_id,
      person_id,
      document,
      capitalizer,
      role,
      permissions,
    } = decoded as ITokenPayload;

    request.userAuth = {
      user_id,
      person_id,
      document,
      capitalizer,
      role,
      permissions,
    };

    return next();
  } catch {
    throw new AppError(jwtInvalid, 401);
  }
}
