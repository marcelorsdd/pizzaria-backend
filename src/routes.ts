import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';

const router = Router();

// USERS
router.post('/users', new CreateUserController().handle);

export { router };
