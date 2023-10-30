import { Request, Response } from 'express';
import { InventoryItem } from '../../models/InventoryItem';

const getInventoryItemByCategoryController = async (
  req: Request,
  res: Response
) => {
  try {
    if (!req.query.category_id) {
      return res.status(400).json({ msg: 'query category_id is required' });
    }
    const inventory = await InventoryItem.find({
      inventoryCategory: req.query.category_id,
    });
    res.send({ inventory });
  } catch (err: any) {
    res.status(400).json({ err });
  }
};

export { getInventoryItemByCategoryController };
