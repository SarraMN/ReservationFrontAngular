import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../../services/reservation.service';
import { SalleService } from '../../services/salle.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-view-reservation',
  templateUrl: './view-reservation.component.html',
  styleUrls: ['./view-reservation.component.css']
})
export class ViewReservationComponent implements OnInit {
  reservation: any;
  userDetails: any = {};
  salleDetails: any = {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reservationService: ReservationService,
    private salleService : SalleService,
    private userService : UserService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.reservationService.getReservationById(id).subscribe(
        (reservation) => {
          this.reservation = reservation;
          // Récupérer l'utilisateur associé à cette réservation
          this.userService.getUserById(reservation.userId).subscribe(
            (user) => {
              this.userDetails = user; // Ajoutez les détails de l'utilisateur
            },
            (error) => {
              console.error('Erreur lors de la récupération des détails de l\'utilisateur:', error);
            }
          );
          // Récupérer les détails de la salle associée à cette réservation
          this.salleService.getSalleById(reservation.numSalleId).subscribe(
            (salle) => {
              this.salleDetails = salle; // Ajoutez les détails de la salle
            },
            (error) => {
              console.error('Erreur lors de la récupération des détails de la salle:', error);
            }
          );
        },
        (error) => {
          console.error('Erreur lors de la récupération des détails de la réservation:', error);
        }
      );
    }
  }


  goBack(): void {
    this.router.navigate(['/admin-dashboard/reservations']);
  }
}
