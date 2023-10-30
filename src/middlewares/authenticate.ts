import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

//middleware to authenticate token
const authentication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
      res.sendStatus(401);
      return;
    }

    const isVerifiedUser = jwt.verify(token, process.env.TOKEN_SECRET!);

    //isVerifiedUser containts userId and restroObjectId or undefined - fails on undefined
    if (isVerifiedUser) {
      req.user = isVerifiedUser;
      next();
    }
  } catch (err) {
    console.log('error in authentication middleware', err);
  }
};

export { authentication };
