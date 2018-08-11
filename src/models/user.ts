import { IRolePermissions } from '../interfaces/IRolePermissions';
import { IUserWithPermissions } from '../interfaces/responses/IUserWithPermissions';

export class User implements IUserWithPermissions {

  private _username: string;
  private _userId: number;
  private _email: string;
  private _firstName: string;
  private _lastName: string;
  private _role: string;
  private _permissions: IRolePermissions;

  constructor(json: IUserWithPermissions) {
    this._userId = json.userId;
    this._username = json.username;
    this._email = json.firstName;
    this._lastName = json.lastName;
    this._firstName = json.firstName;
    this._role = json.role;
    this._permissions = json.permissions;
  }

  public get userId(): number {
    return this._userId;
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

  public get permissions(): IRolePermissions {
    return this._permissions;
  }
}