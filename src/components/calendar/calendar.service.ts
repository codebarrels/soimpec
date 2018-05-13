import { Injectable } from "@angular/core";
import { Calendar } from "@ionic-native/calendar";
import { AngularFireDatabase } from "angularfire2/database";
import { EventCalendar } from "./event-cal.model";

@Injectable()
export class CalendarService {
    private eventCalendarListRef = this.afDb.list<EventCalendar>('event-calendar-list'); 

    constructor(private calendar: Calendar, private afDb: AngularFireDatabase) {

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
            let address = eventData.customer.address.numero + " " + eventData.customer.address.rue + " " +  eventData.customer.address.codePostal + " " + eventData.customer.address.ville;
            this.calendar.createEventWithOptions(eventData.title, address, eventData.notes, eventData.startTime, eventData.endTime, calOptions).then(message => {
                this.eventCalendarListRef.push(eventData);
            }).catch(message => {
                alert("Error: " + message);
                this.eventCalendarListRef.push(eventData);

            });
        }
    }

    openAgenda() {
        this.calendar.openCalendar(new Date());
    }

    getEventsCalendarList() {
        console.log(this.eventCalendarListRef)
        return this.eventCalendarListRef;
    }

    // createEventCalendar(Event: Event) {
    //     return this.eventCalendarListRef.push(Event);
    // }

    updateEventCalendar(eventData: EventCalendar) {
        return this.eventCalendarListRef.update(eventData.key, eventData);
    }

    deleteEventCalendar(eventData: EventCalendar) {
        return this.eventCalendarListRef.remove(eventData.key);
    }
}