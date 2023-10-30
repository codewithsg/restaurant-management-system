import { Request, Response } from 'express';
import { User } from '../../models/User';

const getUserController = async (_: Request, res: Response) => {
  try {
    const users = await User.find({});
    res.json({ users });
  } catch (err) {
    console.log('Error in getUserController: ', err);
  }
};

export { getUserController };
