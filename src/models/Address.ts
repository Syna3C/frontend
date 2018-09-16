import { IAddress } from "../interfaces/IAddress";

export class Address {
  private _line1: string;
  private _line2: string;
  private _city: string;
  private _state: string;
  private _zip: number;
  private _country: string;
  private _latitude: number;
  private _longitude: number;

  constructor(json: IAddress) {
    this._line1 = json.line1;
    this._line2 = json.line2;
    this._city = json.city;
    this._state = json.state;
    this._zip = json.zip;
    this._country = json.country;
    this._latitude = json.coordinates.latitude;
    this._longitude = json.coordinates.longitude;
  }

  public get line1(): string {
    return this._line1;
  }

  public get line2(): string {
    return this._line2;
  }

  public get city(): string {
    return this._city;
  }

  public get state(): string {
    return this._state;
  }

  public get zip(): number {
    return this._zip;
  }

  public get country(): string {
    return this._country;
  }

  public get latitude(): number {
    return this._latitude;
  }

  public get longitude(): number {
    return this._longitude;
  }
}