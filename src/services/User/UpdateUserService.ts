import { getCustomRepository } from 'typeorm';
import { UserRepositorie } from '../../repositories/UserRepositorie';

interface IUserProps {
  id: string;
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

class UpdateUserService {
  async execute({
    id,
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
    const userRepositry = getCustomRepository(UserRepositorie);

    const user = await userRepositry.findOne(id);

    if (!user) {
      return new Error('Não possui esse usário em nosso sitema tente outro !');
    }
    user.name = name ? name : user.name;
    user.username = username ? username : user.username;
    user.email = email ? email : user.email;
    user.password = password ? password : user.password;
    user.sex = sex ? sex : user.sex;
    user.profession = profession ? profession : user.profession;
    user.about_me = about_me ? about_me : user.about_me;
    user.photo = photo ? photo : user.photo;
    user.phone = phone ? phone : user.phone;
    user.birth_date = birth_date ? birth_date : user.birth_date;
    return await userRepositry.save(user);
  }
}

export { UpdateUserService };
