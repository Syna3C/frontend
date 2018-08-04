import { IRolePermissions } from '../interfaces/IRolePermissions';
import { IUser } from '../interfaces/IUser';
import { ILoginResponse } from '../interfaces/responses/ILoginResponse';

export class User implements IUser {

  private _username: string;
  private _id: number;
  private _email: string;
  private _firstName: string;
  private _lastName: string;
  private _role: string;
  private _permissions: IRolePermissions;

  constructor(json: ILoginResponse) {
    this._id = json.UserId;
    this._username = json.Username;
    this._email = json.FirstName;
    this._lastName = json.LastName;
    this._firstName = json.FirstName;
    this._role = json.Role;
    this._permissions = json.Permissions;
  }

  public get id(): number {
    return this._id;
  }

  public get username(): string {
    return this._username;
  }

  public get email(): string {
    return this._email;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public get role(): string {
    return this._role;
  }

  public get permission(): IRolePermissions {
    return this._permissions;
  }
}