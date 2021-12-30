import { Request, Response } from 'express';
import { UpdateUserService } from '../../services/User/UpdateUserService';

class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
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

    const userService = new UpdateUserService();

    const user = await userService.execute({
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
    });
    if (user instanceof Error) {
      return response.json(user.message);
    }

    return response.status(200).json({
      error: false,
      messeger: 'Usuário foi atualizada com sucesso!',
      user: user,
    });
  }
}

export { UpdateUserController };
