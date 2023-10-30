import { Request, Response } from 'express';
import { ICreateMenuCategoryRequestBody } from '../../interfaces/requests/MenuCategory';
import { MenuCategory } from '../../models/MenuCategory';
import { createMenuCategoryValidator } from '../../utils/validators/menuCategoryValidator';

const createMenuCategoryController = async (
  req: Request<{}, {}, ICreateMenuCategoryRequestBody>,
  res: Response
) => {
  try {
    /* Validate request body */
    await createMenuCategoryValidator(req.body);
    /* Check if name already exists */
    const menuCategory = await MenuCategory.find({ name: req.body.name });
    if (menuCategory.length > 0) {
      return res.status(400).json({
        message: 'Menu category already exists',
      });
    }
    /* If name does not exists then create new menu category */
    const newMenuCategory = new MenuCategory({
      name: req.body.name,
      description: req.body.description,
      restaurant: req.user.restroObjectId,
    });
    await newMenuCategory.save();
    res.status(200).json({
      msg: 'Menu Category Created Successfully',
      menuCategory: newMenuCategory,
    });
  } catch (err: any) {
    res.status(400).json({
      err,
    });
  }
};

export { createMenuCategoryController };
