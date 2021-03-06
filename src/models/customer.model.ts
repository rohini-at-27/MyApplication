import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Customer extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  CustomerId?: number;

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
  Password: String;

  @property({
    type: 'date',
    required: true,
  })
  DOB: Date;

  @property({
    type: 'string',
    required: true,
  })
  Gender: String;

  @property({
    type: 'string',
    required: true,
  })
  SecurityQuestion: string;

  @property({
    type: 'string',
    required: true,
  })
  CustomerName: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}

export interface CustomerRelations {
  // describe navigational properties here
}

export type CustomerWithRelations = Customer & CustomerRelations;
