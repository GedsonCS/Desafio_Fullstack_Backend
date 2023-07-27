import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../error";
import {
  TUserResponse,
  TUserUpdateRequest,
} from "../../interfaces/users.interfaces";
import { UserSchemaResponse } from "../../schemas/users.schema";

const updateUserService = async (
  data: TUserUpdateRequest,
  userId: number
): Promise<TUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const oldUser = await userRepository.findOneBy({ id: userId });

  if (!oldUser) {
    throw new AppError("user not found", 404);
  }

  if (data.password) {
    const hashedpassword = await hash(data.password, 7);

    data.password = hashedpassword;
  }

  const newContactdata = userRepository.create({
    ...oldUser,
    ...data,
  });

  await userRepository.save(newContactdata);

  return UserSchemaResponse.parse(newContactdata);
};

export { updateUserService };
