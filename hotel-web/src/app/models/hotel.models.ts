
export interface Room {
  id: number;
  name: string;
  type: string;
  price: number;
  description: string;
  imageUrl: string;
  available: boolean;
}

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
