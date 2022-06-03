import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class ConfirmationMail extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  Name: string;

  @property({
    type: 'number',
    required: true,
  })
  ArrivalTime: number;

  @property({
    type: 'string',
    required: true,
  })
  ArrivalPlace: string;

  @property({
    type: 'number',
    required: true,
  })
  FlightNumber: number;

  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  SeatNumber: number;

  @property({
    type: 'number',
    required: true,
  })
  BoardingTime: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ConfirmationMail>) {
    super(data);
  }
}

export interface ConfirmationMailRelations {
  // describe navigational properties here
}

export type ConfirmationMailWithRelations = ConfirmationMail & ConfirmationMailRelations;
