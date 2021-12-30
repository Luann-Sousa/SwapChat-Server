import { Request, Response } from 'express';
import { GetAlllAddressService } from '../../services/Address/GetAlllAddressService';

class GetAlllAddressController {
  async handle(request: Request, response: Response) {
    const service = new GetAlllAddressService();

    const result = await service.execute();

    return response.status(200).json({
      error: false,
      address: result,
    });
  }
}

export { GetAlllAddressController };
