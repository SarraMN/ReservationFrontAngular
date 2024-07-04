import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }

  viewUser(user: any): void {
    // Implémentez la logique pour afficher les détails de l'utilisateur
  }

  deleteUser(id: string): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(u => u._id !== id);
    });
  }
}
