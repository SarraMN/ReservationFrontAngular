import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingRoomCalendarComponent } from './meeting-room-calendar.component';

describe('MeetingRoomCalendarComponent', () => {
  let component: MeetingRoomCalendarComponent;
  let fixture: ComponentFixture<MeetingRoomCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeetingRoomCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingRoomCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
