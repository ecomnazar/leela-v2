export type TRole = "user" | "master" | "admin";

export interface IUser {
  birthday: null;
  companyName: string;
  defaultPictureUrl: string;
  email: string;
  firstName: string;
  gender: null;
  id: number;
  lastName: string;
  phone: null;
  role: TRole;
  userName: string;
}
