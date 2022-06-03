import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Conversation extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  Id?: number;

  @property({
    type: 'number',
    required: true,
  })
  CustomerId: number;

  @property({
    type: 'number',
    required: true,
  })
  AgentId: number;

  @property({
    type: 'date',
    required: true,
  })
  ConversationStartedate: string;

  @property({
    type: 'string',
    required: true,
  })
  CoversationGroupName: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Conversation>) {
    super(data);
  }
}

export interface ConversationRelations {
  // describe navigational properties here
}

export type ConversationWithRelations = Conversation & ConversationRelations;
