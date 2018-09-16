import { IEvent } from "../interfaces/IEvent";
import { Address } from "./Address";

export class Event {

  private _eventId: number;
  private _name: string;
  private _description: string;
  private _address: Address;
  private _startDate: string;
  private _endDate: string;
  private _status: string;
  private _createdBy: string;
  private _createdOn: string;
  private _lastUpdated: string;

  constructor(json: IEvent) {

    this._eventId = json.eventId;
    this._name = json.name;
    this._description = json.description;
    this._address = new Address(json.address)
    this._startDate = json.startDate;
    this._endDate = json.endDate;
    this._status = json.status;
    this._createdBy = json.createdBy;
    this._createdOn = json.createdOn;
    this._lastUpdated = json.lastUpdated;
  }

  public get eventId(): number {
    return this._eventId;
  }

  public get name(): string {
    return this._name;
  }

  public get description(): string {
    return this._description;
  }

  public get address(): Address {
    return this._address;
  }

  public get startDate(): string {
    return this._startDate;
  }

  public get endDate(): string {
    return this._endDate;
  }

  public get status(): string {
    return this._status;
  }
  public get createdBy(): string {
    return this._createdBy;
  }

  public get createOn(): string {
    return this._createdOn;
  }

  public get lastUpdated(): string {
    return this._lastUpdated;
  }
}