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
import { MeetingRoomsComponent } from './user-dashboard/meeting-rooms/meeting-rooms.component';
import { SallesComponent } from './admin-dashboard/salles/salles.component';
import { ReservationsComponent } from './admin-dashboard/reservations/reservations.component';
import { UsersComponent } from './admin-dashboard/users/users.component';
import { ReservationComponent } from './user-dashboard/reservation/reservation.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

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
    ReservationComponent,
    UserDashboardComponent,
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
