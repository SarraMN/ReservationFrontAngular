import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SalleService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    // Use the environment variable or default to 'http://127.0.0.1:9090/salle/'
    this.apiUrl = environment.apiBaseUrl ? `${environment.apiBaseUrl}/salle/` : 'http://127.0.0.1:9090/salle/';
  }

  getSalles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getSalleById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${id}`);
  }

  addSalle(salle: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, salle);
  }

  updateSalle(id: string, salle: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}${id}`, salle);
  }

  deleteSalle(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}${id}`);
  }
}
