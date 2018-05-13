import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
import { CalendarService } from '../../components/calendar/calendar.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,
  private calendarService: CalendarService) {
  }


}
