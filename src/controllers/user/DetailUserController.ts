import { Request, Response } from 'express';
import { DetailUserService } from '../../services/user/DetailUserService';

class DetailUserController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;

    const detailUser = new DetailUserService();
    const detail = await detailUser.execute(user_id);

    res.json(detail);
  }
}

export { DetailUserController };
