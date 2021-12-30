import { EntityRepository, Repository } from 'typeorm';
import { Address } from '../entities/Address';

@EntityRepository(Address)
class AddressRepositorie extends Repository<Address> {}
export { AddressRepositorie };
