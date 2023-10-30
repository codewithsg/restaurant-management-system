import mongoose from 'mongoose';

export interface IRestockHistory {
  inventoryItem: [string];
  vendor: string;
  cashRemaining: number;
  cashPaid: number;
  paidTotal: boolean;
  billImage: string;
  user: string;
}

export interface IRestockHistoryDoc extends mongoose.Document {
  inventoryItem: [string];
  vendor: string;
  cashRemaining: number;
  cashPaid: number;
  paidTotal: boolean;
  billImage: string;
  user: string;
}

export interface IRestockHistoryModel
  extends mongoose.Model<IRestockHistoryDoc> {}
