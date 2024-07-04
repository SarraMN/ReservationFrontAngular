import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://127.0.0.1:9090/user/';

  constructor(private http: HttpClient) {}

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
    return this.http.get<any>(`${this.apiUrl}${id}/reservations`);
  }
}
