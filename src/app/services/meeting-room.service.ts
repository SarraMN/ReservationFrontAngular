import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingRoomService {

  private apiUrl = 'http://localhost:9090/salle';

  constructor(private http: HttpClient) { }

  getMeetingRooms(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getMeetingRoomById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addMeetingRoom(meetingRoom: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, meetingRoom);
  }

  updateMeetingRoom(id: string, meetingRoom: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, meetingRoom);
  }

  deleteMeetingRoom(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
