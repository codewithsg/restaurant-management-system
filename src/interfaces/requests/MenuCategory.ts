export interface ICreateMenuCategoryRequestBody {
    name: string;
    description: string;
}

export interface IUpdateMenuCategoryRequestBody {
    name: string;
    description: string;
    id: string;
}