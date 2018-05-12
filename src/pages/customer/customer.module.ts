import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerPage } from './customer';
import { AddressComponent } from '../../components/address/address.component';

@NgModule({
  declarations: [
    CustomerPage,
    AddressComponent
  ],
  imports: [
    IonicPageModule.forChild(CustomerPage),
  ],
})
export class CustomerPageModule {}
