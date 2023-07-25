import express, { Application, application } from "express";
import { userRoutes } from "./routes/users.routes";
import { handleAppError } from "./middlewares/handleAppError.middleware";
import { handleErros } from "./error";

const app: Application = express();
app.use(express.json());

app.use("/users", userRoutes);
//app.use(handleAppError);
app.use(handleErros);
export default app;
