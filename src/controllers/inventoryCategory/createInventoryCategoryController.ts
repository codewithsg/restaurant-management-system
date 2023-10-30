import { Request, Response } from 'express';
import { ICreateInventoryCategoryRequestBody } from '../../interfaces/requests/InventoryCategory';
import { InventoryCategory } from '../../models/InventoryCategory';
import { createInventoryCategoryValidator } from '../../utils/validators/inventoryCategoryValidator';

const createInventoryCategoryController = async (
  req: Request<{}, {}, ICreateInventoryCategoryRequestBody>,
  res: Response
) => {
  try {
    //validate request data
    await createInventoryCategoryValidator(req.body);

    //find restaurant objectId from user to associate inventoryCategory with restaurant
    const restroObjectId = req.user.restroObjectId;

    //find if the restroCategoryName already exists in the restaurant
    const inventoryCategory = await InventoryCategory.findOne({
      restaurant: restroObjectId,
      name: req.body.name,
    });
    if (inventoryCategory) {
      return res.status(400).json({
        message: 'Inventory Category already exists',
      });
    }

    //create new inventoryCategory
    const newInventoryCategory = new InventoryCategory({
      restaurant: restroObjectId,
      name: req.body.name,
    });
    await newInventoryCategory.save();
    res.status(201).json({
      msg: 'Inventory category created successfully',
      newInventoryCategory,
    });
  } catch (err: any) {
    res.status(400).json({ err });
  }
};

export { createInventoryCategoryController };
