import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../models/room.model';
import { Booking, BookingResponse } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api';

  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.apiUrl}/rooms`);
  }

  getRoomById(id: number): Observable<Room> {
    return this.http.get<Room>(`${this.apiUrl}/rooms/${id}`);
  }

  createBooking(booking: Booking, roomId: number): Observable<BookingResponse> {
    return this.http.post<BookingResponse>(
      `${this.apiUrl}/bookings?roomId=${roomId}`,
      booking
    );
  }
}
