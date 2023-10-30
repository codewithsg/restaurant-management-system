import { Request, Response } from 'express';
import { IUpdateInventoryCategoryRequestBody } from '../../interfaces/requests/InventoryCategory';
import { updateInventoryCategoryValidator } from '../../utils/validators/inventoryCategoryValidator';
import { InventoryCategory } from '../../models/InventoryCategory';

const updateInventoryCategoryController = async (
  req: Request<{}, {}, IUpdateInventoryCategoryRequestBody>,
  res: Response
) => {
  try {
    //validate the request data
    await updateInventoryCategoryValidator(req.body);

    //update inventory category
    const updatedInventoryCategory = await InventoryCategory.findByIdAndUpdate(
      req.body.id,
      { name: req.body.name },
      { new: true }
    );
    res.json({
      msg: 'inventory category updated successfully',
      updatedInventoryCategory,
    });
  } catch (err: any) {
    res.status(400).json({ err });
  }
};

export { updateInventoryCategoryController };
