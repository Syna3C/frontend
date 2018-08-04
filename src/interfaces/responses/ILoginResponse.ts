import { IRolePermissions } from '../IRolePermissions';

export interface ILoginResponse {
  UserId: number;
  Email: string;
  Username: string;
  FirstName: string;
  LastName: string;
  CompanyId: string;
  AboutMe?: string;
  Role: string;
  Permissions: IRolePermissions;
}