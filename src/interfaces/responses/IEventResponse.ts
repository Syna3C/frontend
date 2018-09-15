import { IEvent } from '../IEvent'
import { IPagination } from '../IPagination';

export interface IEventResponse {
  events: IEvent[];
  pagination: IPagination;
}