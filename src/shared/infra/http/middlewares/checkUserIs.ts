import { Request, Response, NextFunction } from 'express';
import { notHavePermission } from '@shared/errors/messages';
import AppError from '@shared/errors/AppError';

export default function checkUserIs(role: string) {
  return function middlewareCheckUserIs(
    request: Request,
    response: Response,
    next: NextFunction,
  ): void {
    if (role !== request.userAuth?.role) {
      throw new AppError(notHavePermission, 401);
    }

    return next();
  };
}
