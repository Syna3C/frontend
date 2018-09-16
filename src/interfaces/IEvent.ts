import { IAddress } from "./IAddress";

export interface IEvent {
  eventId: number;
  name: string;
  description: string;
  address: IAddress;
  startDate: string;
  endDate: string;
  status: string;
  createdBy: string;
  createdOn: string;
  lastUpdated: string;
}