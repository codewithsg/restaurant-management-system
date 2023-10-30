import { Router } from 'express';
import { loginController } from '../controllers/auth/loginController';

const router = Router();

router.post('/login', loginController);

export { router as authRouter };
