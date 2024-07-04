import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservationForm!: FormGroup;
  roomId!: string;
  userId!: string;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private reservationService: ReservationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const roomId = this.route.snapshot.paramMap.get('id');
    if (!roomId) {
      this.errorMessage = 'Room ID is missing';
      return;
    }
    this.roomId = roomId;
    this.userId = this.getUserIdFromSession();  // Retrieve userId from session
    this.reservationForm = this.fb.group({
      name: ['', Validators.required],
      dateDebutReservation: ['', Validators.required],
      dateFinReservation: ['', Validators.required]
    });
  }

  // Method to get userId from session
  getUserIdFromSession(): string {
   // Assuming 'userId' is stored in localStorage
    const userId = localStorage.getItem('userId');
    if (!userId) {
      throw new Error('User ID not found in session');
    }
    return userId;
  }

  onSubmit(): void {
    if (this.reservationForm.invalid) {
      return;
    }

    const reservationData = {
      ...this.reservationForm.value,
      numSalleId: this.roomId,
      userId: this.userId  // Include userId in the reservation data
    };

    this.reservationService.addReservation(reservationData).subscribe(
      response => {
        this.router.navigate(['/meeting-rooms']);
      },
      error => {
        this.errorMessage = error.error.message || 'Error making reservation';
      }
    );
  }

}
