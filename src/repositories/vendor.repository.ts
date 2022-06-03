import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {VendorDbDataSource} from '../datasources';
import {Vendor, VendorRelations} from '../models';

export class VendorRepository extends DefaultCrudRepository<
  Vendor,
  typeof Vendor.prototype.id,
  VendorRelations
> {
  constructor(
    @inject('datasources.VendorDB') dataSource: VendorDbDataSource,
  ) {
    super(Vendor, dataSource);
  }
}
