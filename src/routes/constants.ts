import { Request, Response, Router } from 'express';
import { authentication } from '../middlewares/authenticate';
import { isOwner } from '../middlewares/authorization';
import { roles } from '../constants';

const router = Router();

router.get('/user', [authentication, isOwner], (req: Request, res: Response) =>
  res.json({ roles })
);

export { router as constantsRouter };
