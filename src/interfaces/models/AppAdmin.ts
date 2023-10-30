import { Document, Model } from 'mongoose';

export interface IAppAdmin {
  name: string;
  mobileNumber: string;
  password: string;
}

export interface IAppAdminDoc extends Document {
  name: string;
  mobileNumber: string;
  password: string;
}

export interface IAppAdminModel extends Model<IAppAdminDoc> {}
