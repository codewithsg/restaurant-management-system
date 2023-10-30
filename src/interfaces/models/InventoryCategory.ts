import mongoose from 'mongoose';
import { IRestaurantDoc } from './Restaurant';

export interface IInventoryCategory {
  restaurant: IRestaurantDoc;
  name: string;
}

export interface IInventoryCategoryDoc extends mongoose.Document {
  restaurant: IRestaurantDoc;
  name: string;
}

export interface IInventoryCategoryModel
  extends mongoose.Model<IInventoryCategoryDoc> {}
