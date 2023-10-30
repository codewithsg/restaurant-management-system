import { Request, Response } from 'express';
import { Restaurant } from '../../models/Restaurant';

const getAllRestaurantController = async (_: Request, res: Response) => {
  try {
    const restaurants = await Restaurant.find({});

    if (!restaurants) {
      res.status(200).json({
        message: 'Hope we dont see this msg 6 months from now 1/25/2022',
      });
    }

    return res.status(200).json({ restaurants });
  } catch (err) {
    res.status(400).json({ err });
  }
};

export { getAllRestaurantController };
