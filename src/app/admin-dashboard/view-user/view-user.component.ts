import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css'],
})
export class ViewUserComponent implements OnInit {
  user: any;
  reservations: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getUserWithReservations(id).subscribe((data: any) => {
        this.user = data.user;
        this.reservations = data.reservations;
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/admin-dashboard/users']);
  }
}
