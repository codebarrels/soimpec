import { IonicPage, NavController } from "ionic-angular";
import { Component } from "@angular/core";
import { CityCode } from "../../components/address/cities.model";
import { Address } from "../customer/customer.model";

@IonicPage()
@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {
    address : Address = new Address();
    city: CityCode = new CityCode();

    constructor(public navCtrl: NavController) {
        
    }

    onCityChange(city: CityCode) {
        this.city = city;
        this.address.codePostal = city.code.toString();
        this.address.ville = city.city;
    }

    validate() {
        if(this.address.numero && this.address.rue && this.address.codePostal && this.address.ville) {
            this.navCtrl.getPrevious().data.address = this.address;
            this.navCtrl.pop();
        }
    }
}