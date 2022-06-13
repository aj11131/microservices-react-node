import { Publisher, Subjects, TicketCreatedEvent } from "@tickets11131/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
