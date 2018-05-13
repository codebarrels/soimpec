import { Injectable } from "@angular/core";
import { Calendar } from "@ionic-native/calendar";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class CalendarService {
    private eventCalendarListRef = this.afDb.list<any>('event-calendar-list'); 

    constructor(private calendar: Calendar, private afDb: AngularFireDatabase) {
    }

    createCalendar() {
        this.calendar.createCalendar('soImpecCalendar').then(
            (msg) => { console.log(msg); },
            (err) => { console.log(err); }
        );
    }

    createEvent(eventData: any) {
        var location = "Home";
        var notes = "Some notes about this event.";
        var calOptions = this.calendar.getCalendarOptions();

        if (this.calendar.hasReadWritePermission()) {
            let address = eventData.customer.address.numero + " " + eventData.customer.address.rue + " " +  eventData.customer.address.codePostal + " " + eventData.customer.address.ville;
            this.calendar.createEventWithOptions(eventData.title, address, eventData.notes, eventData.startTime, eventData.endTime, calOptions).then(message => {
               let eventStored = {
                title: eventData.title,
                notes: eventData.notes,
                customer: eventData.customer,
                startTime: eventData.startTime.toString(),
                endTime: eventData.endTime.toString(),
                allDay: eventData.allDay
            }
                this.eventCalendarListRef.push(eventStored);
            }).catch(message => {
                alert("Error: " + message);
                // FOR DEBUG ON PC

                // let eventStored = {
                //     title: eventData.title,
                //     notes: eventData.notes,
                //     customer: eventData.customer,
                //     startTime: eventData.startTime.toString(),
                //     endTime: eventData.endTime.toString(),
                //     allDay: eventData.allDay
                // }
                // this.eventCalendarListRef.push(eventStored);

            });
        }
    }

    openAgenda() {
        this.calendar.openCalendar(new Date());
    }

    getEventsCalendarList() {
        return this.eventCalendarListRef;
    }

    // updateEventCalendar(eventData: EventCalendar) {
    //     return this.eventCalendarListRef.update(eventData.key, eventData);
    // }

    // deleteEventCalendar(eventData: EventCalendar) {
    //     return this.eventCalendarListRef.remove(eventData.key);
    // }
}