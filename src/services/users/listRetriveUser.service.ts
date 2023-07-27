import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { TUserResponse } from "../../interfaces/users.interfaces";
import { UserSchemaResponse } from "../../schemas/users.schema";

const listRetriveUserService = async (
  userId: number
): Promise<TUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  const returnUsers: TUserResponse = UserSchemaResponse.parse(user);
  return returnUsers;
};

export default listRetriveUserService;
