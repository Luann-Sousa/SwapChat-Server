import { Request, Response } from 'express';
import { CreateUserService } from '../../services/User/UserCreateService';

class UserCreateControler {
  async handle(request: Request, response: Response) {
    const {
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
    } = request.body;
    const createUser = new CreateUserService();

    const user = await createUser.execute({
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
    return response.status(201).json({
      error: false,
      user: user,
    });
  }
}

export { UserCreateControler };
