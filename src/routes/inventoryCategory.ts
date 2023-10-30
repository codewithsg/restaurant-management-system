import { Router } from 'express';
import { createInventoryCategoryController } from '../controllers/inventoryCategory/createInventoryCategoryController';
import { getInventoryCategoryController } from '../controllers/inventoryCategory/getInventoryCategoryController';
import { authentication } from '../middlewares/authenticate';
import { isInventoryManager } from '../middlewares/authorization';
import { updateInventoryCategoryController } from '../controllers/inventoryCategory/updateInventoryCategoryController';

const router = Router();

router.get(
  '/',
  [authentication, isInventoryManager],
  getInventoryCategoryController
);

router.post(
  '/',
  [authentication, isInventoryManager],
  createInventoryCategoryController
);

router.put(
  '/',
  [authentication, isInventoryManager],
  updateInventoryCategoryController
);

export { router as inventoryCategoryRouter };
