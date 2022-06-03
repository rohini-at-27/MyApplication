import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CustomerDbDataSource} from '../datasources';
import {Customer, CustomerRelations} from '../models';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.CustomerId,
  CustomerRelations
> {
  constructor(
    @inject('datasources.CustomerDB') dataSource: CustomerDbDataSource,
  ) {
    super(Customer, dataSource);
  }
}
