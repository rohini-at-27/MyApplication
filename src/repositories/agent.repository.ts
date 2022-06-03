import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AgentDbDataSource} from '../datasources';
import {Agent, AgentRelations} from '../models';

export class AgentRepository extends DefaultCrudRepository<
  Agent,
  typeof Agent.prototype.CustomerId,
  AgentRelations
> {
  constructor(
    @inject('datasources.AgentDB') dataSource: AgentDbDataSource,
  ) {
    super(Agent, dataSource);
  }
}
