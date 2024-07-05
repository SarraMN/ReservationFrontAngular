import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-reservations',
  templateUrl: './user-reservations.component.html',
  styleUrls: ['./user-reservations.component.css']
})
export class UserReservationsComponent implements OnInit {
  reservations: any[] = [];
  userId: string = '';
  

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userId = this.getUserIdFromSession();
    this.userService.getUserWithReservations(this.userId)
      .subscribe(data => {
        this.reservations = data.reservations; // Assurez-vous que data.reservations est un tableau
      });
  }

  getUserIdFromSession(): string {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      throw new Error('User ID not found in session');
    }
    return userId;
  }

}
