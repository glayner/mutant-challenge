import { Request, Response, NextFunction } from 'express';
import { notHavePermission } from '@shared/errors/messages';
import AppError from '@shared/errors/AppError';

export default function checkUserHas(permission: string) {
  return function middlewareCheckUserHas(
    request: Request,
    response: Response,
    next: NextFunction,
  ): void {
    if (!request.userAuth?.permissions.includes(permission)) {
      throw new AppError(notHavePermission, 401);
    }

    return next();
  };
}
