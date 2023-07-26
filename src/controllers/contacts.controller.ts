import { Request, Response } from "express";
import { listContactService } from "../services/contacts/listContact.service";
import { updateContactService } from "../services/contacts/updateContact.service";
import { deleteContacteService } from "../services/contacts/deleteContact.service";
import createContactService from "../services/contacts/createContact.servece";

const createContactController = async (req: Request, res: Response) => {
  const userId: number = res.locals.userId;
  const newContact: any = await createContactService(req.body, userId);

  return res.status(201).json(newContact);
};
const listContactController = async (req: Request, res: Response) => {
  const userId = res.locals.userId;

  const contact = await listContactService(userId);

  return res.json(contact);
};
const updateContactController = async (req: Request, res: Response) => {
  const contactId: number = parseInt(req.params.id);
  const updatecontact = await updateContactService(req.body, contactId);

  return res.json(updatecontact);
};
const deleteContactController = async (req: Request, res: Response) => {
  const contactId: number = parseInt(req.params.id);
  const deletecontact = await deleteContacteService(contactId);

  return res.status(204).send();
};

export {
  createContactController,
  listContactController,
  updateContactController,
  deleteContactController,
};
