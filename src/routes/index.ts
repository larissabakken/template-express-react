import { Router } from 'express';
import UserController from '../app/controllers/usersController';

const router = Router();

router.get('/users', UserController.getAll);

export default router;