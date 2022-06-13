import { Publisher, Subjects, TicketUpdatedEvent } from "@tickets11131/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
