import { Request, Response } from 'express';
import { CreateRequestsService } from '../../services/Request/CreateRequestService';

class RequestCreateController {
  async handle(request: Request, response: Response) {
    const { accepted, user_id, user_to } = request.body;

    const service = new CreateRequestsService();

    const result = await service.execute({
      accepted,
      user_id,
      user_to,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(201).json({
      error: false,
      request: result,
    });
  }
}

export { RequestCreateController };
