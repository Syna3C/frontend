import { Event } from '../models/event';
import { EventError } from '../state/event/EventTypes';

export interface IEventState {
  event?: Event;
  eventErrors?: EventError[];
  isActive: boolean;
  isActiveInProgress: boolean;
}