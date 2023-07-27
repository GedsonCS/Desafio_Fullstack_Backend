import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import Contact from "../entities/contact.entitie";
import { User } from "../entities/user.entities";

const ensureIsOwnerUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const UserRepository = AppDataSource.getRepository(User);

  const paramsId = parseInt(req.params.id);
  const userId = parseInt(res.locals.userId);

  if (paramsId !== userId) {
    return res.status(403).json({
      message: "you don't have permissions",
    });
  }

  return next();
};

export { ensureIsOwnerUserMiddleware };
