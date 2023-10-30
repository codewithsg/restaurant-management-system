import { Document, Model } from "mongoose";

export interface IMenuCategory {
    name: string;
    description: string;
    restaurant: string;
}

export interface IMenuCategoryDoc extends Document {
    name: string;
    description: string;
    restaurant: string;
}

export interface IMenuCategoryModel extends Model<IMenuCategoryDoc> { }