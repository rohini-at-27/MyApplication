import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TicketBookingDbDataSource} from '../datasources';
import {TicketBooking, TicketBookingRelations} from '../models';

export class TicketBookingRepository extends DefaultCrudRepository<
  TicketBooking,
  typeof TicketBooking.prototype.GovermentId,
  TicketBookingRelations
> {
  constructor(
    @inject('datasources.TicketBookingDB') dataSource: TicketBookingDbDataSource,
  ) {
    super(TicketBooking, dataSource);
  }
}
