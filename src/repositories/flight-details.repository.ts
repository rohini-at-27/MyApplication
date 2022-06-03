import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FlightDetailsDbDataSource} from '../datasources';
import {FlightDetails, FlightDetailsRelations} from '../models';

export class FlightDetailsRepository extends DefaultCrudRepository<
  FlightDetails,
  typeof FlightDetails.prototype.id,
  FlightDetailsRelations
> {
  constructor(
    @inject('datasources.FlightDetailsDB') dataSource: FlightDetailsDbDataSource,
  ) {
    super(FlightDetails, dataSource);
  }
}
