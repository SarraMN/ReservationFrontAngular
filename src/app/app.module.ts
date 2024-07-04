import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MeetingRoomsComponent } from './meeting-rooms/meeting-rooms.component';
import { SallesComponent } from './admin-dashboard/salles/salles.component';
import { ReservationsComponent } from './admin-dashboard/reservations/reservations.component';
import { UsersComponent } from './admin-dashboard/users/users.component';
import { AddSalleComponent } from './admin-dashboard/add-salle/add-salle.component';
import { EditSalleComponent } from './admin-dashboard/edit-salle/edit-salle.component';
import { ViewReservationComponent } from './admin-dashboard/view-reservation/view-reservation.component';
import { ViewUserComponent } from './admin-dashboard/view-user/view-user.component';

@NgModule({
  declarations: [
    RegisterComponent,
    AuthComponent,
    AppComponent,
    AdminDashboardComponent,
    MeetingRoomsComponent,
    SallesComponent,
    ReservationsComponent,
    UsersComponent,
    AddSalleComponent,
    EditSalleComponent,
    ViewReservationComponent,
    ViewUserComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
