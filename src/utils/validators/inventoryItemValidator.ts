import joi from 'joi';

export const stockInventoryItemValidator = async (data: any) => {
  const stockInventoryItemSchema = joi.object({
    newItems: joi.array().items(
      joi.object({
        inventoryCategory: joi.string().required(),
        itemName: joi.string().required(),
        quantity: joi.number().required(),
        measurementUnit: joi.array().items(joi.string()).required(),
        unitRate: joi.number().required(),
      })
    ),
    updateItems: joi.array().items(
      joi.object({
        id: joi.string().required(),
        measurementUnit: joi.string().required(),
        quantity: joi.number().required(),
        unitRate: joi.number().required(),
      })
    ),
    cashPaid: joi.number().required(),
    cashRemaining: joi.number().required(),
    vendor: joi.string().required(),
    paidTotal: joi.boolean().required(),
    billImage: joi.string().optional(),
  });
  return await stockInventoryItemSchema.validateAsync(data);
};
