import joi from 'joi';

export const createRestaurantValidator = async (data: any) => {
  const createRestaurantSchema = joi.object({
    name: joi.string().required().min(10).max(50),
    address: joi.string().required().min(10).max(50),
    longitude: joi.number().required(),
    latitude: joi.number().required(),
    features: joi.array().items(joi.string()).required(),
    contactNumber: joi.string().required().min(10).max(10),
  });

  return await createRestaurantSchema.validateAsync(data);
};
