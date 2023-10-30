import { Router } from 'express';
import { getAllRestaurantController } from '../controllers/restaurant/GetAllRestaurantController';

const router = Router();

router.get('/', getAllRestaurantController);

export { router as restaurantRouter };
