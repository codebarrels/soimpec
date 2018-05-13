import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tab1Page } from './tab1';
import { CustomerListPage } from '../customer-list/customer-list';

@NgModule({
  declarations: [
    Tab1Page,
    CustomerListPage
  ],
  imports: [
    IonicPageModule.forChild(Tab1Page),
  ]
})
export class Tab1PageModule {}
