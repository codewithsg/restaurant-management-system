import { Router } from 'express';
import { getInventoryItemByCategoryController } from '../controllers/inventoryItem/getInventoryItemByCategoryController';
import { stockInventoryItemController } from '../controllers/inventoryItem/stockInventoryItemController';
import { authentication } from '../middlewares/authenticate';
import { isInventoryManager } from '../middlewares/authorization';

const router = Router();

router.get(
  '/',
  [authentication, isInventoryManager],
  getInventoryItemByCategoryController
);

router.post(
  '/stock',
  [authentication, isInventoryManager],
  stockInventoryItemController
);

export { router as inventoryItemRouter };
