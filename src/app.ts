import express, { Application, application } from "express";
import { userRoutes } from "./routes/users.routes";
import { handleAppError } from "./middlewares/handleAppError.middleware";
import { handleErros } from "./error";
import { loginUserRoutes } from "./routes/login.routes";
import { contsctRoutes } from "./routes/contacts.routes";
const app: Application = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginUserRoutes);
app.use("/contact", contsctRoutes);
//app.use(handleAppError);
app.use(handleErros);
export default app;
