import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { User } from '../../models/User';
import { createUserValidator } from '../../utils/validators/userValidator';
import { ICreateUserRequestBody } from '../../interfaces/requests/User';

const encryptPassword = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

const createUserController = async (
  req: Request<{}, {}, ICreateUserRequestBody>,
  res: Response
) => {
  try {
    //when appOwner tries to create a new vendor with no name, default it to UnIndentified
    if (req.body.role.includes('Vendor') && req.body.name === '') {
      req.body.name = 'Unidentified';
    }

    //validate the request data
    await createUserValidator(req.body);

    //get the restaurant objectId from the user
    const restroObjectId = req.user.restroObjectId;

    //check if user is already on the database
    const user = await User.findOne({
      mobileNumber: req.body.mobileNumber,
      restaurant: restroObjectId,
    });

    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    //if not, create the user
    const encryptedPassword = await encryptPassword(req.body.password);
    const newUser = new User({
      restaurant: restroObjectId,
      mobileNumber: req.body.mobileNumber,
      name: req.body.name.toLowerCase(),
      password: encryptedPassword,
      role: req.body.role,
      salary: req.body.salary | 0,
    });

    await newUser.save();

    res.status(201).json({ msg: 'User created successfully', user: newUser });
  } catch (err: any) {
    res.status(400).json({ err });
  }
};

export { createUserController };
