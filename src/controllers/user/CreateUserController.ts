import { Request, Response } from 'express';
import { CreateUserService } from '../../services/user/CreateUserService';

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const userService = new CreateUserService();
    const user = await userService.execute({ name, email, password });

    res.json(user);
  }
}

export { CreateUserController };
