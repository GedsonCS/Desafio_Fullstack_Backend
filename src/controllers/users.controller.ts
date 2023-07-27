import { Response, Request } from "express";
import { TUserRequest } from "../interfaces/users.interfaces";
import createUserService from "../services/users/createUser.service";
import listRetriveUserService from "../services/users/listRetriveUser.service";
import { updateUserService } from "../services/users/updateUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";

const createUserController = async (req: Request, res: Response) => {
  const newUser = await createUserService(req.body);
  return res.status(201).json(newUser);
};

const listretriveUserController = async (req: Request, res: Response) => {
  const userId = res.locals.userId;
  const newUser = await listRetriveUserService(userId);
  return res.json(newUser);
};

const updateUserController = async (req: Request, res: Response) => {
  const userId = res.locals.userId;

  const newUser = await updateUserService(req.body, userId);
  return res.json(newUser);
};

const deleteUserController = async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.id);
  const newUser = await deleteUserService(userId);
  return res.status(204).send();
};

export {
  createUserController,
  listretriveUserController,
  updateUserController,
  deleteUserController,
};
