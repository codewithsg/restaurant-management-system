import mongoose from 'mongoose';
import { IRestaurantDoc } from './Restaurant';

export interface IUser {
  restaurant: IRestaurantDoc;
  role: [string];
  name: string;
  password: string;
  salary: number;
  mobileNumber: string;
}

export interface IUserDoc extends mongoose.Document {
  restaurant: IRestaurantDoc;
  role: [string];
  name: string;
  password: string;
  salary: number;
  mobileNumber: string;
}

export interface IUserModel extends mongoose.Model<IUserDoc> {}
