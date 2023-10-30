import { Schema, model } from 'mongoose';

import {
  IRestockHistoryDoc,
  IRestockHistoryModel,
} from '../interfaces/models/RestockHistory';

const restockHistorySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    inventoryItem: {
      type: [Schema.Types.ObjectId],
      ref: 'inventoryItem',
      required: true,
    },
    paidTotal: {
      type: Boolean,
      required: true,
    },
    vendor: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    cashRemaining: {
      type: Number,
      required: true,
    },
    cashPaid: {
      type: Number,
      required: true,
    },
    billImage: {
      type: String,
      required: false,
      default: '',
    },
  },
  { timestamps: true }
);

const RestockHistory = model<IRestockHistoryDoc, IRestockHistoryModel>(
  'restockHistory',
  restockHistorySchema
);

export { RestockHistory };
