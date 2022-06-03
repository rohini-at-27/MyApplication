import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TimingTableDbDataSource} from '../datasources';
import {TimingTable, TimingTableRelations} from '../models';

export class TimingTableRepository extends DefaultCrudRepository<
  TimingTable,
  typeof TimingTable.prototype.id,
  TimingTableRelations
> {
  constructor(
    @inject('datasources.TimingTableDB') dataSource: TimingTableDbDataSource,
  ) {
    super(TimingTable, dataSource);
  }
}
