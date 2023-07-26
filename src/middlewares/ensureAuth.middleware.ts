import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../error";

const tokenIsValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  let token: string | undefined = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "invalid Token" });
  }
  token = token.split(" ")[1];

  const tokenCompare = jwt.verify(
    token,
    process.env.SECRET_KEY!,
    (err: any, decoded: any) => {
      if (err) {
        return res.status(401).json({ message: "invalid Token" });
      }
      res.locals.userId = decoded.sub;
      console.log(res.locals.userId);
    }
  );
  return next();
};

export default tokenIsValidMiddleware;
