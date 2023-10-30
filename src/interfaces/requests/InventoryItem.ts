interface INewInventoryItem {
  inventoryCategory: string;
  itemName: string;
  quantity: number;
  measurementUnit: [string];
  unitRate: number;
}

interface IUpdateInventoryItem {
  id: string;
  measurementUnit: [string];
  quantity: number;
  unitRate: number;
}

export interface IStockInventoryItemRequestBody {
  newItems: [INewInventoryItem];
  updateItems: [IUpdateInventoryItem];
  vendor: string;
  cashRemaining: number;
  cashPaid: number;
  paidTotal: boolean;
  billImage: string;
}
