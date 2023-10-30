import { Request, Response } from 'express';
import { User } from '../../models/User';

const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const currentUser = await User.findById(req.user._id);

    if (!currentUser) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    return res.status(200).json(currentUser);
  } catch (err) {
    res.status(400).json({ err });
  }
};

export { getCurrentUser };
