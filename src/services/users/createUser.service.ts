import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { TUserRequest, TUserResponse } from "../../interfaces/users.interfaces";
import { AppError } from "../../errors/AppError";
import { UserSchemaResponse } from "../../schemas/users.schema";

const createUserService = async (
  data: TUserRequest
): Promise<TUserResponse> => {
  const { email, name, password, phone } = data;

  const userRepository = AppDataSource.getRepository(User);

  const hashedpassword = await hash(password, 7);
  const user = userRepository.create({
    name,
    email,
    password: hashedpassword,
    phone,
  });

  await userRepository.save(user);

  return UserSchemaResponse.parse(user);
};

export default createUserService;
