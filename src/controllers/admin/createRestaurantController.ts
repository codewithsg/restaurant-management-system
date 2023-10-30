import { Request, Response } from 'express';
import { ICreateRestaurantRequestBody } from '../../interfaces/requests/Restaurant';
import { Restaurant } from '../../models/Restaurant';
import { createRestaurantValidator } from '../../utils/validators/restaurantValidator';

const createRestaurantController = async (
  req: Request<{}, {}, ICreateRestaurantRequestBody>,
  res: Response
) => {
  try {
    //1.validate the request data
    await createRestaurantValidator(req.body);

    //2. create restaurant if data are valid
    const newRestaurant = new Restaurant({
      name: req.body.name.toLowerCase(),
      address: req.body.address,
      location: {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude],
      },
      features: req.body.features,
      contactNumber: req.body.contactNumber,
    });

    await newRestaurant.save();

    return res.status(201).json({
      msg: 'Restaurant created successfully',
      restaurant: newRestaurant,
    });
  } catch (err: any) {
    res.status(400).json({ err });
  }
};

export { createRestaurantController };
