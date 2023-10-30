import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { ILoginRequestBody } from '../../interfaces/requests/Auth';
import { User } from '../../models/User';
import * as jwt from 'jsonwebtoken';
import { loginValidator } from '../../utils/validators/authValidator';

//function to validate hash to the user input
const validatePassword = async (
  encryptedPassword: string,
  checkString: string
) => {
  return await bcrypt.compare(checkString, encryptedPassword);
};

//function to assign token to the user on successful login
const assignToken = (user: any) => {
  const token = jwt.sign(
    {
      _id: user._id,
      restroObjectId: user.restaurant._id,
      role: user.role,
    },
    process.env.TOKEN_SECRET!
  );
  return token;
};

const loginController = async (
  req: Request<{}, {}, ILoginRequestBody>,
  res: Response
) => {
  try {
    //validate the request data
    await loginValidator(req.body);

    //find user with the given restaurant and mobile number
    const user = await User.findOne({
      mobileNumber: req.body.mobileNumber,
      restaurant: req.body.restaurant,
    }).populate('restaurant');

    //if user is not found
    if (!user) {
      return res.status(401).json({ msg: 'Invalid Credentials' });
    }

    //validate password against hash
    const isValidPassword = await validatePassword(
      user.password,
      req.body.password
    );
    //if password is not valid
    if (isValidPassword === false) {
      return res.status(401).json({ msg: 'Invalid Credentials' });
    }

    //if all successfull return token
    const token = assignToken(user);

    //remove password from user object
    const { password, ...userWithoutPassword } = user.toObject();

    res.json({
      msg: 'login successfull',
      token: token,
      user: userWithoutPassword,
    });
  } catch (err) {
    res.status(400).json({ err });
  }
};

export { loginController };
