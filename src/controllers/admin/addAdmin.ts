import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { createAdminValidator } from '../../utils/validators/adminValidator';
import { ICreateUserByAdminRequestBody } from '../../interfaces/requests/Admin';
import { AppAdmin } from '../../models/AppAdmin';

const encryptPassword = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

const addAdminController = async (
  req: Request<{}, {}, ICreateUserByAdminRequestBody>,
  res: Response
) => {
  try {
    //validate the request data
    await createAdminValidator(req.body);

    //check if app admin is already on the database
    const appAdmin = await AppAdmin.findOne({ name: req.body.name });

    if (appAdmin) {
      return res.status(400).json({ msg: 'App Admin already exists' });
    }

    //if not, create the app admin
    const encryptedPassword = await encryptPassword(req.body.password);
    const newAppAdmin = new AppAdmin({
      name: req.body.name.toLowerCase(),
      mobileNumber: req.body.mobileNumber,
      password: encryptedPassword,
    });

    await newAppAdmin.save();

    res
      .status(201)
      .json({ msg: 'User created successfully', admin: newAppAdmin });
  } catch (err: any) {
    res.status(400).json({ err });
  }
};

export { addAdminController };
