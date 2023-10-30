import joi, { string } from "joi";
import { ICreateMenuCategoryRequestBody, IUpdateMenuCategoryRequestBody } from "../../interfaces/requests/MenuCategory";

const createMenuCategoryValidator = async (data: ICreateMenuCategoryRequestBody) => {
    const createMenuCategorySchema = joi.object({
        name: joi.string().required().min(3).max(25),
        description: joi.string().min(15).max(100)
    })
    return await createMenuCategorySchema.validateAsync(data);
}

const updateMenuCategoryValidator = async (data: IUpdateMenuCategoryRequestBody) => {
    const updateMenuCategorySchema = joi.object({
        id: joi.string().required(),
        name: joi.string().min(3).max(25),
        description: joi.string().min(15).max(100)
    })
    return await updateMenuCategorySchema.validateAsync(data);
}

export {
    createMenuCategoryValidator,
    updateMenuCategoryValidator
}