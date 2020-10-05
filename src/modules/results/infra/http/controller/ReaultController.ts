import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListResultService from '@modules/results/services/ListResultService';
import SaveResultService from '@modules/results/services/SaveResultService';

export default class ReaultController {
  async index(request: Request, response: Response): Promise<Response> {
    const listResultService = container.resolve(ListResultService);

    const data = await listResultService.execute();

    return response.json(data);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { notRepeat } = request.body;

    const saveResultService = container.resolve(SaveResultService);

    const data = await saveResultService.execute({ notRepeat });

    return response.json(data);
  }
}
