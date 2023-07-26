import { z } from "zod";

const ContactSchema = z.object({
  id: z.number().int(),
  contactName: z.string().max(100),
  contactEmail: z.string().email().max(100),
  contactPhone: z.string().max(20),
  createdAt: z.date(),
});

const ContactSchemaRequest = ContactSchema.omit({
  id: true,
  createdAt: true,
});

const ContactSchemaUpdate = ContactSchema.omit({
  id: true,
  createdAt: true,
}).partial();

const ContactsSchemaResponse = z.array(ContactSchema);

export {
  ContactSchema,
  ContactSchemaRequest,
  ContactSchemaUpdate,
  ContactsSchemaResponse,
};
