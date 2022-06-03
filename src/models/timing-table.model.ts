import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class TimingTable extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  FlightNumber: number;

  @property({
    type: 'string',
    required: true,
  })
  From: string;

  @property({
    type: 'string',
    required: true,
  })
  To: string;

  @property({
    type: 'string',
    required: true,
  })
  DepartureArea: string;

  @property({
    type: 'number',
    required: true,
  })
  StartingTime: number;

  @property({
    type: 'number',
    required: true,
  })
  ReachingTime: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TimingTable>) {
    super(data);
  }
}

export interface TimingTableRelations {
  // describe navigational properties here
}

export type TimingTableWithRelations = TimingTable & TimingTableRelations;
