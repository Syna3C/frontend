export interface IAddress {
  line1: string;
  line2: string;
  city: string;
  state: string;
  zip: number;
  country: string;
  coordinates: {
    latitude: number;
    longitude: number;
  }
}