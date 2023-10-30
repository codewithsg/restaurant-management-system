import mongoose from 'mongoose';

export interface IRestaurant {
  name: string;
  address: string;
  location: string;
  features: string[];
  contactNumber: string;
}

export interface IRestaurantDoc extends mongoose.Document {
  name: string;
  address: string;
  location: string;
  features: string[];
  contactNumber: string;
}

export interface IRestaurantModel extends mongoose.Model<IRestaurantDoc> {}
