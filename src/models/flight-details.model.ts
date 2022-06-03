import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class FlightDetails extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  NoOfFlightsAvailable: number;

  @property({
    type: 'number',
    required: true,
  })
  FlightNumber: number;

  @property({
    type: 'number',
    required: true,
  })
  DepartureTime: number;

  @property({
    type: 'string',
    required: true,
  })
  DeparturePlace: string;

  @property({
    type: 'number',
    required: true,
  })
  Price: number;

  @property({
    type: 'string',
    required: true,
  })
  Instructions: string;

  @property({
    type: 'number',
    required: true,
  })
  NumberOfSeats: number;

  @property({
    type: 'number',
    required: true,
  })
  AvailableSeats: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<FlightDetails>) {
    super(data);
  }
}

export interface FlightDetailsRelations {
  // describe navigational properties here
}

export type FlightDetailsWithRelations = FlightDetails & FlightDetailsRelations;
