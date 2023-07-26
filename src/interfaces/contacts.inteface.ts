import { z } from "zod";
import {
  ContactSchema,
  ContactSchemaRequest,
  ContactSchemaUpdate,
  ContactsSchemaResponse,
} from "../schemas/contact.schema";

import { DeepPartial } from "typeorm";

type TContactRequest = z.infer<typeof ContactSchemaRequest>;
type TContact = z.infer<typeof ContactSchema>;
type TContactUpdate = DeepPartial<TContactRequest>;
type TContactsResponse = z.infer<typeof ContactsSchemaResponse>;

export { TContactRequest, TContact, TContactUpdate, TContactsResponse };
