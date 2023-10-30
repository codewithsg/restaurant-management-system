export interface ICreateUserRequestBody {
  name: string;
  password: string;
  role: [string];
  salary: number;
  mobileNumber: string;
}

export interface IUpdateUserRequestBody {
  id: string;
  name?: string;
  password?: string;
  role?: [string];
  salary?: number;
  mobileNumber?: string;
}
