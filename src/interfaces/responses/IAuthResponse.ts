import { IUserWithPermissions } from './IUserWithPermissions';

export interface IAuthResponse {
  user: IUserWithPermissions,
  token: string;
}