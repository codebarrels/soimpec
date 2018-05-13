import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { ActionSheetController, IonicPage } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Customer } from '../customer/customer.model';
import { CustomerListService } from './customer-list.service';
import { CustomerPage } from '../customer/customer';
import * as Identicon from 'identicon.js';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-list',
  templateUrl: 'customer-list.html'
})
export class CustomerListPage {
  private customersList: Observable<Customer[]>;
  private idCustomer: string;
  private options = {
    foreground: [255, 255, 255, 255],
    background: [17, 69, 226, 255],
    margin: 0.2,
    size: 128,
    format: 'svg'
  };

  constructor(
    private fdb: AngularFireDatabase,
    private navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    private customerListService: CustomerListService,
    private sanitizer: DomSanitizer) {
    this.customersList = this.customerListService
      .getCustomersList()
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
  }

  getAvatar(key) {
    let data = new Identicon(key, this.options).toString();
    return this.sanitizer.bypassSecurityTrustUrl('data:image/svg+xml;base64,'+ data);
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

