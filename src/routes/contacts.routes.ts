import { Router } from "express";
import tokenIsValidMiddleware from "../middlewares/ensureAuth.middleware";
import dataIsValidMidleware from "../middlewares/ensureDataIsValid.meddleware";
import {
  ContactSchemaRequest,
  ContactSchemaUpdate,
} from "../schemas/contact.schema";
import {
  createContactController,
  deleteContactController,
  listContactController,
  updateContactController,
} from "../controllers/contacts.controller";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";

const contsctRoutes = Router();

contsctRoutes.post(
  "",
  tokenIsValidMiddleware,
  dataIsValidMidleware(ContactSchemaRequest),
  createContactController
);
contsctRoutes.get("", tokenIsValidMiddleware, listContactController);
contsctRoutes.patch(
  "/:id",
  tokenIsValidMiddleware,
  // ensureIsOwnerMiddleware,
  dataIsValidMidleware(ContactSchemaUpdate),
  updateContactController
);
contsctRoutes.delete(
  "/:id",
  //ensureIsOwnerMiddleware,
  tokenIsValidMiddleware,
  deleteContactController
);

export { contsctRoutes };
