import { getRepository } from 'typeorm';
import { Request } from '../../entities/Request';

type IRequestProps = {
  accepted: boolean;
  user_to: string;
  user_id: string;
};

class CreateRequestsService {
  async execute({ accepted, user_id, user_to }: IRequestProps) {
    const requestRepositorie = getRepository(Request);

    const request = requestRepositorie.create({
      accepted,
      user_id,
      user_to,
    });

    await requestRepositorie.save(request);

    return request;
  }
}

export { CreateRequestsService };
