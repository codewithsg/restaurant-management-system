import joi from 'joi';

export const createAdminValidator = async (data: any) => {
  const createAdminSchema = joi.object().keys({
    name: joi.string().required().trim(),
    password: joi.string().required(),
    mobileNumber: joi.string().required().min(10).max(13).trim(),
  });

  return await createAdminSchema.validateAsync(data);
};

export const appAdminLoginValidator = async (data: any) => {
  const loginSchema = joi.object({
    password: joi.string().required(),
    mobileNumber: joi.string().required().min(10).max(13),
  });
  return await loginSchema.validateAsync(data);
};

export const createRestaurantOwnerValidator = async (data: any) => {
  const createRestaurantOwnerSchema = joi.object().keys({
    restaurant: joi.string().required(),
    name: joi.string().required(),
    password: joi.string().required(),
    mobileNumber: joi.string().required().min(10).max(13),
  });

  return await createRestaurantOwnerSchema.validateAsync(data);
};
