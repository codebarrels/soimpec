import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerPage } from './customer';
import { AddressComponent } from '../../components/address/address.component';
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
