import { EntityRepository, Repository } from 'typeorm';
import { Request } from '../entities/Request';

@EntityRepository(Request)
class RequestRepositorie extends Repository<Request> {}
export { RequestRepositorie };
