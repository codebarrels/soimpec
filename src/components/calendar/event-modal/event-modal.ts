import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as moment from 'moment';
import { CustomerSelectorPage } from '../../../pages/customer-selector/customer-selector';
import { Customer } from '../../../pages/customer/customer.model';

@IonicPage()
@Component({
  selector: 'page-event-modal',
  templateUrl: 'event-modal.html',
})
export class EventModalPage {

  defaultTitleBegin = "[So impec!]: Appointement with ";

  event = {
    title: undefined,
    notes: undefined,
    startTime: new Date().toISOString(),
    endTime: new Date().toISOString(),
    allDay: false,
    customer: undefined as Customer
  };
  minDate = new Date().toISOString();

  constructor(public navCtrl: NavController, private navParams: NavParams, public viewCtrl: ViewController) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.event.startTime = preselectedDate;
    this.event.endTime = preselectedDate;
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  save() {
    this.viewCtrl.dismiss(this.event);
  }

  selectCustomer() {
    this.navCtrl.push(CustomerSelectorPage);
  }

  public ionViewWillEnter() {
    this.event.customer = this.navParams.get('customer') || null;
    if (this.event.customer && (!this.event.title || this.event.title.startsWith(this.defaultTitleBegin))) {
      this.event.title = this.defaultTitleBegin + this.event.customer.firstName + " " + this.event.customer.lastName;
    }
    if (this.event.customer) {
      this.event.notes = this.event.customer.serviceList.join(',') + " service(s) for " +
        this.event.customer.firstName + " " +
        this.event.customer.lastName + " (" + this.event.customer.type + ") ";
    }
  }

}