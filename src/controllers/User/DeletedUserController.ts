import { Request, Response } from 'express';
import { DeletedUserService } from '../../services/User/DeletedUserService';

class DeletedUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deletService = new DeletedUserService();

    const userDeleted = deletService.execute(id);

    return response.status(200).json({
      error: false,
      user: userDeleted,
    });
  }
}

export { DeletedUserController };
