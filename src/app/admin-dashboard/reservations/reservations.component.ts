import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
})
export class ReservationsComponent implements OnInit {
  reservations: any[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations(): void {
    this.reservationService.getReservations().subscribe((data: any) => {
      this.reservations = data;
    });
  }

  viewReservation(reservation: any): void {
    // Implémentez la logique pour afficher les détails de la réservation
  }

  deleteReservation(id: string): void {
    this.reservationService.deleteReservation(id).subscribe(() => {
      this.reservations = this.reservations.filter((r) => r._id !== id);
    });
  }
}
