import { IEventResponse } from "../interfaces/responses/IEventResponse";

export class Event {
    
    private _eventId: number;
    private _name: string;
    private _description: string;
    private _line1: string;
    private _line2: string;
    private _city: string;
    private _state: string;
    private _zip: number;
    private _country: string;
    private _latitude: number;
    private _longitude: number;
    private _startDate: string;
    private _endDate: string;
    private _status: string;
    private _createdBy: string;
    private _createdOn: string;
    private _lastUpdated: string;
    private _currentPage: number;
    private _numItems: number;
    private _totalPages: number;
  
    constructor(json: IEventResponse) {
      
      this._eventId = json.eventId;
      this._name = json.name;
      this._description = json.description;
      this._line1 = json.address.line1;
      this._line2 = json.address.line2;
      this._city= json.address.city;
      this._state = json.address.state;
      this._zip = json.address.zip;
      this._country = json.address.country;
      this._latitude = json.coordinate.latitude;
      this._longitude = json.coordinate.longitude;
      this._startDate= json.startDate;
      this._endDate = json.endDate;
      this._status = json.status;
      this._createdBy = json.createdBy;
      this._createdOn = json.createdOn;
      this._lastUpdated = json.lastUpdated;
      this._currentPage= json.currentPage;
      this._numItems= json.numItems;
      this._totalPages = json.totalPages;
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
  
    public get line1(): string {
      return this._line1;
    }
  
    public get line2(): string {
      return this._line2;
    }
  
    public get city(): string {
      return this._city;
    }
  
    public get state(): string{
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
  
    public get startDate(): string {
      return this._startDate;
    }
  
    public get endDate(): string {
      return this._endDate;
    }
  
    public get status(): string{
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
  
    public get currentPage(): number {
      return this._currentPage;
    }
  
    public get numItems(): number {
      return this._numItems;
    }
  
    public get totalPages(): number{
      return this._totalPages;
    }
  }