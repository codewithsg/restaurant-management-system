import { Router } from 'express';
import { addAdminController } from '../controllers/admin/addAdmin';
import { adminLoginController } from '../controllers/admin/adminLogin';
import { createRestaurantController } from '../controllers/admin/createRestaurantController';
import { createRestaurantOwnerController } from '../controllers/admin/createRestaurantOwnerController';
import { authentication } from '../middlewares/authenticate';
import { isAppAdmin } from '../middlewares/authorization';

const router = Router();

router.post(
  '/restaurant',
  [authentication, isAppAdmin],
  createRestaurantController
);
router.post(
  '/restaurantOwner',
  [authentication, isAppAdmin],
  createRestaurantOwnerController
);
router.post('/addAdmin', [authentication, isAppAdmin], addAdminController);
router.post('/login', adminLoginController);

export { router as adminRouter };
