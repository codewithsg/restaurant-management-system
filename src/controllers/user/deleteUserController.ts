import { Request, Response } from 'express';
import { User } from '../../models/User';

const deleteUserController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    //extract usertoBeDeleted id form req param
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ msg: 'please provide valid id parameter' });
    }

    // await user?.save();
    const user = await User.findById(id);

    //if no user
    if (!user) {
      return res.status(400).json({ msg: 'User doesnt exists' });
    }

    //delete user
    await user.remove();

    res.status(200).json({ msg: 'User deleted successfully' });
  } catch (err: any) {
    res.status(400).json({ err });
  }
};

export { deleteUserController };
