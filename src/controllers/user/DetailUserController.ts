import { Request, Response } from 'express';
import { DetailUserService } from '../../services/user/DetailUserService';

class DetailUserController {
  async handle(req: Request, res: Response) {
    const detailUser = new DetailUserService();
    const detail = await detailUser.execute();

    res.json(detail);
  }
}

export { DetailUserController };
