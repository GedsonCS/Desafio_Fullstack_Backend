import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import Contact from "../entities/contact.entitie";

const ensureIsOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contactId = parseInt(req.params.id);
  const userId = res.locals.userId;

  const contact = await contactRepository.findOne({
    where: {
      id: contactId,
    },
    relations: {
      user: true,
    },
  });

  if (!contact) {
    res.status(404).json({
      message: "contact not found",
    });
  }

  if (contact?.user.id !== userId) {
    res.status(403).json({
      message: "you don't have permissions",
    });
  }

  return next;
};

export { ensureIsOwnerMiddleware };
