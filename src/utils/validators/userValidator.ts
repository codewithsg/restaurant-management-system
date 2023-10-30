import joi from 'joi';

export const createUserValidator = async (data: any) => {
  const createUserSchema = joi.object({
    name: joi.string().required().min(5).max(30).trim(),
    password: joi.string().required().min(5).max(30),
    mobileNumber: joi.string().required().min(10).max(13),
    salary: joi.number().optional().min(0),
    role: joi
      .array()
      .items(
        joi
          .string()
          .valid(
            'Owner',
            'Inventory Manager',
            'Vendor',
            'Waiter',
            'Kitchen Order Manager',
            'Bar Order Manager',
            'Cashier',
            'Accountant',
            'Member'
          )
      )
      .required(),
  });

  return await createUserSchema.validateAsync(data);
};

export const updateUserValidator = async (data: any) => {
  const updateUserSchema = joi.object({
    id: joi.string().required(),
    name: joi.string().optional().min(5).max(30).trim(),
    password: joi.string().optional().min(5).max(30),
    mobileNumber: joi.string().optional().min(10).max(13).trim(),
    salary: joi.number().optional().min(12000),
    role: joi
      .array()
      .optional()
      .items(
        joi
          .string()
          .valid(
            'Owner',
            'Inventory Manager',
            'Vendor',
            'Waiter',
            'Kitchen Order Manager',
            'Bar Order Manager',
            'Cashier',
            'Accountant',
            'Members'
          )
      ),
  });

  return await updateUserSchema.validateAsync(data);
};
