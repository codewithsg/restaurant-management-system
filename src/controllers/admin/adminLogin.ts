import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { appAdminLoginValidator } from '../../utils/validators/adminValidator';
import { IAdminLoginRequestBody } from '../../interfaces/requests/Admin';
import { AppAdmin } from '../../models/AppAdmin';

//function to validate hash to the user input
const validatePassword = async (
  encryptedPassword: string,
  checkString: string
) => {
  return await bcrypt.compare(checkString, encryptedPassword);
};

//function to assign token to the user on successful login
const assignToken = (appAdmin: any) => {
  const token = jwt.sign(
    {
      _id: appAdmin._id,
      role: ['App Admin'],
    },
    process.env.TOKEN_SECRET!
  );
  return token;
};

const adminLoginController = async (
  req: Request<{}, {}, IAdminLoginRequestBody>,
  res: Response
) => {
  try {
    //validate the request data
    await appAdminLoginValidator(req.body);

    //find app admin with the given mobile number
    const appAdmin = await AppAdmin.findOne({
      mobileNumber: req.body.mobileNumber,
    }).select('+password');
    //if app admin is not found
    if (!appAdmin) {
      return res.status(401).json({ msg: 'Invalid Credentials' });
    }

    //validate password against hash
    const isValidPassword = await validatePassword(
      appAdmin.password,
      req.body.password
    );
    //if password is not valid
    if (isValidPassword === false) {
      return res.status(401).json({ msg: 'Invalid Credentials' });
    }

    //if all successfull return token
    const token = assignToken(appAdmin);
    res.json({ msg: 'Welcome Admin', token: token, appAdmin });
  } catch (err) {
    res.status(400).json({ err });
  }
};

export { adminLoginController };
