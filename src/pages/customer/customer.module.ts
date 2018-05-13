import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerPage } from './customer';
import { AddressPageModule } from '../address/address.module';

@NgModule({
  declarations: [
    CustomerPage
  ],
  imports: [
    AddressPageModule,
    IonicPageModule.forChild(CustomerPage),
  ],
})
export class CustomerPageModule {}
