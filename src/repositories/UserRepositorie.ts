import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/User';

@EntityRepository(User)
class UserRepositorie extends Repository<User> {}

export { UserRepositorie };
