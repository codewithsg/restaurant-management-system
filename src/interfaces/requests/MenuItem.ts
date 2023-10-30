export interface ICreateMenuItemRequestBody {
  name: string;
  description: string;
  restaurant: string;
  price: number;
  category: string;
  image: string;
  inventory: string;
}

export interface IUpdateMenuItemRequestBody {
  id: string;
  name: string;
  description: string;
  restaurant: string;
  price: number;
  category: string;
  image: string;
  inventory: string;
  available: boolean;
}
