import mongoose from 'mongoose';
import { IUserDoc, IUserModel } from '../interfaces/models/User';

const userSchema = new mongoose.Schema(
  {
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'restaurant',
      required: true,
    },
    role: {
      type: [String],
      enum: [
        'Owner',
        'Inventory Manager',
        'Vendor',
        'Waiter',
        'Kitchen Order Manager',
        'Bar Order Manager',
        'Cashier',
        'Accountant',
        'Member',
      ],
    },
    name: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<IUserDoc, IUserModel>('user', userSchema);

export { User };
