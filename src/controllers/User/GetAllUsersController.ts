import { Request, Response } from 'express';
import { GetAllUsersService } from '../../services/User/GetAllUsersService';

class GetaAllUserController {
  async handle(request: Request, response: Response) {
    const service = new GetAllUsersService();

    const result = await service.execute();

    return response.status(200).json({
      error: false,
      users: result,
    });
  }
}

export { GetaAllUserController };
