export interface IAdminLoginRequestBody {
  mobileNumber: string;
  password: string;
}

export interface ICreateUserByAdminRequestBody {
  restaurant: string;
  name: string;
  password: string;
  mobileNumber: string;
}
