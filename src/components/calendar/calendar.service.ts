import { Injectable } from "@angular/core";
import { Calendar } from "@ionic-native/calendar";

@Injectable()
export class CalendarService {

    constructor(private calendar: Calendar) {

    }

    createCalendar() {
        this.calendar.createCalendar('soImpecCalendar').then(
            (msg) => { console.log(msg); },
            (err) => { console.log(err); }
        );
    }

    createEvent() {
        var startDate = new Date(2018, 5, 15, 7, 30, 0, 0); // beware: month 0 = january, 11 = december
        var endDate = new Date(2018, 5, 15, 19, 30, 0, 0);
        var title = "My nice event";
        var location = "Home";
        var notes = "Some notes about this event.";
        var calOptions = this.calendar.getCalendarOptions();

        if (this.calendar.hasReadWritePermission()) {
            this.calendar.createEventWithOptions(title, location, notes, startDate, endDate, calOptions).then(message => {
                alert("Success: " + JSON.stringify(message));
            }).catch(message => {
                alert("Error: " + message);
            });
        }
    }

    openAgenda() {
        this.calendar.openCalendar(new Date());
    }
}