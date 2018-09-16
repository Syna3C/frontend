import { Event } from '../models/event';
import { Pagination } from '../models/Pagination';
import { EventError } from '../state/event/EventTypes';

export interface IEventState {

  // Events (Event feed)
  events?: Event[];
  eventsErrors?: EventError[];
  pagination?: Pagination;
  isEventsRequestInProgress: boolean;

  // TODO: Event (Event detail page)
}