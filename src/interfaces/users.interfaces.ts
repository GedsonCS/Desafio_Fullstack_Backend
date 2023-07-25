import { z } from "zod";
import {
  UserSchema,
  UserSchemaRequest,
  UserSchemaResponse,
} from "../schemas/users.schema";

type TUser = z.infer<typeof UserSchema>;
type TUserRequest = z.infer<typeof UserSchemaRequest>;
type TUserResponse = z.infer<typeof UserSchemaResponse>;

export { TUser, TUserRequest, TUserResponse };
