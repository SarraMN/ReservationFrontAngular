import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
})
export class ReservationsComponent implements OnInit {
  reservations: any[] = [];

  constructor(
    private reservationService: ReservationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations(): void {
    this.reservationService.getReservations().subscribe((data: any) => {
      this.reservations = data;
    });
  }

  viewReservation(id: string): void {
    this.router.navigate(['/admin-dashboard/view-reservation', id]);
  }

  deleteReservation(id: string): void {
    this.reservationService.deleteReservation(id).subscribe(() => {
      this.reservations = this.reservations.filter((r) => r._id !== id);
    });
  }
}
