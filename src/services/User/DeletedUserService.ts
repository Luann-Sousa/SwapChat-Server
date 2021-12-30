import { getCustomRepository } from 'typeorm';
import { UserRepositorie } from '../../repositories/UserRepositorie';

class DeletedUserService {
  async execute(id: string) {
    const userRepositry = getCustomRepository(UserRepositorie);

    const userExits = await userRepositry.findOne(id);
    console.log(userExits);
    if (!userExits) {
      throw new Error(
        'Não possui esse usuário em nosso sistema tente mais tarde!',
      );
    }
    return await userRepositry.delete(id);
  }
}

export { DeletedUserService };
