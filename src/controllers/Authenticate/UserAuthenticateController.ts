import { Request, Response } from 'express';
import { UserAuthenticateService } from '../../services/Authenticate/UserAuthenticateService';

class UserAuthenticateController {
  async handle(request: Request, response: Response) {
    const { username, email, password } = request.body;

    const authenticateSevice = new UserAuthenticateService();

    const authenticaUser = await authenticateSevice.execute({
      username,
      email,
      password,
    });

    return response.status(201).json({
      error: false,
      authUser: authenticaUser,
    });
  }
}

export { UserAuthenticateController };
