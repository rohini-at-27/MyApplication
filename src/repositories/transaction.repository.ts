import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TransactionDbDataSource} from '../datasources';
import {Transaction, TransactionRelations} from '../models';

export class TransactionRepository extends DefaultCrudRepository<
  Transaction,
  typeof Transaction.prototype.TransactionId,
  TransactionRelations
> {
  constructor(
    @inject('datasources.TransactionDB') dataSource: TransactionDbDataSource,
  ) {
    super(Transaction, dataSource);
  }
}
