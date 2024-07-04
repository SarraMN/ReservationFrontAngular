import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent {
  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('user'); // Supprimez les informations utilisateur si nécessaire
    localStorage.removeItem('isAdmin'); // Supprimez les informations d'administration si nécessaire

    this.router.navigate(['/login']); // Redirection vers la page de login après la déconnexion
  }
}
