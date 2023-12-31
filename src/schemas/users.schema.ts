import { z } from "zod";

const UserSchema = z.object({
  id: z.number().int(),
  name: z.string().max(50),
  email: z.string().email(),
  password: z.string(),
  phone: z.string(),
  createdAt: z.date(),
});

const UserSchemaRequest = UserSchema.omit({
  id: true,
  createdAt: true,
});

const UserSchemaResponse = UserSchema.omit({
  password: true,
});

const UserSchemaUpdate = UserSchema.omit({
  id: true,
  createdAt: true,
}).partial();

export { UserSchema, UserSchemaResponse, UserSchemaRequest, UserSchemaUpdate };
