import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminGuard } from './admin.guard';
import { MeetingRoomsComponent } from './meeting-rooms/meeting-rooms.component';
import { SallesComponent } from './admin-dashboard/salles/salles.component';
import { ReservationsComponent } from './admin-dashboard/reservations/reservations.component';
import { UsersComponent } from './admin-dashboard/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'salles', component: SallesComponent },
      { path: 'reservations', component: ReservationsComponent },
      { path: 'users', component: UsersComponent },
      { path: '', redirectTo: 'salles', pathMatch: 'full' },
    ],
  },
  { path: 'meeting-rooms', component: MeetingRoomsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
