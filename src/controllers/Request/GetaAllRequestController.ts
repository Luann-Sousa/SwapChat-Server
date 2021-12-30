import { Request, Response } from 'express';
import { GetAllRequestService } from '../../services/Request/GetAllRequestService';

class GetaAllRequestController {
  async handle(request: Request, response: Response) {
    const service = new GetAllRequestService();

    const result = await service.execute();

    return response.status(200).json({
      error: false,
      request: result,
    });
  }
}

export { GetaAllRequestController };
