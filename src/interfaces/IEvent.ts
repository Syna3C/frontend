export interface IEvent {
  eventId: number;
  name: string;
  description: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    zip: number;
    country: string;
  };
  coordinate: {
    latitude: number;
    longitude: number;
  };
  startDate: string;
  endDate: string;
  status: string;
  createdBy: string;
  createdOn: string;
  lastUpdated: string;
  currentPage: number;
  numItems: number;
  totalPages: number;

  }