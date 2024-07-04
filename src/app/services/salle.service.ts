import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SalleService {
  private apiUrl = '/api/salles';

  constructor(private http: HttpClient) {}

  getSalles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addSalle(salle: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, salle);
  }

  updateSalle(id: string, salle: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, salle);
  }

  deleteSalle(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
