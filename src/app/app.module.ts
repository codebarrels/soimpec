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
import { ListPage } from '../pages/customer/list/list';
import { CustomerListService } from '../pages/customer/customer-list.service';
import { CustomerPage } from '../pages/customer/page/customer';
import { AddressComponent } from '../components/address/address.component';
import { CityCodesService } from '../components/address/city-codes.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CustomerPage,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CustomerPage,
    AddressComponent
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
