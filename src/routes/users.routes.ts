import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listretriveUserController,
  updateUserController,
} from "../controllers/users.controller";
import dataIsValidMidleware from "../middlewares/ensureDataIsValid.meddleware";
import { UserSchemaRequest, UserSchemaUpdate } from "../schemas/users.schema";
import emailExistsMiddleware from "../middlewares/ensureEmailExists..middleware";
import tokenIsValidMiddleware from "../middlewares/ensureAuth.middleware";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";
import { ensureIsOwnerUserMiddleware } from "../middlewares/ensureIsOwnerUser.meddleware";

const userRoutes = Router();

userRoutes.post(
  "",
  dataIsValidMidleware(UserSchemaRequest),
  emailExistsMiddleware,
  createUserController
);

userRoutes.get("", tokenIsValidMiddleware, listretriveUserController);
userRoutes.patch(
  "/:id",
  tokenIsValidMiddleware,
  dataIsValidMidleware(UserSchemaUpdate),
  emailExistsMiddleware,
  ensureIsOwnerUserMiddleware,
  updateUserController
);
userRoutes.delete(
  "/:id",
  tokenIsValidMiddleware,
  ensureIsOwnerUserMiddleware,
  deleteUserController
);

export { userRoutes };
