import { getRepository } from 'typeorm';
import { Request } from '../../entities/Request';

class GetOneRquestService {
  async execute(user_id: string) {
    const repositorieGetOne = getRepository(Request);

    const requestOne = await repositorieGetOne.findOne(user_id);
    console.log(requestOne);

    return requestOne;
  }
}

export { GetOneRquestService };
