import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { ActionSheetController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Customer } from '../customer/customer.model';
import { CustomerListService } from './customer-list.service';
import { CustomerPage } from '../customer/customer';

@Component({
  selector: 'page-list',
  templateUrl: 'customer-list.html'
})
export class CustomerListPage {
  customersList: Observable<Customer[]>;

  constructor(
    private fdb: AngularFireDatabase,
    private navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    private customerListService: CustomerListService) {
    this.customersList = this.customerListService
      .getCustomersList()
      .snapshotChanges()
      .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      })
  }

  seeCustomer(event, cliente: Customer) {
    this.navCtrl.push(CustomerPage, { customer: cliente })
  }

  presentActionSheet(customer: Customer) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modifier fiche cliente ?',
      cssClass: '',
      buttons: [
        {
          text: 'Supprimer',
          role: 'delete',
          cssClass: '',
          handler: () => {
            this.customerListService.deleteCustomer(customer);
            console.log('delete clicked');
          }
        }, {
          text: 'Modifier',
          role: 'modify',
          cssClass: '',
          handler: () => {
            this.navCtrl.push(CustomerPage, { customer: customer })
            console.log('edit clicked');
          }
        }, {
          text: 'Annuler',
          role: 'cancel',
          cssClass: '',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}

