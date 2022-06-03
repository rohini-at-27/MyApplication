import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Transaction extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  TransactionId?: number;

  @property({
    type: 'number',
    required: true,
  })
  AmountPaid: number;

  @property({
    type: 'string',
    required: true,
  })
  PaymentStatus: string;

  @property({
    type: 'string',
    required: true,
  })
  ModeOfPayment: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Transaction>) {
    super(data);
  }
}

export interface TransactionRelations {
  // describe navigational properties here
}

export type TransactionWithRelations = Transaction & TransactionRelations;
