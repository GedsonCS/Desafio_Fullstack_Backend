import { NextFunction, Request, Response } from "express";

import { AppError } from "../error";

import { Repository } from "typeorm";
import { User } from "../entities/user.entities";
import { AppDataSource } from "../data-source";

const emailExistsUpdateMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { email }: any = req.body;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({ where: { email } });

  if (!email) {
    return next();
  }

  if (!user) {
    return next();
  } else {
    return res.status(409).json({ message: "Email already exists" });
  }
};

export default emailExistsUpdateMiddleware;
