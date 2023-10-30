import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { User } from '../../models/User';
import { createRestaurantOwnerValidator } from '../../utils/validators/adminValidator';
import { ICreateUserByAdminRequestBody } from '../../interfaces/requests/Admin';

const encryptPassword = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

const createRestaurantOwnerController = async (
  req: Request<{}, {}, ICreateUserByAdminRequestBody>,
  res: Response
) => {
  try {
    //validate the request data
    await createRestaurantOwnerValidator(req.body);

    //check if user is already on the database
    const user = await User.findOne({
      mobileNumber: req.body.mobileNumber,
      restaurant: req.body.restaurant,
    });

    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    //if not, create the user
    const encryptedPassword = await encryptPassword(req.body.password);
    const newUser = new User({
      restaurant: req.body.restaurant,
      name: req.body.name.toLowerCase(),
      mobileNumber: req.body.mobileNumber,
      password: encryptedPassword,
      role: ['Owner'],
    });

    await newUser.save();

    res.status(201).json({ msg: 'User created successfully', user: newUser });
  } catch (err: any) {
    res.status(400).json({ err });
  }
};

export { createRestaurantOwnerController };
