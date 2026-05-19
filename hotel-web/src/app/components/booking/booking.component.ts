import { Component, ChangeDetectionStrategy, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HotelService } from '../../services/hotel.service';
import { Room } from '../../models/room.model';
import { Booking } from '../../models/booking.model';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private hotelService = inject(HotelService);

  room = signal<Room | null>(null);
  loading = signal(true);
  submitting = signal(false);
  successMessage = signal('');
  errorMessage = signal('');

  booking = signal<Booking>({
    name: '',
    email: '',
    checkIn: '',
    checkOut: ''
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.hotelService.getRoomById(Number(id)).subscribe({
        next: (room) => {
          this.room.set(room);
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set('Room not found.');
          this.loading.set(false);
        }
      });
    }
  }

  submitBooking(): void {
    const currentRoom = this.room();
    if (!currentRoom) return;

    const currentBooking = this.booking();
    if (!currentBooking.name || !currentBooking.email ||
        !currentBooking.checkIn || !currentBooking.checkOut) {
      this.errorMessage.set('Please fill in all fields.');
      return;
    }

    this.submitting.set(true);
    this.errorMessage.set('');

    this.hotelService.createBooking(currentBooking, currentRoom.id).subscribe({
      next: (response) => {
        this.successMessage.set(
          `Booking confirmed! Your booking ID is #${response.id}. We'll see you on ${currentBooking.checkIn}!`
        );
        this.submitting.set(false);
      },
      error: (err) => {
        this.errorMessage.set('Booking failed. Please try again.');
        this.submitting.set(false);
        console.error(err);
      }
    });
  }

  onBookingChange(field: keyof Booking, value: string): void {
    this.booking.update(b => ({ ...b, [field]: value }));
  }

  goBack(): void {
    this.router.navigate(['/rooms']);
  }
}
