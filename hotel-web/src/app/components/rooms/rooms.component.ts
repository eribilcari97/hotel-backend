import { Component, ChangeDetectionStrategy, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HotelService } from '../../services/hotel.service';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit {
  private hotelService = inject(HotelService);
  private router = inject(Router);

  rooms = signal<Room[]>([]);
  loading = signal(true);
  errorMessage = signal('');

  ngOnInit(): void {
    this.loadRooms();
  }

  private loadRooms(): void {
    this.hotelService.getAllRooms().subscribe({
      next: (data) => {
        this.rooms.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.errorMessage.set('Could not load rooms. Is the backend running?');
        this.loading.set(false);
        console.error('API Error:', err);
      }
    });
  }

  bookRoom(roomId: number): void {
    this.router.navigate(['/booking', roomId]);
  }
}
