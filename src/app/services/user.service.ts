import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    // Use the environment variable or default to 'http://127.0.0.1:9090/user/'
    this.apiUrl = environment.apiBaseUrl ? `${environment.apiBaseUrl}/user/` : 'http://127.0.0.1:9090/user/';
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getUserById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${id}`);
  }

  updateUser(id: string, user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}${id}`, user);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}${id}`);
  }

  getUserWithReservations(id: string): Observable<any> {
    console.log(`${this.apiUrl}${id}/reservations`);
    return this.http.get<any>(`${this.apiUrl}${id}/reservations`);
  }
}
