import { NextFunction, Request, Response } from 'express';
import getUser from '../database/gets/user.get';

export default class UserController {
  static userController = (
    req: Request,
    res: Response,
    _next: NextFunction,
  ) => {
    const { id } = req.params;
    const user = getUser(id);
    res
      .status(200)
      .json({ succes: true, response: user, error: null, stack: null });
  };
}
