import { getRepository } from 'typeorm';
import { Address } from '../../entities/Address';

interface IAddressProps {
  uf: string;
  city: string;
  zip_code: string;
  district: string;
  street: string;
  number: number;
  user_id: string;
}

class CreateAddressService {
  async execute({
    uf,
    city,
    zip_code,
    district,
    street,
    number,
    user_id,
  }: IAddressProps) {
    const userRepositorie = getRepository(Address);
    const address = userRepositorie.create({
      uf,
      city,
      zip_code,
      district,
      street,
      number,
      user_id,
    });

    await userRepositorie.save(address);

    return address;
  }
}

export { CreateAddressService };
