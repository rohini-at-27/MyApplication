import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Agent extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  AgentName: string;

  @property({
    type: 'string',
    required: true,
  })
  BusinessName: string;

  @property({
    type: 'number',
    required: true,
  })
  MobileNumber: number;

  @property({
    type: 'string',
    required: true,
  })
  EmailId: string;

  @property({
    type: 'string',
    required: true,
  })
  City: string;

  @property({
    type: 'number',
    required: true,
  })
  PinCode: number;

  @property({
    type: 'string',
    required: true,
  })
  AdharCard: string;

  @property({
    type: 'string',
    required: true,
  })
  PanCard: string;

  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  CustomerId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Agent>) {
    super(data);
  }
}

export interface AgentRelations {
  // describe navigational properties here
}

export type AgentWithRelations = Agent & AgentRelations;
