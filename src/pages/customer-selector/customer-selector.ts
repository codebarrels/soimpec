import { AngularFireDatabase } from "angularfire2/database";
import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Customer } from "../customer/customer.model";
import { NavController } from "ionic-angular";
import { CustomerListService } from "../customer-list/customer-list.service";
import { DomSanitizer } from "@angular/platform-browser";
import * as Identicon from 'identicon.js';

@Component({
    selector: 'customer-selector',
    templateUrl: 'customer-selector.html'
})
export class CustomerSelectorPage {
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
        private customerListService: CustomerListService,
        private sanitizer: DomSanitizer) {
        this.customersList = this.customerListService
            .getCustomersList()
            .snapshotChanges()
            .map(
                changes => {
                    return changes.map(c => {
                        return ({
                            key: c.payload.key,
                            ...c.payload.val()
                        })
                    })
                })
    }

    getAvatar(key) {
        let data = new Identicon(key, this.options).toString();
        return this.sanitizer.bypassSecurityTrustUrl('data:image/svg+xml;base64,' + data);
    }

    selectCustomer(customer) {
        this.navCtrl.getPrevious().data.customer = customer;
        this.navCtrl.pop();
    }
}