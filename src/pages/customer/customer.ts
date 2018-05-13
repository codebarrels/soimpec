import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Customer, Address } from './customer.model';
import { CustomerListService } from '../customer-list/customer-list.service';
import { CustomerListPage } from '../customer-list/customer-list';
import { AddressPage } from '../address/address';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';



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
    private customerListService: CustomerListService,
    private toastCtrl: ToastController,
    private launchNavigator: LaunchNavigator
  ) {
    this.AddressPage = AddressPage;
    this.customer = navParams.get('customer') || new Customer();
    if (this.customer && this.customer.firstName) {
      this.pageTitle = this.customer.firstName + " " + this.customer.lastName;
      this.pageAction = "Edit";
      this.isEditMode = undefined;
    }
  }

  public ionViewWillEnter() {
    this.customer.address = this.navParams.get('address') || this.customer.address;
    // console.log(this.customer.address);
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
    if (this.isValidForm(customer)) {
      this.customerListService.createCustomer(customer).then(ref => {
        this.navCtrl.setRoot(CustomerListPage, { key: ref.key })
      });
    }
  }

  private updateCustomer(customer: Customer) {
    if (this.isValidForm(customer)) {
      this.customerListService.updateCustomer(customer);
      this.navCtrl.pop();
    }
  }

  private isValidForm(customer: Customer) {
    if (customer.firstName && customer.lastName && customer.address && customer.telephone && customer.serviceList && customer.type) {
      return true;
    } else {
      let toast = this.toastCtrl.create({
        message: 'Please complete customer information!',
        duration: 3000,
        position: 'top'
      });
      toast.present();
      return false;
    }
  }

  private navigateToCustomer(address: Address) {
    let addressNav = address.numero + address.rue + address.codePostal + address.ville;
    console.log('adresse', addressNav);
    this.launchNavigator.navigate(addressNav)
      .then(
          success => console.log('Launched navigator'),
          error => console.log('Error launching navigator', error)
        );
  }
}
