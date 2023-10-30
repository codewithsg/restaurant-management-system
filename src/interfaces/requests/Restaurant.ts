export interface ICreateRestaurantRequestBody {
  name: string;
  address: string;
  longitude: number;
  latitude: number;
  features: string[];
  contactNumber: string;
}
