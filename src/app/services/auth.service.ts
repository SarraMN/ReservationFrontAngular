import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    // Use the environment variable or default to 'http://localhost:9090'
    this.baseUrl = environment.apiBaseUrl || 'http://localhost:9090';
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/login`, credentials);
  }

  register(user: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/signup`, user);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/logout`, {});
  }
}