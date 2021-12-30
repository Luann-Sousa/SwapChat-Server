import { Request, Response } from 'express';
import { GetOneRquestService } from '../../services/Request/GetOneRequestService';

class GetOneRequestController {
  async handle(request: Request, response: Response) {
    const { user_id } = request.params;
    const service = new GetOneRquestService();

    const result = await service.execute(user_id);

    return response.status(200).json(result);
  }
}

export { GetOneRequestController };
