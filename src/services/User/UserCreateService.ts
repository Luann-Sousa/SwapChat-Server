import { getCustomRepository } from 'typeorm';
import { UserRepositorie } from '../../repositories/UserRepositorie';

interface IUserProps {
  name: string;
  username: string;
  email: string;
  password: string;
  sex: string;
  profession: string;
  about_me: string;
  photo?: string;
  phone: string;
  birth_date: string;
}

class CreateUserService {
  async execute({
    name,
    username,
    email,
    password,
    sex,
    profession,
    about_me,
    photo,
    phone,
    birth_date,
  }: IUserProps) {
    const useReposotry = getCustomRepository(UserRepositorie);

    const userAllexists = useReposotry.findOne({
      email,
    });

    if (userAllexists) {
      throw new Error('Já possui um usuário com este email tente outro !');
    }

    const user = useReposotry.create({
      name,
      username,
      email,
      password,
      sex,
      profession,
      about_me,
      photo,
      phone,
      birth_date,
    });
    await useReposotry.save(user);

    return user;
  }
}

export { CreateUserService };
