import { Router } from "express";

import { createTokenController } from "../controllers/login.controller";

const loginUserRoutes = Router();

loginUserRoutes.post("", createTokenController);

export { loginUserRoutes };
