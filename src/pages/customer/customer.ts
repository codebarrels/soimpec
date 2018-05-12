import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Customer } from './customer.model';
import { CustomerListService } from '../customer-list/customer-list.service';
import { CustomerListPage } from '../customer-list/customer-list';


@IonicPage()
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {

  isEditMode = true;
  pageTitle='Add customer';
  pageAction="Add";
  customer: Customer = new Customer();
  customerList = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private customerListService: CustomerListService) {
      this.customer = navParams.get('customer') || new Customer();
      if(this.customer && this.customer.firstName) {
        this.pageTitle = this.customer.firstName + " " + this.customer.lastName;
        this.pageAction = "Edit";
        this.isEditMode = undefined;
      }
  }

  executeAction(action: string, customer: Customer) {
    if(action === "Add") {
      this.addCustomer(customer);
    } else if (action === "Save") {
      this.updateCustomer(customer);
    } else {
      this.isEditMode = true;
      this.pageAction = "Save";
    };
  }

  getActionIcon(action: String) {
    if(action === "Add" || action === "Save") {
      return "md-checkmark-circle-outline";
    } else {
      return "md-create";
    }
  }

  private addCustomer(customer: Customer) {
    this.customerListService.createCustomer(customer).then(ref => {
      this.navCtrl.setRoot(CustomerListPage, { key: ref.key })
    });
  }

  private updateCustomer(customer: Customer) {
    this.customerListService.updateCustomer(customer);
    this.navCtrl.pop();
  }
}
