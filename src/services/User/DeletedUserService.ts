import { getCustomRepository } from 'typeorm';
import { UserRepositorie } from '../../repositories/UserRepositorie';

class DeletedUserService {
  async execute(id: string) {
    const userRepositry = getCustomRepository(UserRepositorie);

    const userExits = await userRepositry.findOne(id);

    if (!userExits) {
      throw new Error(
        'Não possui esse usuário em nosso sistema tente mais tarde!',
      );
    }
    const userDeleted = await userRepositry.delete(id);

    return userDeleted;
  }
}

export { DeletedUserService };
