import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Customer } from '../../customer.model';
import { CustomerListService } from '../../customer-list.service';

@IonicPage()
@Component({
  selector: 'page-modify-customer',
  templateUrl: 'modify-customer.html',
})
export class ModifyCustomerPage {

  customer: Customer = new Customer();
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private customerListService: CustomerListService) {
      this.customer = this.navParams.get('customer');
  }

  // modifyCustomer(customer: Customer) {
  //   this.customerListService.createCustomer(customer);
  //   this.navCtrl.pop();
  // }
  modifyCustomer(customer: Customer) {
    this.customerListService.updateCustomer(customer);
    this.navCtrl.pop();

  }
}
