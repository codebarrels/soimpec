import { Component, LOCALE_ID } from "@angular/core";
import { NavController, ModalController, AlertController } from 'ionic-angular';
import * as moment from 'moment';
import { CalendarService } from "./calendar.service";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'calendar-component',
    templateUrl: 'calendar.component.html',
    styles: ['calendar.component.scss']
})

export class CalendarComponent {
    eventSource = [];
    viewTitle: string;
    selectedDay = new Date();

    calendar = {
        mode: 'month',
        currentDate: new Date(),
        locale: LOCALE_ID
    };

    private eventCalendarList: Observable<any>
    private events;
    constructor(
        public navCtrl: NavController,
        private modalCtrl: ModalController,
        private alertCtrl: AlertController,
        private calendarService: CalendarService) {
            let events =this.eventSource;
            this.eventCalendarList = 
            this.calendarService.getEventsCalendarList()
                .snapshotChanges()
                .map(
                changes => {
                    return changes.map(c => {
                    return({
                        key: c.payload.key,
                        ...c.payload.val()
                    })
                    })
                })

            this.eventCalendarList.subscribe( 
                (res) => {
                        res.map(event => {
                            if (event.startTime && event.endTime) {
                                event.startTime = new Date(event.startTime);
                                event.endTime = new Date(event.endTime);
                            }
                        })
                        if (res) {
                            res.forEach(event=>{
                                 events.push(event);
                                 this.eventSource = [];
                                 setTimeout(() => {
                                     this.eventSource = events;
                                 });
                                });
                        }                
                }
            )
        }


    openAgenda() {
        this.calendarService.openAgenda();
    }
    
    addEvent() {
        let modal = this.modalCtrl.create('EventModalPage', { selectedDay: this.selectedDay });
        modal.present();
        modal.onDidDismiss(data => {
            if (data) {
                let eventData: any = data;

                eventData.startTime = new Date(data.startTime);
                eventData.endTime = new Date(data.endTime);

                let events = this.eventSource;
                events.push(eventData);
                this.eventSource = [];
                setTimeout(() => {
                    this.eventSource = events;
                });

                this.calendarService.createEvent(eventData);
            }
        });
    }

    onViewTitleChanged(title) {
        this.viewTitle = title;
    }

    onEventSelected(event) {
        let start = moment(event.startTime).format('LLLL');
        let end = moment(event.endTime).format('LLLL');

        let alert = this.alertCtrl.create({
            title: '' + event.title,
            subTitle: 'De: ' + start + '<br>À: ' + end,
            buttons: ['OK']
        })
        alert.present();
    }

    onTimeSelected(ev) {
        this.selectedDay = ev.selectedTime;
    }


}