import { Request, Response } from 'express';
import { User } from '../../models/User';

const getVendorByRestaurantIdController = async (
  req: Request,
  res: Response
) => {
  try {
    //find all users with role[] wich includes vendor and restaurant id
    const vendors = await User.find({
      restaurant: req.user.restroObjectId,
      role: { $in: ['Vendor'] },
    }).select('-password -restaurant');
    res.json({ vendors });
  } catch (err) {
    res.status(400).json({ err });
  }
};

export { getVendorByRestaurantIdController };
