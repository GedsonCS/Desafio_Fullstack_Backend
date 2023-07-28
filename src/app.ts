import "express-async-errors";
import express, { Application, application } from "express";
import { userRoutes } from "./routes/users.routes";
import { handleErros } from "./error";
import { loginUserRoutes } from "./routes/login.routes";
import { contsctRoutes } from "./routes/contacts.routes";
import cors from "cors";

const app: Application = express();
app.use(express.json());

app.use(cors);
app.use("/users", userRoutes);
app.use("/login", loginUserRoutes);
app.use("/contact", contsctRoutes);
app.use(handleErros);
export default app;
