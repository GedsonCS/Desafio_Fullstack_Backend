import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../error";

const deleteUserService = async (userId: number): Promise<void> => {
  const UserRepository = AppDataSource.getRepository(User);

  const user = await UserRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError("user not found", 404);
  }

  await UserRepository.remove(user);
};

export { deleteUserService };
