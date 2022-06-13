import { requireAuth, validateRequest } from "@tickets11131/common";
import express, { Request, Response } from "express";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/api/orders",
  requireAuth,
  [
    body("ticketId").not().isEmpty().withMessage("TicketId must be provided"),
    body("ticketId").isMongoId().withMessage("Invalid ID provided"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    res.send({});
  }
);

export { router as newOrderRouter };
