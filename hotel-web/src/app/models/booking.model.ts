import { Room } from './room.model';

export interface Booking {
  name: string;
  email: string;
  checkIn: string;
  checkOut: string;
}

export interface BookingResponse {
  id: number;
  name: string;
  email: string;
  checkIn: string;
  checkOut: string;
  room: Room;
}
