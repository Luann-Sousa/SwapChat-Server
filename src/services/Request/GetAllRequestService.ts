import { getRepository } from 'typeorm';
import { Request } from '../../entities/Request';

class GetAllRequestService {
  async execute() {
    const requestRepositorie = getRepository(Request);

    const requests = await requestRepositorie.find({
      relations: ['user'],
    });

    return requests;
  }
}

export { GetAllRequestService };
