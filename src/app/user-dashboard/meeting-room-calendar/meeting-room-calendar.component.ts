import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // Correct import
import dayGridPlugin from '@fullcalendar/daygrid';         // Import dayGrid plugin
import interactionPlugin from '@fullcalendar/interaction'; // Import interaction plugin
import { ReservationService } from '../../services/reservation.service'; // Import your reservation service

@Component({
  selector: 'app-meeting-room-calendar',
  templateUrl: './meeting-room-calendar.component.html',
  styleUrls: ['./meeting-room-calendar.component.css']
})
export class MeetingRoomCalendarComponent implements OnInit {
  calendarOptions!: CalendarOptions; // Use the definite assignment operator
  events: any[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.loadEvents();
    this.calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      events: this.events
    };
  }

  loadEvents(): void {
    this.reservationService.getReservations().subscribe(reservations => {
      this.events = reservations.map(reservation => ({
        title: reservation.name,
        start: new Date(reservation.dateDebutReservation).toISOString(),
        end: new Date(reservation.dateFinReservation).toISOString(),
        allDay: false
      }));
      this.calendarOptions.events = this.events;
    });
  }
}
