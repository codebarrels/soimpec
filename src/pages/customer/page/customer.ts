import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { Customer } from '../customer.model';

@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html'
})
export class CustomerPage {
  customer: Customer = new Customer();
  
  constructor(public navCtrl: NavController,
            navParams: NavParams) {    
    this.customer = navParams.get('customer');
  }

}