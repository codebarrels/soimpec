import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
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
import { CustomerPageModule } from '../pages/customer/customer.module';
import { CityCodesService } from '../components/address/city-codes.service';
import { CalendarComponent } from '../components/calendar/calendar.component';
import { NgCalendarModule  } from 'ionic2-calendar';
import { EventModalPageModule } from '../components/calendar/event-modal/event-modal.module';
import { registerLocaleData } from '@angular/common';
import { GoogleApiModule, NgGapiClientConfig, NG_GAPI_CONFIG } from "ng-gapi";
import localeFr from '@angular/common/locales/fr';
import { GoogleApiComponent } from '../components/calendar/google-api/google-api.component';
import { UserService } from '../components/calendar/google-api/userService';
import { SheetResource } from '../components/calendar/google-api/sheetResource';
registerLocaleData(localeFr);

let gapiClientConfig: NgGapiClientConfig = {
  client_id: "617226524848-d2fkljq1hmb71u9ao2442t11a3mnfss3.apps.googleusercontent.com",
  discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
  scope: ["https://www.googleapis.com/auth/calendar"].join(" ")
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CustomerListPage, 
    CalendarComponent,
    GoogleApiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    CustomerPageModule,
    NgCalendarModule,
    EventModalPageModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CustomerListPage,
    CalendarComponent,
    GoogleApiComponent  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CustomerListService,
    CityCodesService,
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    UserService,
    SheetResource
  ]
})
export class AppModule {}
