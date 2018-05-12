import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CustomerListService } from '../pages/customer-list/customer-list.service';
import { CustomerListPage } from '../pages/customer-list/customer-list';
import { CustomerPage } from '../pages/customer/customer';
import { CustomerPageModule } from '../pages/customer/customer.module';
import { AddressComponent } from '../components/address/address.component';
import { CityCodesService } from '../components/address/city-codes.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CustomerListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    CustomerPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CustomerListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CustomerListService,
    CityCodesService
  ]
})
export class AppModule {}
