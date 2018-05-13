import { Component, LOCALE_ID } from "@angular/core";
import { NavController, ModalController, AlertController } from 'ionic-angular';
import * as moment from 'moment';
import { CalendarService } from "./calendar.service";
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

    constructor(
        public navCtrl: NavController,
        private modalCtrl: ModalController,
        private alertCtrl: AlertController,
        private calendarService: CalendarService) { }

    openAgenda() {
        this.calendarService.openAgenda();
    }
    
    addEvent() {
        let modal = this.modalCtrl.create('EventModalPage', { selectedDay: this.selectedDay });
        modal.present();
        modal.onDidDismiss(data => {
            if (data) {
                let eventData = data;

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