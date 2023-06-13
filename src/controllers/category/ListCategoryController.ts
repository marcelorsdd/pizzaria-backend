import { Request, Response } from 'express';
import { ListCategoryService } from '../../services/category/ListCategoryService';

class ListCategoryController {
  async handle(req: Request, res: Response) {
    const service = new ListCategoryService();
    const listCategory = await service.execute();

    return res.json(listCategory);
  }
}

export { ListCategoryController };
