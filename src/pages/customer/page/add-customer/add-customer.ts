import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../../list/list';
import { Customer } from '../../customer.model';
import { CustomerListService } from '../../customer-list.service';


@IonicPage()
@Component({
  selector: 'page-add-customer',
  templateUrl: 'add-customer.html',
})
export class AddCustomerPage {

  customer: Customer = new Customer();
  customerList = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private customerListService: CustomerListService) {

  }

  addCustomer(customer: Customer) {
    this.customerListService.createCustomer(customer).then(ref => {
      this.navCtrl.setRoot(ListPage, {key : ref.key })
    });
  }
}
