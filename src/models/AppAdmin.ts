import { Schema, model } from 'mongoose';
import { IAppAdminDoc, IAppAdminModel } from '../interfaces/models/AppAdmin';

const appAdminSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    mobileNumber: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const AppAdmin = model<IAppAdminDoc, IAppAdminModel>(
  'appAdmin',
  appAdminSchema
);

export { AppAdmin };
