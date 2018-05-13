import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
import { CalendarService } from '../../components/calendar/calendar.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
  private calendarService: CalendarService) {
  }

  addEvent() {
    this.calendarService.createEvent();
  }

  openAgenda() {
    this.calendarService.openAgenda();
  }
}
