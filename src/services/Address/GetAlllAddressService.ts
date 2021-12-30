import { getRepository } from 'typeorm';
import { Address } from '../../entities/Address';

class GetAlllAddressService {
  async execute() {
    const addressRepositorie = getRepository(Address);

    const address = await addressRepositorie.find({
      relations: ['user'],
    });

    return address;
  }
}

export { GetAlllAddressService };
