import { Request, Response } from 'express';
import { InventoryCategory } from '../../models/InventoryCategory';

const getInventoryCategoryController = async (req: Request, res: Response) => {
  try {
    const inventoryCategories = await InventoryCategory.find({
      restaurant: req.user.restroObjectId,
    });
    res.json({ inventoryCategories });
  } catch (err: any) {
    res.status(400).json({ err });
  }
};

export { getInventoryCategoryController };
