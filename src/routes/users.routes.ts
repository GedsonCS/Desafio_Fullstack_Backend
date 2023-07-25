import { Router } from "express";
import { createUserController } from "../controllers/users.controller";
import dataIsValidMidleware from "../middlewares/ensureDataIsValid.meddleware";
import { UserSchemaRequest } from "../schemas/users.schema";
import emailExistsMiddleware from "../middlewares/ensureEmailExists..middleware";

const userRoutes = Router();

userRoutes.post(
  "",
  dataIsValidMidleware(UserSchemaRequest),
  emailExistsMiddleware,
  createUserController
);

export { userRoutes };
