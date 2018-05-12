import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifyCustomerPage } from './modify-customer';

@NgModule({
  declarations: [
    ModifyCustomerPage
  ],
  imports: [
    IonicPageModule.forChild(ModifyCustomerPage),
  ]
})
export class ModifyCustomerPageModule {}
