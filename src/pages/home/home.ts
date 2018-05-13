import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private calendar: Calendar) {
      this.calendar.createCalendar('soImpecCalendar').then(
        (msg) => { console.log(msg); },
        (err) => { console.log(err); }
      );
      var startDate = new Date(2015,2,15,18,30,0,0); // beware: month 0 = january, 11 = december
      var endDate = new Date(2015,2,15,19,30,0,0);

      var title = "My nice event";
      var eventLocation = "Home";
      var notes = "Some notes about this event.";
      var success = function(message) { alert("Success: " + JSON.stringify(message)); };
      var error = function(message) { alert("Error: " + message); };
      var calOptions = this.calendar.getCalendarOptions(); 
      this.calendar.createEventWithOptions(title,eventLocation,notes,startDate,endDate,calOptions);
      this.calendar.openCalendar(new Date());
  }


}
