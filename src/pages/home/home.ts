import { CalendarService } from './../../components/calendar/calendar.service';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private events;
  private error;
  private test = "hello world";
  constructor(public navCtrl: NavController, private calendarService: CalendarService) {
  }

  getEventsFromCalendar() {
    this.calendarService.getEventsCalendarList().subscribe(
      (res) => {
        this.error = JSON.stringify(res);
        this.events = res;
      }
    );
  }
}
