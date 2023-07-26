import { AppDataSource } from "../../data-source";
import Contact from "../../entities/contact.entitie";
import { AppError } from "../../error";
import { TContact, TContactUpdate } from "../../interfaces/contacts.inteface";
import { ContactSchema } from "../../schemas/contact.schema";

const updateContactService = async (
  data: TContactUpdate,
  contactId: number
): Promise<TContact> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const oldContact = await contactRepository.findOneBy({ id: contactId });

  if (!oldContact) {
    throw new AppError("contact not found", 404);
  }

  const newContactdata = contactRepository.create({
    ...oldContact,
    ...data,
  });

  await contactRepository.save(newContactdata);

  return ContactSchema.parse(newContactdata);
};

export { updateContactService };
