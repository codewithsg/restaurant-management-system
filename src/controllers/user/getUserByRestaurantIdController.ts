import { Request, Response } from 'express';
import { User } from '../../models/User';

const getUserByRestaurantIdController = async (req: Request, res: Response) => {
  try {
    const users = await User.find({
      restaurant: req.user.restroObjectId,
    }).select('-password -restaurant');
    res.json({ users });
  } catch (err) {
    res.status(400).json({ err });
  }
};

export { getUserByRestaurantIdController };
