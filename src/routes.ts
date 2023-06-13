import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthentication } from './middlewares/isAuthentication';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';

const router = Router();

// USERS
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthentication, new DetailUserController().handle);

// CATEGORY
router.post(
  '/category',
  isAuthentication,
  new CreateCategoryController().handle,
);

export { router };
