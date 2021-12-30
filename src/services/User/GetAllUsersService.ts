import { getRepository } from 'typeorm';
import { User } from '../../entities/User';

class GetAllUsersService {
  async execute() {
    const usersRepositorie = getRepository(User);

    const requests = await usersRepositorie.find();

    return requests;
  }
}

export { GetAllUsersService };
