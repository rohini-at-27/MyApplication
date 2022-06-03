import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class TicketBooking extends Entity {
  @property({
    type: 'date',
    required: true,
  })
  Date: string;

  @property({
    type: 'string',
    required: true,
  })
  Destination: string;

  @property({
    type: 'string',
    required: true,
  })
  PassengerName: string;

  @property({
    type: 'number',
    required: true,
  })
  Age: number;

  @property({
    type: 'string',
    required: true,
  })
  Gender: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  GovermentId?: number;

  @property({
    type: 'number',
    required: true,
  })
  MobileNumber: number;

  @property({
    type: 'string',
    required: true,
  })
  Confirmation: boolean;

  @property({
    type: 'string',
    required: true,
  })
  payment: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TicketBooking>) {
    super(data);
  }
}

export interface TicketBookingRelations {
  // describe navigational properties here
}

export type TicketBookingWithRelations = TicketBooking & TicketBookingRelations;
