import { z } from "zod";

const UserSchema = z.object({
  id: z.number().int(),
  name: z.string().max(50),
  email: z.string().email(),
  password: z.string(),
  phone: z.number().positive(),
  createdAt: z.date(),
});

const UserSchemaRequest = UserSchema.omit({
  id: true,
  createdAt: true,
});

const UserSchemaResponse = UserSchema.omit({
  password: true,
});

export { UserSchema, UserSchemaResponse, UserSchemaRequest };
