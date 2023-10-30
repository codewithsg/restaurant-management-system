import { Document, Model } from 'mongoose';

export interface IMenuItem {
  name: string;
  description: string;
  restaurant: string;
  price: number;
  category: string;
  image: string;
  inventory: string;
  available: boolean;
}

export interface IMenuItemDoc extends Document {
  name: string;
  description: string;
  restaurant: string;
  price: number;
  category: string;
  image: string;
  inventory: string;
  available: boolean;
}

export interface IMenuItemModel extends Model<IMenuItemDoc> {}
