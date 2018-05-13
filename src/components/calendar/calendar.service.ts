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

    createEvent(eventData) {
        var location = "Home";
        var notes = "Some notes about this event.";
        var calOptions = this.calendar.getCalendarOptions();

        if (this.calendar.hasReadWritePermission()) {
            this.calendar.createEventWithOptions(eventData.title, location, notes, eventData.startTime, eventData.endTime, calOptions).then(message => {
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