import joi from 'joi';

export const createInventoryCategoryValidator = async (data: any) => {
  const inventoryCategorySchema = joi.object({
    name: joi.string().required().min(3).max(25),
  });
  return await inventoryCategorySchema.validateAsync(data);
};

export const updateInventoryCategoryValidator = async (data: any) => {
  const inventoryCategorySchema = joi.object({
    name: joi.string().required().min(3).max(25),
    id: joi.string().required(),
  });
  return await inventoryCategorySchema.validateAsync(data);
};
