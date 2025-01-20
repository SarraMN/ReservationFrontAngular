import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    // Use the environment variable or default to 'http://127.0.0.1:9090'
    this.apiUrl = environment.apiBaseUrl ? `${environment.apiBaseUrl}/reservation/` : 'http://127.0.0.1:9090/reservation/';
  }

  getReservations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getReservationById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${id}`);
  }

  addReservation(reservation: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, reservation);
  }

  updateReservation(id: string, reservation: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}${id}`, reservation);
  }

  deleteReservation(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}${id}`);
  }
}

