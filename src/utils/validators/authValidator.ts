import joi from 'joi';

export const loginValidator = async (data: any) => {
  const loginSchema = joi.object({
    restaurant: joi.string().required(),
    mobileNumber: joi.string().required().min(10).max(13),
    password: joi.string().required(),
  });
  return await loginSchema.validateAsync(data);
};
