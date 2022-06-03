import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MessageDbDataSource} from '../datasources';
import {Message, MessageRelations} from '../models';

export class MessageRepository extends DefaultCrudRepository<
  Message,
  typeof Message.prototype.Id,
  MessageRelations
> {
  constructor(
    @inject('datasources.messageDB') dataSource: MessageDbDataSource,
  ) {
    super(Message, dataSource);
  }
}
