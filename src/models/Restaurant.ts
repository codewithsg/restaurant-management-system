import mongoose from 'mongoose';
import {
  IRestaurantDoc,
  IRestaurantModel,
} from '../interfaces/models/Restaurant';

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    //for geo json
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    features: {
      type: [String],
      required: true,
      enum: [
        'User Management',
        'Inventory Management',
        'Order Management',
        'Billing',
        'Financial Accounting',
        'Reporting And Analytics',
        'Online Ordering',
      ],
    },
    contactNumber: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Restaurant = mongoose.model<IRestaurantDoc, IRestaurantModel>(
  'restaurant',
  restaurantSchema
);

export { Restaurant };
