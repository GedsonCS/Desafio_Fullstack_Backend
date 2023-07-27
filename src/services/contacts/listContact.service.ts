import { AppDataSource } from "../../data-source";
import Contact from "../../entities/contact.entitie";
import { User } from "../../entities/user.entities";
import { AppError } from "../../error";
import { TContactsResponse } from "../../interfaces/contacts.inteface";
import { ContactsSchemaResponse } from "../../schemas/contact.schema";

const listContactService = async (
  userId: number
): Promise<TContactsResponse> => {
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

  const contacts = await contactRepository.find({
    where: {
      user: { id: user.id },
    },
  });

  console.log(contacts);

  return ContactsSchemaResponse.parse(contacts);
};

export { listContactService };
