export interface IUser {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  aboutMe?: string;
  role: string;
}