import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Customer } from './customer.model';
import { CustomerListService } from '../customer-list/customer-list.service';
import { CustomerListPage } from '../customer-list/customer-list';
import { AddressPage } from '../address/address';


@IonicPage()
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {

  AddressPage: typeof AddressPage;
  isEditMode = true;
  pageTitle = 'Add customer';
  pageAction = "Add";
  customer: Customer = new Customer();
  customerList = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private customerListService: CustomerListService) {
    this.AddressPage = AddressPage;
    this.customer = navParams.get('customer') || new Customer();
    if (this.customer && this.customer.firstName) {
      this.pageTitle = this.customer.firstName + " " + this.customer.lastName;
      this.pageAction = "Edit";
      this.isEditMode = undefined;
    }
  }

  public ionViewWillEnter() {
    this.customer.address = this.navParams.get('address') || null;
    console.log(this.customer.address);
  }

  // goToAddress(){
  //   this.navCtrl.push(AddressPage, {}, { animate: true, animation: 'transition', duration: 500, direction: 'up' });
  // }

  executeAction(action: string, customer: Customer) {
    if (action === "Add") {
      this.addCustomer(customer);
    } else if (action === "Save") {
      this.updateCustomer(customer);
    } else {
      this.isEditMode = true;
      this.pageAction = "Save";
    };
  }

  getActionIcon(action: String) {
    if (action === "Add" || action === "Save") {
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
