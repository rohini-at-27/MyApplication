import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConfirmationMailDbDataSource} from '../datasources';
import {ConfirmationMail, ConfirmationMailRelations} from '../models';

export class ConfirmationMailRepository extends DefaultCrudRepository<
  ConfirmationMail,
  typeof ConfirmationMail.prototype.SeatNumber,
  ConfirmationMailRelations
> {
  constructor(
    @inject('datasources.ConfirmationMailDB') dataSource: ConfirmationMailDbDataSource,
  ) {
    super(ConfirmationMail, dataSource);
  }
}
