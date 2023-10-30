import { Router } from 'express';
import { authentication } from '../middlewares/authenticate';
import { updateMenuCategoryController } from '../controllers/menuCategory/updateMenuCategoryController';
import { createMenuCategoryController } from '../controllers/menuCategory/createMenuCategoryController';
import { getMenuCategoryByRestaurantIdController } from '../controllers/menuCategory/getMenuCategoryByRestaurantIdController';
import { isInventoryManager } from '../middlewares/authorization';

const router = Router();

router.get('/', [authentication], getMenuCategoryByRestaurantIdController);

router.post(
  '/',
  [authentication, isInventoryManager],
  createMenuCategoryController
);

router.put('/', [authentication], updateMenuCategoryController);

export { router as menuCategoryRouter };
