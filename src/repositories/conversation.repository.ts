import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConversationDbDataSource} from '../datasources';
import {Conversation, ConversationRelations} from '../models';

export class ConversationRepository extends DefaultCrudRepository<
  Conversation,
  typeof Conversation.prototype.Id,
  ConversationRelations
> {
  constructor(
    @inject('datasources.ConversationDB') dataSource: ConversationDbDataSource,
  ) {
    super(Conversation, dataSource);
  }
}
