import { Request, Response } from "express";
import { MenuCategory } from "../../models/MenuCategory";

const getMenuCategoryByRestaurantIdController = async (req: Request, res: Response) => {
    try {
        const menuCategory = await MenuCategory.find({ restaurant: req.user.restroObjectId });
        /* check if menu category exist or not */
        if (!menuCategory)
            return res.status(400).json({ msg: "Resturant does not have any menu category" })
        res.status(200).json({ menuCategory })
    } catch (err: any) {
        res.status(400).json({ err })
    }
}

export { getMenuCategoryByRestaurantIdController }