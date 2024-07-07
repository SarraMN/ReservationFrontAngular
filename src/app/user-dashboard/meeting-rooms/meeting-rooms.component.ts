import { Component, OnInit } from '@angular/core';
import { SalleService } from '../../services/salle.service';

@Component({
  selector: 'app-meeting-rooms',
  templateUrl: './meeting-rooms.component.html',
  styleUrls: ['./meeting-rooms.component.css']
})
export class MeetingRoomsComponent implements OnInit {

  meetingRooms: any[] = [];

  constructor(private meetingRoomService: SalleService) { }

  ngOnInit(): void {
    this.loadMeetingRooms();
  }

  loadMeetingRooms(): void {
    this.meetingRoomService.getSalles().subscribe(data => {
      this.meetingRooms = data;
    }, error => {
      console.error('Error loading meeting rooms', error);
    });
  }

  reserveRoom(id: string): void {
    // Implement reservation logic
  }
}
