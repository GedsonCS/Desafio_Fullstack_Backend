import { z } from "zod";
import {
  UserSchema,
  UserSchemaRequest,
  UserSchemaResponse,
} from "../schemas/users.schema";
import { DeepPartial } from "typeorm";

type TUser = z.infer<typeof UserSchema>;
type TUserRequest = z.infer<typeof UserSchemaRequest>;
type TUserResponse = z.infer<typeof UserSchemaResponse>;
type TUserUpdateRequest = DeepPartial<TUserRequest>;

export { TUser, TUserRequest, TUserResponse, TUserUpdateRequest };
