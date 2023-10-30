import { Request, Response } from 'express';
import { IStockInventoryItemRequestBody } from '../../interfaces/requests/InventoryItem';
import { stockInventoryItemValidator } from '../../utils/validators/inventoryItemValidator';
import { InventoryItem } from '../../models/InventoryItem';
import { IInventoryItemDoc } from '../../interfaces/models/InventoryItem';
import { RestockHistory } from '../../models/RestockHistory';
import async from 'async';

const stockInventoryItemController = async (
  req: Request<{}, {}, IStockInventoryItemRequestBody>,
  res: Response
) => {
  try {
    //1. validate request body
    await stockInventoryItemValidator(req.body);

    //2. create new inventory items if legnth of newItems array is greater than 0
    let newItems: IInventoryItemDoc[] = [];
    let updateItems: IInventoryItemDoc[] = [];
    if (req.body.newItems.length > 0) {
      newItems = await InventoryItem.insertMany(req.body.newItems);
    }

    //3. update all the items in from the updateItems array
    async.eachSeries(
      req.body.updateItems,
      (item, callback) => {
        InventoryItem.findByIdAndUpdate(
          item.id,
          {
            $set: {
              measurementUnit: [item.measurementUnit],
              quantity: item.quantity,
              unitRate: item.unitRate,
            },
          },
          { new: true },
          (err, updatedItem) => {
            if (err) {
              return callback(err);
            }
            if (updatedItem !== null) {
              updateItems.push(updatedItem);
            }

            callback(null);
          }
        );
      },
      async (err) => {
        if (err) {
          return res.status(500).json({
            message: 'Error while updating inventory items',
            err,
          });
        }
        //4. create restockHistory document
        const restockHistory = new RestockHistory({
          user: req.user._id,
          inventoryItem: [...newItems, ...updateItems],
          paidTotal: req.body.paidTotal,
          cashPaid: req.body.cashPaid,
          vendor: req.body.vendor,
          cashRemaining: req.body.cashRemaining,
        });

        await restockHistory.save();
      }
    );

    res.status(201).json({});
  } catch (err: any) {
    res.status(400).json({ err });
  }
};

export { stockInventoryItemController };
