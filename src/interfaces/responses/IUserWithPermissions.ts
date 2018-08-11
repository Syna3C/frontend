import { IRolePermissions } from '../IRolePermissions';
import { IUser } from '../IUser';

export interface IUserWithPermissions extends IUser {
  permissions: IRolePermissions;
}