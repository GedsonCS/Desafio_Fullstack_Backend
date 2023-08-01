import "express-async-errors";
import express, { Application, application } from "express";
import { userRoutes } from "./routes/users.routes";
import { handleErros } from "./error";
import { loginUserRoutes } from "./routes/login.routes";
import { contsctRoutes } from "./routes/contacts.routes";
import cors from "cors";

const app: Application = express();
app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
  "https://front-gedsoncs.vercel.app",
  "https://front-8eysj5n05-gedsoncs.vercel.app",
];

app.use(
  cors({
    origin: allowedOrigins,
  })
);
app.use("/users", userRoutes);
app.use("/login", loginUserRoutes);
app.use("/contact", contsctRoutes);
app.use(handleErros);
export default app;
