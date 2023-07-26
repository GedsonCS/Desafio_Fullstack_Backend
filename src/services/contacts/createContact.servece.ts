import { AppDataSource } from "../../data-source";
import { TContact, TContactRequest } from "../../interfaces/contacts.inteface";
import Contact from "../../entities/contact.entitie";
import { ContactSchema } from "../../schemas/contact.schema";
import { User } from "../../entities/user.entities";
import { AppError } from "../../error";

const createContactService = async (
  data: TContactRequest,
  userId: number
): Promise<TContact> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("user not found", 404);
  }

  const contact = contactRepository.create({
    ...data,
    user,
  });

  await contactRepository.save(contact);

  return ContactSchema.parse(contact);
};

export default createContactService;
