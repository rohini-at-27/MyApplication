import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Vendor extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  TravelName: string;

  @property({
    type: 'string',
    required: true,
  })
  VendorName: string;

  @property({
    type: 'string',
    required: true,
  })
  Address: string;

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
  BankDetails: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Vendor>) {
    super(data);
  }
}

export interface VendorRelations {
  // describe navigational properties here
}

export type VendorWithRelations = Vendor & VendorRelations;
