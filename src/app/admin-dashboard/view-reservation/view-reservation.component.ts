import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-view-reservation',
  templateUrl: './view-reservation.component.html',
  styleUrls: ['./view-reservation.component.css']
})
export class ViewReservationComponent implements OnInit {
  reservation: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reservationService: ReservationService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.reservationService.getReservationById(id).subscribe((data: any) => {
        this.reservation = data;
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/admin-dashboard/reservations']);
  }
}
