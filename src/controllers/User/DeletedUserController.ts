import { Request, Response } from 'express';
import { DeletedUserService } from '../../services/User/DeletedUserService';

class DeletedUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deletService = new DeletedUserService();

    const usuarioDeletado = deletService.execute(id);
    if (usuarioDeletado instanceof Error) {
      return response.json(usuarioDeletado.message);
    }

    return response.status(204).json({
      error: false,
      messeger: 'Usuário foi excluido com sucesso!',
    });
  }
}

export { DeletedUserController };
