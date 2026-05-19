import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { BookingComponent } from './components/booking/booking.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'bookings', redirectTo: 'rooms', pathMatch: 'full' },
  { path: 'bookings/:id', redirectTo: 'booking/:id' },
  { path: 'booking/:id', component: BookingComponent },
];
