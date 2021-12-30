import { getCustomRepository } from 'typeorm';
import { UserRepositorie } from '../../repositories/UserRepositorie';
import { sign } from 'jsonwebtoken';

interface IUserAuthProps {
  username?: string;
  email: string;
  password: string;
}

class UserAuthenticateService {
  async execute({ username, email, password }: IUserAuthProps) {
    const userAuthenticateService = getCustomRepository(UserRepositorie);

    if (!email) {
      throw new Error('Username ou Email Incorreto !');
    }

    const userAuth = userAuthenticateService.findOne({
      email,
    });

    if (!email) {
      throw new Error('Username ou Email Incorreto !');
    }

    const token = sign(
      {
        username: username,
        email: email,
        avatar: (await userAuth).photo,
      },
      '0b307ba5e9c6bb5e04528bb57925b471',
      {
        subject: (await userAuth).id,
        expiresIn: '1d',
      },
    );
    console.log(username, email, token);
    return { username, email, token };
  }
}

export { UserAuthenticateService };
